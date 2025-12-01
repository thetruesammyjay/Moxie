import { OrderSide } from '@moxie-dex/types';
/**
 * Calculates the Liquidation Price with high precision.
 * Long: Entry * (1 - 1/Lev + MMR)
 * Short: Entry * (1 + 1/Lev - MMR)
 */
export declare function calculateLiquidationPrice(entryPrice: number | string, leverage: number | string, side: OrderSide, maintenanceMarginRatio: number | string): number;
export declare function isLiquidatable(markPrice: number | string, liquidationPrice: number | string, side: OrderSide): boolean;
