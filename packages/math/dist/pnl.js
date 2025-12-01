"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateUnrealizedPnl = calculateUnrealizedPnl;
exports.calculateRoe = calculateRoe;
const decimal_js_1 = require("decimal.js");
const types_1 = require("@moxie-dex/types");
function calculateUnrealizedPnl(entryPrice, markPrice, size, side) {
    const _entry = new decimal_js_1.Decimal(entryPrice);
    const _mark = new decimal_js_1.Decimal(markPrice);
    const _size = new decimal_js_1.Decimal(size).abs();
    if (side === types_1.OrderSide.BUY) {
        return _mark.minus(_entry).mul(_size).toNumber();
    }
    else {
        return _entry.minus(_mark).mul(_size).toNumber();
    }
}
function calculateRoe(unrealizedPnl, collateral) {
    const _collateral = new decimal_js_1.Decimal(collateral);
    if (_collateral.isZero())
        return 0;
    return new decimal_js_1.Decimal(unrealizedPnl)
        .div(_collateral)
        .mul(100)
        .toNumber();
}
