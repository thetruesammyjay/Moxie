export declare enum MarketType {
    PREDICTION = "PREDICTION",
    PERPETUAL = "PERPETUAL"
}
export declare enum OrderSide {
    BUY = "BUY",
    SELL = "SELL"
}
export declare enum OrderType {
    LIMIT = "LIMIT",
    MARKET = "MARKET",
    STOP_LOSS = "STOP_LOSS",
    TAKE_PROFIT = "TAKE_PROFIT",
    STOP_LIMIT = "STOP_LIMIT"
}
export declare enum OrderStatus {
    OPEN = "OPEN",
    FILLED = "FILLED",
    PARTIALLY_FILLED = "PARTIALLY_FILLED",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED"
}
export interface Market {
    id: string;
    title: string;
    baseToken: string;
    quoteToken: string;
    marketType: MarketType;
    markPrice: number;
    indexPrice: number;
    lastPrice: number;
    priceChange24h: number;
    volume24h: number;
    openInterest: number;
    fundingRate: number;
    nextFundingTime: number;
    polymarketId?: string;
    resolutionTime?: number;
    outcome?: string;
}
export interface OrderBookLevel {
    price: number;
    size: number;
    total: number;
}
export interface OrderBook {
    marketId: string;
    bids: OrderBookLevel[];
    asks: OrderBookLevel[];
    timestamp: number;
    sequenceId: number;
}
export interface Trade {
    id: string;
    marketId: string;
    price: number;
    size: number;
    side: OrderSide;
    timestamp: number;
    makerOrderId: string;
    takerOrderId: string;
}
