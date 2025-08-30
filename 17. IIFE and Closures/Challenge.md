#### **The Challenge: The "User Engagement" Widget**

**1. A Realistic, Relatable Scenario:**
We've been tasked with creating a simple, self-contained "User Engagement" widget for our company's web application. This widget needs to track user interactions on a page (like clicks on specific articles) and send a summary report to a (mock) analytics service after a delay. The crucial requirement is that this widget must be completely independent and should not interfere with any other scripts running on the page, especially the global scope.

**The Challenge is divided into three parts that build on each other.**

---
#### **Part 1: Safe Initialization and Data Privacy**

**Context:** First, we need to set up the widget's core components and state. We have a single `h1` on the page that we need to target, and we need a variable to count user clicks. This entire setup must be "sandboxed" to prevent conflicts. Global variables are strictly forbidden.

Your starting HTML looks like this:
```html
<body>
  <h1>Today's Top Article</h1>
  <!-- Other content -->
</body>
```

**Objective:**
Write the initial JavaScript code that:
1.  Selects the `h1` element and stores it in a variable.
2.  Declares a `clickCount` variable, initialized to `0`.
3.  Changes the `h1` element's color to `teal` to confirm it has been selected.
4.  Ensures that neither the `h1` element variable nor `clickCount` can be accessed from the browser's console (i.e., they are not in the global scope). The code should run automatically as soon as the script loads.

**Hint:** How can you create a private scope for your variables that executes immediately and then disappears?

---
#### **Part 2: Tracking State with an Event Listener**

**Context:** Now that the widget is safely initialized, we need to track clicks. The product manager wants the `h1` element to act as our primary interaction point. Every time a user clicks the `h1`, our private `clickCount` variable should be incremented. After each click, the current count should be logged to the console.

**Objective:**
Building on your code from Part 1, add an event listener to the `h1` element. When the `h1` is clicked, the callback function should:
1.  Increment the `clickCount` variable from Part 1.
2.  Log the message: `"Article clicked. Total clicks: [current count]"`.

**Hint:** The event listener's callback function will be executed long after your initial setup code has finished running. How can that callback function still access the `clickCount` variable from its "birthplace"?

---
#### **Part 3: Asynchronous Reporting and a Common Pitfall**

**Context:** The final requirement is to add multiple "sub-features" to our page, each with its own "report" button. We will simulate this with three buttons. When a button is clicked, it should wait for 2 seconds and then log a message identifying *which* button was clicked. This is a classic scenario that can easily lead to bugs if your understanding of scope and closures is superficial.

Your starting HTML now includes three buttons:

```html
<body>
  <h1>Today's Top Article</h1>
  <button>Report Feature 1</button>
  <button>Report Feature 2</button>
  <button>Report Feature 3</button>
</body>
```

**Objective:**
Inside your IIFE, write code that:
1.  Selects all three buttons.
2.  Loops through the buttons (e.g., using `for`).
3.  Inside the loop, attaches a `click` event listener to each button.
4.  The event listener for each button should use `setTimeout` to wait 2 seconds.
5.  After 2 seconds, the `setTimeout` callback should log a message like `"Report for Feature #[N] generated."`, where `[N]` is the number of the button that was clicked (1, 2, or 3).

**Engineered Failure Point:** This task is specifically designed to expose a common misunderstanding. If you use the `var` keyword in your loop, you will likely get the wrong output. Your challenge is to not only make it work but to understand *why* the common approach fails.

**Hint:** Think carefully about *when* the loop runs versus *when* the event callback and `setTimeout` callbacks run. What exact value does the closure for the timer's callback capture?