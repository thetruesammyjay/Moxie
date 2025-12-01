"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = exports.OrderType = exports.OrderSide = exports.MarketType = void 0;
var MarketType;
(function (MarketType) {
    MarketType["PREDICTION"] = "PREDICTION";
    MarketType["PERPETUAL"] = "PERPETUAL";
})(MarketType || (exports.MarketType = MarketType = {}));
var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide || (exports.OrderSide = OrderSide = {}));
var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP_LOSS"] = "STOP_LOSS";
    OrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
    OrderType["STOP_LIMIT"] = "STOP_LIMIT";
})(OrderType || (exports.OrderType = OrderType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["OPEN"] = "OPEN";
    OrderStatus["FILLED"] = "FILLED";
    OrderStatus["PARTIALLY_FILLED"] = "PARTIALLY_FILLED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["EXPIRED"] = "EXPIRED";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
