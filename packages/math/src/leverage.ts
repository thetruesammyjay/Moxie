import { Decimal } from 'decimal.js';

/**
 * Calculates effective leverage safely.
 * Leverage = abs(Position Size * Mark Price) / Collateral
 */
export function calculateLeverage(
  positionSize: number | string,
  markPrice: number | string,
  collateral: number | string
): number {
  const _collateral = new Decimal(collateral);
  if (_collateral.isZero()) return 0;

  return new Decimal(positionSize)
    .abs()
    .mul(markPrice)
    .div(_collateral)
    .toNumber();
}

/**
 * Calculates required initial margin.
 * Initial Margin = (abs(Size) * Price) / Target Leverage
 */
export function calculateInitialMargin(
  size: number | string,
  price: number | string,
  targetLeverage: number | string
): number {
  const _leverage = new Decimal(targetLeverage);
  if (_leverage.isZero()) return 0;

  return new Decimal(size)
    .abs()
    .mul(price)
    .div(_leverage)
    .toNumber();
}

/**
 * Calculates max position size for given collateral.
 */
export function calculateMaxPositionSize(
  collateral: number | string,
  price: number | string,
  leverage: number | string
): number {
  const _price = new Decimal(price);
  if (_price.isZero()) return 0;

  return new Decimal(collateral)
    .mul(leverage)
    .div(_price)
    .toNumber();
}
