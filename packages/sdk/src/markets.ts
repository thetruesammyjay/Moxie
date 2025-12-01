import { AxiosInstance } from 'axios';
import { Market, OrderBook, Trade } from '@moxie-dex/types';

export class MarketsModule {
  constructor(private api: AxiosInstance) {}

  /**
   * Fetch all active markets
   */
  public async getMarkets(): Promise<Market[]> {
    const response = await this.api.get('/markets');
    return response.data;
  }

  /**
   * Fetch specific market details
   */
  public async getMarket(marketId: string): Promise<Market> {
    const response = await this.api.get(`/markets/${marketId}`);
    return response.data;
  }

  /**
   * Get Orderbook for a market
   */
  public async getOrderBook(marketId: string, depth: number = 20): Promise<OrderBook> {
    const response = await this.api.get(`/markets/${marketId}/orderbook`, {
      params: { depth }
    });
    return response.data;
  }

  /**
   * Get recent trades
   */
  public async getTrades(marketId: string, limit: number = 50): Promise<Trade[]> {
    const response = await this.api.get(`/markets/${marketId}/trades`, {
      params: { limit }
    });
    return response.data;
  }
}