import { AxiosInstance } from 'axios';
import { Order, Position, OrderType, OrderSide } from '@moxie-dex/types';

export interface PlaceOrderParams {
  marketId: string;
  side: OrderSide;
  type: OrderType;
  size: number;
  price?: number; // Optional for Market orders
  leverage?: number;
}

export class TradingModule {
  constructor(private api: AxiosInstance) {}

  /**
   * Place a new order
   */
  public async placeOrder(params: PlaceOrderParams, walletSignature: string): Promise<Order> {
    const response = await this.api.post('/orders', params, {
      headers: { 'X-Wallet-Signature': walletSignature }
    });
    return response.data;
  }

  /**
   * Cancel an order
   */
  public async cancelOrder(orderId: string, walletSignature: string): Promise<boolean> {
    const response = await this.api.delete(`/orders/${orderId}`, {
      headers: { 'X-Wallet-Signature': walletSignature }
    });
    return response.data.success;
  }

  /**
   * Get user positions
   */
  public async getPositions(userId: string): Promise<Position[]> {
    const response = await this.api.get(`/positions`, {
      params: { userId }
    });
    return response.data;
  }

  /**
   * Close a position
   */
  public async closePosition(positionId: string, walletSignature: string): Promise<Order> {
    const response = await this.api.post(`/positions/${positionId}/close`, {}, {
      headers: { 'X-Wallet-Signature': walletSignature }
    });
    return response.data;
  }
}