import { AxiosInstance } from 'axios';
import { Order, Position, OrderType, OrderSide } from '@moxie-dex/types';
export interface PlaceOrderParams {
    marketId: string;
    side: OrderSide;
    type: OrderType;
    size: number;
    price?: number;
    leverage?: number;
}
export declare class TradingModule {
    private api;
    constructor(api: AxiosInstance);
    /**
     * Place a new order
     */
    placeOrder(params: PlaceOrderParams, walletSignature: string): Promise<Order>;
    /**
     * Cancel an order
     */
    cancelOrder(orderId: string, walletSignature: string): Promise<boolean>;
    /**
     * Get user positions
     */
    getPositions(userId: string): Promise<Position[]>;
    /**
     * Close a position
     */
    closePosition(positionId: string, walletSignature: string): Promise<Order>;
}
