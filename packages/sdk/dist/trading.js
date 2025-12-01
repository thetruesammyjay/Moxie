"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingModule = void 0;
class TradingModule {
    constructor(api) {
        this.api = api;
    }
    /**
     * Place a new order
     */
    async placeOrder(params, walletSignature) {
        const response = await this.api.post('/orders', params, {
            headers: { 'X-Wallet-Signature': walletSignature }
        });
        return response.data;
    }
    /**
     * Cancel an order
     */
    async cancelOrder(orderId, walletSignature) {
        const response = await this.api.delete(`/orders/${orderId}`, {
            headers: { 'X-Wallet-Signature': walletSignature }
        });
        return response.data.success;
    }
    /**
     * Get user positions
     */
    async getPositions(userId) {
        const response = await this.api.get(`/positions`, {
            params: { userId }
        });
        return response.data;
    }
    /**
     * Close a position
     */
    async closePosition(positionId, walletSignature) {
        const response = await this.api.post(`/positions/${positionId}/close`, {}, {
            headers: { 'X-Wallet-Signature': walletSignature }
        });
        return response.data;
    }
}
exports.TradingModule = TradingModule;
