### The Scenario: ChronoBank's Legacy System Migration

**The Context:**
You're on the team at "ChronoBank," a new FinTech startup. We're in the process of migrating data from a recently acquired, older financial institution. Their system exports transaction logs as a simple array of semi-colon delimited strings. It's not pretty, but it's what we have to work with.

The data contains ultra-high-value transactions from institutional clients, so the numbers can be massive. The system was also built in a hurry, so the data formats have... quirks.

**The Raw Data:**
Here is a sample of the raw log data we're receiving.

```javascript
const rawTransactions = [
  // FORMAT: TRANSACTION_ID;TIMESTAMP_ISO_UTC;AMOUNT_IN_CENTS;FEE_PERCENTAGE
  '987654321098765432101;2025-09-18T10:30:00.000Z;500_000_00;0.5',
  '987654321098765432102;2025-08-01T15:45:10.543Z;12_345_678_90;1.2',
  '12345;2024-12-25T08:00:00.000Z;99_95;0.0', // A small, old transaction
  '987654321098765432103;2025-09-17T23:59:59.999Z;2_100_000_000_000_000_000;2.0' // Exceeds standard number limits
];
```

### Your Mission

Your task is to write a function, `processTransactions(logs)`, that takes this raw array of strings and processes it into a structured, usable format.

**The Goal:**
The function must return an array of objects, where each object represents a fully processed and validated transaction. The final output should be a clean, reliable data source for our new platform's analytics dashboard.

**Each processed transaction object must have the following structure and data types:**

*   `transactionId`: (`BigInt`) The unique identifier for the transaction.
*   `transactionDate`: (`string`) The date of the transaction, formatted as `DD/MM/YYYY`.
*   `originalAmount`: (`BigInt`) The original transaction amount, in cents.
*   `feeCharged`: (`BigInt`) The calculated fee, in cents. This should be rounded down to the nearest whole cent (floor).
*   `netAmount`: (`BigInt`) The final amount after the fee has been deducted.
*   `daysAgo`: (`number`) An integer representing how many full days have passed between the transaction date and today (for this challenge, assume "today" is September 20th, 2025).
