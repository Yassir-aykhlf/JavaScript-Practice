### **The Challenge: The Interactive E-Commerce Component**

You are building a feature for an e-commerce website. The feature displays a product, tracks its inventory, and allows users to add it to their cart. You have been given some starting code, but the methods are not behaving as expected when used in different contexts. Your job is to fix the functionality using your knowledge of `call` and `bind`.

Here is the starting data and object:

```jsx
// --- DO NOT EDIT THIS OBJECT ---
const product = {
  itemName: 'Ergonomic Mouse',
  stock: 15,
  actions: {
    updateStock(amount) {
      this.stock -= amount;
      console.log(`Stock updated. New stock for ${this.itemName}: ${this.stock}`);
      return this.stock;
    },
    displayStock() {
      console.log(`${this.itemName} has ${this.stock} units in stock.`);
    }
  }
};

// --- This represents a user's shopping cart ---
const userCart = {
    owner: 'Alice',
    items: [],
    // This cart needs a way to check stock, but we don't want to duplicate code.
};

// --- This simulates a DOM element for user interaction ---
const addToCartButton = {
    // This button needs to trigger the stock update when clicked.
    // A real implementation would use document.querySelector, but we simulate it here.
    addEventListener: function(eventName, callback) {
        if(eventName === 'click') {
            console.log('Event listener attached to the button.');
            // Simulating a click event. In a real scenario, the browser calls this.
            callback();
        }
    }
};
```

---

### **Part 1: The Detached Method Problem**

**Context:** Your colleague extracted the `displayStock` method to create a generic inventory reporting function. However, when they try to call it, the program crashes.

**Objective:**

1. Store the `displayStock` method in a new variable called `getInventoryReport`.
2. When you try to call `getInventoryReport()`, it will fail.
3. Fix the call so that `getInventoryReport` correctly executes and logs the stock for the `product` object, without modifying the original `product` object or the `getInventoryReport` function itself.

**Initial Code Snippet:**

```jsx
const getInventoryReport = product.actions.displayStock;
```

// This will throw a TypeError. Why?
// getInventoryReport();

**Hint:** How can you invoke a function and, for that single invocation, tell it precisely which object should be its `this`?

---

### **Part 2: Reusing Methods Across Objects**

**Context:** The `userCart` object needs to verify the stock of an item before adding it. You realize the `displayStock` method from the `product` object is perfect for this, but it needs to operate on a different object's data. You've received data for a competing product from an API.

**Objective:**

1. Create a new object `competitorProduct` with `itemName` and `stock` properties.
2. Use the *original* `product.actions.displayStock` method to log the stock details for your new `competitorProduct` object. You should not have to add a `displayStock` method to the competitor's object.

**Initial Code Snippet:**

```jsx
const competitorProduct = {
  itemName: 'Gaming Keyboard',
  stock: 32
};

// How can you make product.actions.displayStock run using competitorProduct's data?
```

**Hint:** You need to *call* the method from one object but make its `this` keyword temporarily point to another object.

---

### **Part 3: The Event Listener Catastrophe**

**Context:** This is the most critical part of the feature. You need to connect the `updateStock` method to the `addToCartButton`. When the button is "clicked," it should reduce the stock of the `product` by one. However, simply passing the method as a callback breaks the `this` binding, causing `this.stock` to be undefined within the function.

**Objective:**

1. Use the `addEventListener` method of the `addToCartButton` object.
2. Pass it the `product.actions.updateStock` method as the callback.
3. The stock should be reduced by **1** when the "click" happens.
4. Your solution must ensure that `this` inside `updateStock` correctly refers to the `product` object, not the button.

**Engineered Pitfall:** If you simply pass `product.actions.updateStock` as the callback, the `this` context will be wrong. If you use `call`, the function will execute immediately instead of waiting for the click. This is where many junior developers get stuck.

**Initial Code Snippet:**

```jsx
// This is the INCORRECT implementation that you need to fix.
// It will fail because 'this' inside updateStock will not be the 'product' object.
// addToCartButton.addEventListener('click', product.actions.updateStock);
```

**Hint:** You don't want to call the function right away. You need to create a *new* function that has its `this` value locked in place, ready to be executed later by the event listener. How can you pre-set an argument at the same time?