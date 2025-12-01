import { AxiosInstance } from 'axios';
import { Market, OrderBook, Trade } from '@moxie-dex/types';
export declare class MarketsModule {
    private api;
    constructor(api: AxiosInstance);
    /**
     * Fetch all active markets
     */
    getMarkets(): Promise<Market[]>;
    /**
     * Fetch specific market details
     */
    getMarket(marketId: string): Promise<Market>;
    /**
     * Get Orderbook for a market
     */
    getOrderBook(marketId: string, depth?: number): Promise<OrderBook>;
    /**
     * Get recent trades
     */
    getTrades(marketId: string, limit?: number): Promise<Trade[]>;
}
