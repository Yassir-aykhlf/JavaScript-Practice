### The Scenario: The Global Transaction Analyzer

**The Context:**
You're building a new feature for ChronoBank's internal dashboard. A financial analyst needs a tool that can quickly summarize transaction activity for a specific currency, but display the report in their own local language and format.

The data comes from a new, unified API, so it's already in a cleaner JSON format. However, it's a global feed, containing transactions from all over the world in various currencies.

**The Raw Data:**
Here is a sample of the transaction data you'll be working with.

```javascript
const transactions = [
  { value: 520000, date: '2025-09-18T10:30:00.000Z', currency: 'EUR', locale: 'pt-PT' }, // Portuguese Euro transaction
  { value: 125000, date: '2025-09-19T15:45:10.543Z', currency: 'EUR', locale: 'de-DE' }, // German Euro transaction
  { value: 950000, date: '2025-07-05T08:00:00.000Z', currency: 'USD', locale: 'en-US' }, // American Dollar transaction
  { value: -210000, date: '2025-09-15T23:59:59.999Z', currency: 'EUR', locale: 'de-DE' },
  { value: 78000, date: '2025-09-20T14:12:21.000Z', currency: 'EUR', locale: 'pt-PT' },   // A transaction from "today"
  { value: 15000000, date: '2024-11-22T12:00:00.000Z', currency: 'JPY', locale: 'ja-JP' }, // Japanese Yen transaction
  { value: -45000, date: '2025-09-01T09:21:45.000Z', currency: 'EUR', locale: 'pt-PT' },
];
```

### Your Mission

Your task is to create a function, `analyzeAndDisplayTransactions(transactions, userLocale)`, that takes the raw transaction array and the analyst's locale string.

**The Goal:**
The function must analyze **only the transactions in EUR** and return a summary object. This object will contain key statistics and a list of formatted transaction strings, all localized according to the `userLocale`.

**The function must return an object with the following structure:**

*   `totalVolume`: (string) The sum of all EUR transaction values, formatted as a currency string based on the `userLocale`.
*   `highestTransaction`: (string) The single highest EUR transaction, formatted as a currency string based on the `userLocale`.
*   `lowestTransaction`: (string) The single lowest EUR transaction (most negative), formatted as a currency string based on the `userLocale`.
*   `transactionCount`: (number) The total number of EUR transactions processed.
*   `displayTransactions`: (array of strings) A list of all EUR transactions, where each string is formatted as: `"[Relative Date]: [Formatted Amount]"` (e.g., `"Yesterday: -€2,100.00"`).