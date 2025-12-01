import { OrderSide } from '@moxie-dex/types';
export declare function calculateUnrealizedPnl(entryPrice: number | string, markPrice: number | string, size: number | string, side: OrderSide): number;
export declare function calculateRoe(unrealizedPnl: number | string, collateral: number | string): number;
