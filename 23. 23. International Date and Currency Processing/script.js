"use strict";

const transactions = [
    {
        value: 520000,
        date: "2025-09-18T10:30:00.000Z",
        currency: "EUR",
        locale: "pt-PT",
    }, // Portuguese Euro transaction
    {
        value: 125000,
        date: "2025-09-19T15:45:10.543Z",
        currency: "EUR",
        locale: "de-DE",
    }, // German Euro transaction
    {
        value: 950000,
        date: "2025-07-05T08:00:00.000Z",
        currency: "USD",
        locale: "en-US",
    }, // American Dollar transaction
    {
        value: -210000,
        date: "2025-09-15T23:59:59.999Z",
        currency: "EUR",
        locale: "de-DE",
    },
    {
        value: 78000,
        date: "2025-09-20T14:12:21.000Z",
        currency: "EUR",
        locale: "pt-PT",
    }, // A transaction from "today"
    {
        value: 15000000,
        date: "2024-11-22T12:00:00.000Z",
        currency: "JPY",
        locale: "ja-JP",
    }, // Japanese Yen transaction
    {
        value: -45000,
        date: "2025-09-01T09:21:45.000Z",
        currency: "EUR",
        locale: "pt-PT",
    },
];

const formatRelativeDate = function (dateStr, userLocale, today) {
    const date = new Date(dateStr);
    const daysPassed = Math.floor(
        (today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
        // 1000 * 60 * 60 * 24, assumes that every day has exactly 24 hours.
        // However, due to Daylight Saving Time (DST), a day can have 23 hours or 25 hours
        // a better approach would be using the library: date-fns
    );
    if (daysPassed === 0) return `Today`;
    if (daysPassed === 1) return `Yesterday`;
    if (daysPassed <= 7) return `${daysPassed} days ago`;

    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
    return new Intl.DateTimeFormat(userLocale, options).format(date);
};

const formatEurCurrency = function (valueInCents, userLocale) {
    return new Intl.NumberFormat(userLocale, {
        style: "currency",
        currency: "EUR",
    }).format(valueInCents / 100);
};

const analyzeAndDisplayTransactions = function (transactions, userLocale) {
    const today = new Date("2025-09-21T00:00:00.000Z");
    const euroTxns = transactions.filter((txn) => txn.currency === "EUR");
    if (euroTxns.length === 0)
        return { message: "No Euro transactions available." };
    const stats = euroTxns.reduce(
        (acc, txn) => {
            acc.totalVolume += txn.value;
            acc.highestTransaction = Math.max(acc.highestTransaction, txn.value);
            acc.lowestTransaction = Math.min(acc.lowestTransaction, txn.value);
            return acc;
        },
        {
            totalVolume: 0,
            highestTransaction: Number.MIN_SAFE_INTEGER,
            lowestTransaction: Number.MAX_SAFE_INTEGER,
        }
    );
    const displayTransactions = euroTxns.map((txn) => {
      const relativeDate = formatRelativeDate(txn.date, userLocale, today);
      const formattedValue = formatEurCurrency(txn.value, userLocale);
      return `${relativeDate}: ${formattedValue}`;
    });
    
    return {
        totalVolume: formatEurCurrency(stats.totalVolume, userLocale),
        highestTransaction: formatEurCurrency(stats.highestTransaction, userLocale),
        lowestTransaction: formatEurCurrency(stats.lowestTransaction, userLocale),
        transactionCount: euroTxns.length,
        displayTransactions
    };
};
