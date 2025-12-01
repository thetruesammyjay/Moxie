"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFundingPayment = calculateFundingPayment;
exports.calculateFundingRate = calculateFundingRate;
const decimal_js_1 = require("decimal.js");
function calculateFundingPayment(positionSize, markPrice, fundingRate) {
    return new decimal_js_1.Decimal(positionSize)
        .mul(markPrice)
        .mul(fundingRate)
        .toNumber();
}
function calculateFundingRate(markPrice, indexPrice, fundingIntervalHours = 1) {
    const _index = new decimal_js_1.Decimal(indexPrice);
    if (_index.isZero())
        return 0;
    const _mark = new decimal_js_1.Decimal(markPrice);
    // Premium = (Mark - Index) / Index
    const premium = _mark.minus(_index).div(_index);
    // Rate = Premium / (24 / Interval)
    const intervalsPerDay = new decimal_js_1.Decimal(24).div(fundingIntervalHours);
    return premium.div(intervalsPerDay).toNumber();
}
