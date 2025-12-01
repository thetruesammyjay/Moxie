/**
 * Formats a currency amount (e.g., 1234.5678 -> "1,234.57")
 */
export function formatCurrency(amount: number, decimals: number = 2, symbol: string = '$'): string {
  return `${symbol}${amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })}`;
}

/**
 * Formats a percentage (e.g., 0.054 -> "5.40%")
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Shortens a wallet address (e.g., "AbCd...WxYz")
 */
export function shortenAddress(address: string, chars: number = 4): string {
  if (!address) return '';
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}