"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoxieClient = exports.MoxieError = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const markets_1 = require("./markets");
const trading_1 = require("./trading");
class MoxieError extends Error {
    constructor(message, code, statusCode, data) {
        super(message);
        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
        this.data = data;
        this.name = 'MoxieError';
    }
}
exports.MoxieError = MoxieError;
class MoxieClient {
    constructor(config) {
        this.axiosInstance = axios_1.default.create({
            baseURL: config.apiUrl,
            timeout: config.timeout || 10000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...(config.apiKey ? { 'X-API-KEY': config.apiKey } : {})
            }
        });
        // Production Ready: Automatic Retries with Exponential Backoff
        (0, axios_retry_1.default)(this.axiosInstance, {
            retries: config.retries ?? 3,
            retryDelay: axios_retry_1.default.exponentialDelay,
            retryCondition: (error) => {
                // Retry on network errors or 5xx server errors
                return axios_retry_1.default.isNetworkOrIdempotentRequestError(error) ||
                    (error.response?.status ? error.response.status >= 500 : false);
            }
        });
        // Production Ready: Response Interceptor for Typed Errors
        this.axiosInstance.interceptors.response.use((response) => response, (error) => {
            if (error.response) {
                // Server responded with a status code outside 2xx range
                throw new MoxieError(error.response.data?.message || 'Unknown API Error', error.response.data?.code || 'API_ERROR', error.response.status, error.response.data);
            }
            else if (error.request) {
                // Request was made but no response received
                throw new MoxieError('Network Error - No response received', 'NETWORK_ERROR');
            }
            else {
                // Error setting up the request
                throw new MoxieError(error.message, 'REQUEST_SETUP_ERROR');
            }
        });
        // Initialize modules
        this.markets = new markets_1.MarketsModule(this.axiosInstance);
        this.trading = new trading_1.TradingModule(this.axiosInstance);
    }
    /**
     * Health check with timeout override
     */
    async getHealth() {
        try {
            const res = await this.axiosInstance.get('/health', { timeout: 2000 });
            return res.status === 200;
        }
        catch (e) {
            return false;
        }
    }
}
exports.MoxieClient = MoxieClient;
