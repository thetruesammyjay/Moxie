import { MarketsModule } from './markets';
import { TradingModule } from './trading';
export interface MoxieConfig {
    apiUrl: string;
    wsUrl?: string;
    apiKey?: string;
    timeout?: number;
    retries?: number;
}
export declare class MoxieError extends Error {
    message: string;
    code: string;
    statusCode?: number | undefined;
    data?: any | undefined;
    constructor(message: string, code: string, statusCode?: number | undefined, data?: any | undefined);
}
export declare class MoxieClient {
    private axiosInstance;
    markets: MarketsModule;
    trading: TradingModule;
    constructor(config: MoxieConfig);
    /**
     * Health check with timeout override
     */
    getHealth(): Promise<boolean>;
}
