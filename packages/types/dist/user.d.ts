import { OrderSide, OrderStatus, OrderType } from './market';
export interface UserAccount {
    userId: string;
    walletAddress: string;
    collateralBalance: number;
    portfolioValue: number;
    marginUsage: number;
    accountHealth: number;
}
export interface Position {
    id: string;
    userId: string;
    marketId: string;
    side: OrderSide;
    size: number;
    entryPrice: number;
    markPrice: number;
    liquidationPrice: number;
    leverage: number;
    collateral: number;
    unrealizedPnl: number;
    realizedPnl: number;
    fundingPaid: number;
    createdAt: number;
    updatedAt: number;
}
export interface Order {
    id: string;
    userId: string;
    marketId: string;
    type: OrderType;
    side: OrderSide;
    price: number;
    size: number;
    filledSize: number;
    averageFillPrice: number;
    status: OrderStatus;
    reduceOnly: boolean;
    postOnly: boolean;
    triggerPrice?: number;
    createdAt: number;
    updatedAt: number;
}
