import axios, { AxiosInstance, AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { MarketsModule } from './markets';
import { TradingModule } from './trading';

export interface MoxieConfig {
  apiUrl: string;
  wsUrl?: string;
  apiKey?: string;
  timeout?: number;
  retries?: number;
}

export class MoxieError extends Error {
  constructor(
    public message: string,
    public code: string,
    public statusCode?: number,
    public data?: any
  ) {
    super(message);
    this.name = 'MoxieError';
  }
}

export class MoxieClient {
  private axiosInstance: AxiosInstance;
  
  public markets: MarketsModule;
  public trading: TradingModule;

  constructor(config: MoxieConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.apiUrl,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(config.apiKey ? { 'X-API-KEY': config.apiKey } : {})
      }
    });

    // Production Ready: Automatic Retries with Exponential Backoff
    axiosRetry(this.axiosInstance, { 
      retries: config.retries ?? 3,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (error) => {
        // Retry on network errors or 5xx server errors
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || 
               (error.response?.status ? error.response.status >= 500 : false);
      }
    });

    // Production Ready: Response Interceptor for Typed Errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError<any>) => {
        if (error.response) {
          // Server responded with a status code outside 2xx range
          throw new MoxieError(
            error.response.data?.message || 'Unknown API Error',
            error.response.data?.code || 'API_ERROR',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          // Request was made but no response received
          throw new MoxieError('Network Error - No response received', 'NETWORK_ERROR');
        } else {
          // Error setting up the request
          throw new MoxieError(error.message, 'REQUEST_SETUP_ERROR');
        }
      }
    );

    // Initialize modules
    this.markets = new MarketsModule(this.axiosInstance);
    this.trading = new TradingModule(this.axiosInstance);
  }

  /**
   * Health check with timeout override
   */
  public async getHealth(): Promise<boolean> {
    try {
      const res = await this.axiosInstance.get('/health', { timeout: 2000 });
      return res.status === 200;
    } catch (e) {
      return false;
    }
  }
}