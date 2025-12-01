import { OrderSide, OrderStatus, OrderType } from './market';

export interface UserAccount {
  userId: string;
  walletAddress: string;
  collateralBalance: number; // In base currency (e.g. SOL)
  portfolioValue: number;
  marginUsage: number;
  accountHealth: number; // 0-100%
}

export interface Position {
  id: string;
  userId: string;
  marketId: string;
  side: OrderSide; // BUY (Long) or SELL (Short)
  
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
  
  price: number; // 0 for Market orders
  size: number;
  filledSize: number;
  averageFillPrice: number;
  
  status: OrderStatus;
  
  reduceOnly: boolean;
  postOnly: boolean;
  
  triggerPrice?: number; // For Stop orders
  
  createdAt: number;
  updatedAt: number;
}