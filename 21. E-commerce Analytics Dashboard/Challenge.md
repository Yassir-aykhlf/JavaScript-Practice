## Challenge: E-commerce Analytics Dashboard

You've just joined a mid-sized e-commerce company as a Junior Developer. The marketing team has been manually creating reports from raw transaction data, and they've asked the development team to build an automated analytics system. You've been assigned to create the core data processing module.

### The Scenario

The company has multiple product categories, customer segments, and payment methods. The marketing team needs insights about purchasing patterns, customer behavior, and product performance to make strategic decisions for the upcoming quarter.

You'll receive transaction data in this format:

```javascript
const transactions = [
  {
    id: 'tx_001',
    customerId: 'cust_123',
    customerType: 'premium', // 'premium', 'regular', 'new'
    amount: 299.99,
    items: [
      { category: 'electronics', quantity: 1, price: 199.99 },
      { category: 'accessories', quantity: 2, price: 50.00 }
    ],
    paymentMethod: 'credit_card', // 'credit_card', 'debit_card', 'paypal', 'apple_pay'
    timestamp: '2024-01-15T10:30:00Z',
    refunded: false
  },
  // ... more transactions
];
```

### Your Mission

Create a function called `generateAnalytics(transactions, options)` that processes this data and returns comprehensive insights. The marketing team has specifically requested these capabilities:

1. **Revenue Analysis**: Total revenue, average order value, and revenue breakdown by customer type
2. **Product Insights**: Best-performing categories, category-wise revenue distribution
3. **Payment Intelligence**: Payment method preferences and their correlation with order values
4. **Customer Segmentation**: Spending patterns across different customer types
5. **Trend Detection**: Identify customers who might be worth targeting for premium upgrades

The `options` parameter should allow the marketing team to:
- Filter by date ranges
- Exclude refunded transactions
- Focus on specific customer types or payment methods
- Set minimum thresholds for various calculations

### The Trap-Laden Requirements

Here's where it gets interesting. The marketing team mentioned these "simple" additional requirements that seem straightforward but contain subtle complexity:

- "We want to see which categories have the most items sold, not just highest revenue"
- "Show us customers who have made multiple purchases - we think they're our most valuable"
- "We need the average order value, but exclude any orders under $10 since those are probably test transactions"
- "Group the payment methods by 'card' vs 'digital wallet' types for the summary"
- "We want to see a 'customer upgrade potential' score - customers who are regular but have high spending might upgrade to premium"

### Success Criteria

Your solution should be a single, well-structured function that returns an object containing all the requested analytics. The marketing team should be able to call it like this:

```javascript
const analytics = generateAnalytics(transactions, {
  excludeRefunded: true,
  minOrderValue: 10,
  customerTypes: ['premium', 'regular'],
  dateRange: { start: '2024-01-01', end: '2024-01-31' }
});
```