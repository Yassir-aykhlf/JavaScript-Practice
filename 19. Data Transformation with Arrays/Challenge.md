### The Scenario

You're a developer at "Future Gadgets," an online electronics store. The checkout system has just handed you a raw `shoppingCart` data object. This data is a bit messy because it comes from a legacy system. Your task is to build a "Cart Processing Pipeline." This pipeline will take the raw cart data, clean it up, calculate all the necessary totals, and finally generate a formatted receipt ready to be displayed to the customer.

Here is the raw data you'll be working with. Notice the inconsistencies—some prices are strings, some items might be invalid, and so on. This is intentional. Real-world data is rarely perfect.

```javascript
// --- INITIAL DATA ---

const shoppingCart = [
  {
    product: 'Wireless Noise-Cancelling Headphones',
    price: '99.99', // Price is a string
    quantity: 2,
    category: 'audio',
    taxable: true,
    shippingCost: 5.00
  },
  {
    product: 'Smartphone X Pro',
    price: 899.50,
    quantity: 1,
    category: 'electronics',
    taxable: true,
    shippingCost: 7.25
  },
  {
    product: 'Vintage Vinyl Record',
    price: 24.50,
    quantity: 1,
    category: 'music',
    taxable: false, // Tax-exempt
    shippingCost: 3.50
  },
  {
    product: 'Data Cable',
    price: '12.00',
    quantity: 3,
    category: 'accessories',
    taxable: true,
    shippingCost: 2.00
  },
  {
    product: 'Extended Warranty', // No price, should be ignored
    quantity: 1,
    category: 'service',
    taxable: false,
    shippingCost: 0
  },
   {
    product: 'Smart Home Hub',
    price: 149.00,
    quantity: 1,
    category: 'electronics',
    taxable: true,
    shippingCost: 8.00
  }
];

// The sales tax rate
const TAX_RATE = 0.0825; // 8.25%
```

---

### Your Challenge

Your task is to implement the following parts in sequence. Each part builds on the last.

#### **Part 1: Data Normalization and Line Totals**

Before we can do any calculations, we need to clean and standardize the data.

**Goal:** Create a function `normalizeAndCalculateLineItems` that takes the raw `shoppingCart` array as input. This function should produce a **new array** of "line items" where:
1.  Any items without a valid `price` are filtered out.
2.  The `price` for each item is converted to a number.
3.  A new property, `lineTotal`, is calculated for each item (`price` * `quantity`).

**Key test:** The original `shoppingCart` array must **not** be modified.

#### **Part 2: Calculating the Order Summary**

Now that you have clean data, you can perform the core business logic calculations.

**Goal:** Create a function `calculateOrderSummary` that takes the normalized line items array from Part 1 as input. This function should return a **single object** that contains the following calculated values:
1.  `subtotal`: The sum of all `lineTotal` values.
2.  `totalShipping`: The sum of all `shippingCost` values.
3.  `totalTax`: The total tax to be charged. Tax is calculated **only** on `taxable` items. The tax for a single item is `lineTotal * TAX_RATE`.
4.  `grandTotal`: The final amount the customer has to pay (`subtotal` + `totalShipping` + `totalTax`).

#### **Part 3: Generating the Customer Receipt**

With the final numbers calculated, it's time to create the user-facing output.

**Goal:** Create a function `generateReceiptHTML` that takes the normalized line items (from Part 1) and the order summary object (from Part 2) as input.
1.  The function should generate a single HTML string.
2.  This string should contain a list of the products, showing the quantity, product name, and the `lineTotal` for each.
3.  It should also display the `subtotal`, `totalShipping`, `totalTax`, and the final `grandTotal`.
4.  Finally, create a simple `displayReceipt` function. This function will call your other functions in the correct order, get the final HTML string, and insert it into the DOM inside the `<div id="receipt-container"></div>`. It should be appended, not overwrite any existing content.

Here's a basic HTML file you can use to see your output:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Order Receipt</title>
    <style>
        body { font-family: monospace; padding: 20px; }
        #receipt-container { border: 1px solid #ccc; padding: 15px; max-width: 400px; }
        ul { list-style: none; padding: 0; }
        li, p { display: flex; justify-content: space-between; margin-bottom: 5px; }
    </style>
</head>
<body>
    <h1>Future Gadgets</h1>
    <div id="receipt-container">
        <p><strong>Thank you for your order!</strong></p>
    </div>
    
    <script src="your-script.js"></script> 
</body>
</html>
```