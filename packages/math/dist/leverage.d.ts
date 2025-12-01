/**
 * Calculates effective leverage safely.
 * Leverage = abs(Position Size * Mark Price) / Collateral
 */
export declare function calculateLeverage(positionSize: number | string, markPrice: number | string, collateral: number | string): number;
/**
 * Calculates required initial margin.
 * Initial Margin = (abs(Size) * Price) / Target Leverage
 */
export declare function calculateInitialMargin(size: number | string, price: number | string, targetLeverage: number | string): number;
/**
 * Calculates max position size for given collateral.
 */
export declare function calculateMaxPositionSize(collateral: number | string, price: number | string, leverage: number | string): number;
