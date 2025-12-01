"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLiquidationPrice = calculateLiquidationPrice;
exports.isLiquidatable = isLiquidatable;
const decimal_js_1 = require("decimal.js");
const types_1 = require("@moxie-dex/types");
/**
 * Calculates the Liquidation Price with high precision.
 * Long: Entry * (1 - 1/Lev + MMR)
 * Short: Entry * (1 + 1/Lev - MMR)
 */
function calculateLiquidationPrice(entryPrice, leverage, side, maintenanceMarginRatio) {
    const _leverage = new decimal_js_1.Decimal(leverage);
    const _entry = new decimal_js_1.Decimal(entryPrice);
    const _mmr = new decimal_js_1.Decimal(maintenanceMarginRatio);
    if (_leverage.isZero())
        return 0;
    const invLev = new decimal_js_1.Decimal(1).div(_leverage);
    if (side === types_1.OrderSide.BUY) {
        // Entry * (1 - 1/Lev + MMR)
        return _entry.mul(new decimal_js_1.Decimal(1).minus(invLev).plus(_mmr)).toNumber();
    }
    else {
        // Entry * (1 + 1/Lev - MMR)
        return _entry.mul(new decimal_js_1.Decimal(1).plus(invLev).minus(_mmr)).toNumber();
    }
}
function isLiquidatable(markPrice, liquidationPrice, side) {
    const _mark = new decimal_js_1.Decimal(markPrice);
    const _liq = new decimal_js_1.Decimal(liquidationPrice);
    if (side === types_1.OrderSide.BUY) {
        return _mark.lessThanOrEqualTo(_liq);
    }
    else {
        return _mark.greaterThanOrEqualTo(_liq);
    }
}
