export enum MarketType {
  PREDICTION = 'PREDICTION',
  PERPETUAL = 'PERPETUAL'
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL'
}

export enum OrderType {
  LIMIT = 'LIMIT',
  MARKET = 'MARKET',
  STOP_LOSS = 'STOP_LOSS',
  TAKE_PROFIT = 'TAKE_PROFIT',
  STOP_LIMIT = 'STOP_LIMIT'
}

export enum OrderStatus {
  OPEN = 'OPEN',
  FILLED = 'FILLED',
  PARTIALLY_FILLED = 'PARTIALLY_FILLED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED'
}

export interface Market {
  id: string;
  title: string;
  baseToken: string;
  quoteToken: string;
  marketType: MarketType;
  
  // Price Data
  markPrice: number;
  indexPrice: number;
  lastPrice: number;
  priceChange24h: number;
  
  // Liquidity & Volume
  volume24h: number;
  openInterest: number;
  
  // Funding
  fundingRate: number;
  nextFundingTime: number; // Timestamp
  
  // Metadata from Polymarket
  polymarketId?: string;
  resolutionTime?: number;
  outcome?: string; // e.g., "Yes" or "No"
}

export interface OrderBookLevel {
  price: number;
  size: number;
  total: number; // Cumulative size
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