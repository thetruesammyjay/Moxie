import { OrderSide } from './market';

export enum EventType {
  TRADE = 'TRADE',
  ORDER_UPDATE = 'ORDER_UPDATE',
  POSITION_UPDATE = 'POSITION_UPDATE',
  LIQUIDATION = 'LIQUIDATION',
  FUNDING_UPDATE = 'FUNDING_UPDATE'
}

export interface BaseEvent {
  type: EventType;
  timestamp: number;
}

export interface TradeEvent extends BaseEvent {
  type: EventType.TRADE;
  data: {
    marketId: string;
    price: number;
    size: number;
    side: OrderSide;
    makerOrderId: string;
    takerOrderId: string;
  };
}

export interface LiquidationEvent extends BaseEvent {
  type: EventType.LIQUIDATION;
  data: {
    positionId: string;
    userId: string;
    marketId: string;
    liquidatedSize: number;
    liquidationPrice: number;
    remainingCollateral: number;
  };
}