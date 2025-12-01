"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketsModule = void 0;
class MarketsModule {
    constructor(api) {
        this.api = api;
    }
    /**
     * Fetch all active markets
     */
    async getMarkets() {
        const response = await this.api.get('/markets');
        return response.data;
    }
    /**
     * Fetch specific market details
     */
    async getMarket(marketId) {
        const response = await this.api.get(`/markets/${marketId}`);
        return response.data;
    }
    /**
     * Get Orderbook for a market
     */
    async getOrderBook(marketId, depth = 20) {
        const response = await this.api.get(`/markets/${marketId}/orderbook`, {
            params: { depth }
        });
        return response.data;
    }
    /**
     * Get recent trades
     */
    async getTrades(marketId, limit = 50) {
        const response = await this.api.get(`/markets/${marketId}/trades`, {
            params: { limit }
        });
        return response.data;
    }
}
exports.MarketsModule = MarketsModule;
