import { Decimal } from 'decimal.js';
import { OrderSide } from '@moxie-dex/types';

export function calculateUnrealizedPnl(
  entryPrice: number | string,
  markPrice: number | string,
  size: number | string,
  side: OrderSide
): number {
  const _entry = new Decimal(entryPrice);
  const _mark = new Decimal(markPrice);
  const _size = new Decimal(size).abs();

  if (side === OrderSide.BUY) {
    return _mark.minus(_entry).mul(_size).toNumber();
  } else {
    return _entry.minus(_mark).mul(_size).toNumber();
  }
}

export function calculateRoe(
  unrealizedPnl: number | string,
  collateral: number | string
): number {
  const _collateral = new Decimal(collateral);
  if (_collateral.isZero()) return 0;
  
  return new Decimal(unrealizedPnl)
    .div(_collateral)
    .mul(100)
    .toNumber();
}
