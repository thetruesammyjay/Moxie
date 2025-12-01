import { Decimal } from 'decimal.js';
import { OrderSide } from '@moxie-dex/types';

/**
 * Calculates the Liquidation Price with high precision.
 * Long: Entry * (1 - 1/Lev + MMR)
 * Short: Entry * (1 + 1/Lev - MMR)
 */
export function calculateLiquidationPrice(
  entryPrice: number | string,
  leverage: number | string,
  side: OrderSide,
  maintenanceMarginRatio: number | string
): number {
  const _leverage = new Decimal(leverage);
  const _entry = new Decimal(entryPrice);
  const _mmr = new Decimal(maintenanceMarginRatio);

  if (_leverage.isZero()) return 0;

  const invLev = new Decimal(1).div(_leverage);

  if (side === OrderSide.BUY) {
    // Entry * (1 - 1/Lev + MMR)
    return _entry.mul(new Decimal(1).minus(invLev).plus(_mmr)).toNumber();
  } else {
    // Entry * (1 + 1/Lev - MMR)
    return _entry.mul(new Decimal(1).plus(invLev).minus(_mmr)).toNumber();
  }
}

export function isLiquidatable(
  markPrice: number | string,
  liquidationPrice: number | string,
  side: OrderSide
): boolean {
  const _mark = new Decimal(markPrice);
  const _liq = new Decimal(liquidationPrice);

  if (side === OrderSide.BUY) {
    return _mark.lessThanOrEqualTo(_liq);
  } else {
    return _mark.greaterThanOrEqualTo(_liq);
  }
}
