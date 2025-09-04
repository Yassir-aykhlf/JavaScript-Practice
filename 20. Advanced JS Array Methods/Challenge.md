### The Scenario: E-Commerce Inventory and Order Management

You've just been hired at **"UrbanHarvest,"** an online marketplace for artisanal food products. The company is small, and their data management is a bit chaotic. They have two main data structures they work with: a product inventory and a stream of incoming customer orders.

Your task is to build a set of utility functions to help the fulfillment team manage orders and inventory. The core of this challenge is choosing the *right tool for the right job*. Many of these tasks *can* be solved in multiple ways, but there's often one method that is more efficient, more readable, and less prone to bugs.

### The Data

Here is the data you'll be working with. Copy this into your editor.

```javascript
const inventory = [
  { id: 'p001', name: 'Artisanal Sourdough Loaf', stock: 5, price: 8.99, category: 'Bakery' },
  { id: 'p002', name: 'Organic Honey Jar', stock: 12, price: 14.50, category: 'Pantry' },
  { id: 'p003', name: 'Cold Brew Coffee Concentrate', stock: 0, price: 18.00, category: 'Beverages' },
  { id: 'p004', name: 'Handcrafted Olive Oil', stock: 8, price: 22.95, category: 'Pantry' },
  { id: 'p005', name: 'Gourmet Chocolate Bar', stock: 20, price: 5.99, category: 'Confections' },
];

const customerOrders = [
  { orderId: 'c001', items: [{ productId: 'p002', quantity: 2 }, { productId: 'p005', quantity: 3 }] },
  { orderId: 'c002', items: [{ productId: 'p004', quantity: 1 }] },
  { orderId: 'c003', items: [{ productId: 'p001', quantity: 1 }, { productId: 'p005', quantity: 1 }] },
  { orderId: 'c004', items: [{ productId: 'p003', quantity: 1 }] }, // This order can't be fulfilled!
];
```

### Your Challenge

Here are your tasks. Build one function for each. Read the descriptions carefully. I'm interested in how you handle the details and edge cases.

---

**Part 1: Basic Inventory Checks**

1.  **`findProduct(productId)`**: The fulfillment team needs to quickly get the details of a product by its ID. Create a function that takes a `productId` and returns the complete product object from the `inventory`. What should your function return if the ID doesn't exist?

2.  **`hasAvailableStock(productId)`**: Before processing an order for a specific product, the system needs to know if there's *any* stock available. Create a function that takes a `productId`, finds the product, and returns `true` if its stock is greater than 0, and `false` otherwise.

---

**Part 2: Order Validation**

3.  **`isOrderFulfillable(orderId)`**: This is a critical one. The team needs to know if an entire order can be fulfilled. Write a function that takes an `orderId`, finds the corresponding order in `customerOrders`, and checks if **every single item** in that order has sufficient stock in the `inventory`. It should return `true` only if all items in the order can be fulfilled.

---

**Part 3: Data Transformation and Analysis**

4.  **`getAllProductIdsFromOrders()`**: The marketing team wants a simple list of all product IDs that have ever been ordered to see which items are popular. Create a function that goes through all `customerOrders` and returns a single, flat array containing every `productId` from every item in every order. Duplicates are expected and welcome here.

5.  **`findLastSoldProductDetails()`**: The manager wants to know about the very last product item that was listed in the `customerOrders` array, assuming the array is sorted by time (most recent order is last). Create a function that finds the last item in the last order and returns the *full product details* from the `inventory` for that item.