"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["TRADE"] = "TRADE";
    EventType["ORDER_UPDATE"] = "ORDER_UPDATE";
    EventType["POSITION_UPDATE"] = "POSITION_UPDATE";
    EventType["LIQUIDATION"] = "LIQUIDATION";
    EventType["FUNDING_UPDATE"] = "FUNDING_UPDATE";
})(EventType || (exports.EventType = EventType = {}));
