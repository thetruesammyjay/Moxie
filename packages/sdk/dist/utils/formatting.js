"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = formatCurrency;
exports.formatPercentage = formatPercentage;
exports.shortenAddress = shortenAddress;
/**
 * Formats a currency amount (e.g., 1234.5678 -> "1,234.57")
 */
function formatCurrency(amount, decimals = 2, symbol = '$') {
    return `${symbol}${amount.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    })}`;
}
/**
 * Formats a percentage (e.g., 0.054 -> "5.40%")
 */
function formatPercentage(value, decimals = 2) {
    return `${(value * 100).toFixed(decimals)}%`;
}
/**
 * Shortens a wallet address (e.g., "AbCd...WxYz")
 */
function shortenAddress(address, chars = 4) {
    if (!address)
        return '';
    return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
}
