import { Decimal } from 'decimal.js';

export function calculateFundingPayment(
  positionSize: number | string,
  markPrice: number | string,
  fundingRate: number | string
): number {
  return new Decimal(positionSize)
    .mul(markPrice)
    .mul(fundingRate)
    .toNumber();
}

export function calculateFundingRate(
  markPrice: number | string,
  indexPrice: number | string,
  fundingIntervalHours: number = 1
): number {
  const _index = new Decimal(indexPrice);
  if (_index.isZero()) return 0;

  const _mark = new Decimal(markPrice);
  
  // Premium = (Mark - Index) / Index
  const premium = _mark.minus(_index).div(_index);
  
  // Rate = Premium / (24 / Interval)
  const intervalsPerDay = new Decimal(24).div(fundingIntervalHours);
  
  return premium.div(intervalsPerDay).toNumber();
}
