"use strict";

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

const rawTransactions = [
    // FORMAT: TRANSACTION_ID;TIMESTAMP_ISO_UTC;AMOUNT_IN_CENTS;FEE_PERCENTAGE
    "987654321098765432101;2025-09-18T10:30:00.000Z;500_000_00;0.5",
    "987654321098765432102;2025-08-01T15:45:10.543Z;12_345_678_90;1.2",
    "12345;2024-12-25T08:00:00.000Z;99_95;0.0", // A small, old transaction
    "987654321098765432103;2025-09-17T23:59:59.999Z;2_100_000_000_000_000_000;2.0", // Exceeds standard number limits
];

const processTransactions = function (logs) {
    const today = new Date('2025-09-20T00:00:00.000Z');

    return logs.map((log) => {
        const [idStr, dateStr, amountStr, feePercentStr] = log.split(";");

        const originalAmount = BigInt(amountStr.replace(/_/g, ""));
        const feePercentage = parseFloat(feePercentStr);

        const feeCharged = (originalAmount * BigInt(Math.round(feePercentage * 10))) / 1000n;
        const netAmount = originalAmount - feeCharged;

        const txnDateObj = new Date(dateStr);
        const day = `${txnDateObj.getUTCDate()}`.padStart(2, "0");
        const month = `${txnDateObj.getUTCMonth() + 1}`.padStart(2, "0");
        const year = txnDateObj.getUTCFullYear();

        return {
            transactionId: BigInt(idStr),
            transactionDate: `${day}/${month}/${year}`,
            originalAmount,
            feeCharged,
            netAmount,
            daysAgo: Math.floor(
                (today.getTime() - txnDateObj.getTime()) / MILLISECONDS_PER_DAY
            ),
        };
    });
};

console.log(processTransactions(rawTransactions));
