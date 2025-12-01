/**
 * Formats a currency amount (e.g., 1234.5678 -> "1,234.57")
 */
export declare function formatCurrency(amount: number, decimals?: number, symbol?: string): string;
/**
 * Formats a percentage (e.g., 0.054 -> "5.40%")
 */
export declare function formatPercentage(value: number, decimals?: number): string;
/**
 * Shortens a wallet address (e.g., "AbCd...WxYz")
 */
export declare function shortenAddress(address: string, chars?: number): string;
