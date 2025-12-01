"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLeverage = calculateLeverage;
exports.calculateInitialMargin = calculateInitialMargin;
exports.calculateMaxPositionSize = calculateMaxPositionSize;
const decimal_js_1 = require("decimal.js");
/**
 * Calculates effective leverage safely.
 * Leverage = abs(Position Size * Mark Price) / Collateral
 */
function calculateLeverage(positionSize, markPrice, collateral) {
    const _collateral = new decimal_js_1.Decimal(collateral);
    if (_collateral.isZero())
        return 0;
    return new decimal_js_1.Decimal(positionSize)
        .abs()
        .mul(markPrice)
        .div(_collateral)
        .toNumber();
}
/**
 * Calculates required initial margin.
 * Initial Margin = (abs(Size) * Price) / Target Leverage
 */
function calculateInitialMargin(size, price, targetLeverage) {
    const _leverage = new decimal_js_1.Decimal(targetLeverage);
    if (_leverage.isZero())
        return 0;
    return new decimal_js_1.Decimal(size)
        .abs()
        .mul(price)
        .div(_leverage)
        .toNumber();
}
/**
 * Calculates max position size for given collateral.
 */
function calculateMaxPositionSize(collateral, price, leverage) {
    const _price = new decimal_js_1.Decimal(price);
    if (_price.isZero())
        return 0;
    return new decimal_js_1.Decimal(collateral)
        .mul(leverage)
        .div(_price)
        .toNumber();
}
