## The Scenario: A Digital Inventory System

Imagine we're working for a small, independent bookstore called "The Quill & Parchment." They're expanding their services to include both physical and digital media, and their old spreadsheet system for tracking inventory is no longer cutting it. They've asked us to build the foundational components for a new digital inventory system.

Our goal is not to build a full application, but to create the core "blueprints" for the items they sell. This is a common task—creating reusable, well-structured components that other parts of an application can rely on.

I'm not going to give you a step-by-step guide. I'll present you with a series of goals. Your job is to use the principles you've learned to meet them. Don't worry about getting it perfect on the first try. The goal here is to build, learn, and refine.

---

## Challenge: The Quill & Parchment Inventory System

Ready? Let's start with the most common item in the store.

---

## Task 1: The Basic Blueprint

**Goal:** Create a way to represent a standard physical book in our system.

- Define a `Book` constructor. It should accept title, author, and price as arguments.
- When a new Book is created, these properties should be set on the new object.

**To Validate:**

Create two different Book instances with unique data and `console.log` them to verify that the properties have been correctly assigned.

**Senior's Note:** Just focus on the constructor for now. This is about creating the basic data container. We'll add the behaviors later.

---

## Task 2: Adding Shared Behavior (The Power of Prototypes)

**Goal:** All books, no matter what they are, need a way to display their essential information.

- Add a method named `getDetails()` to the Book's prototype.
- This method should return a formatted string, for example: `"Dune by Frank Herbert for $19.99"`.

**To Validate:**

Call the `getDetails()` method on one of your existing Book instances and log the result.

**Senior's Note:** Pay close attention to *where* you define this method. Think about efficiency. If we were to create 10,000 book objects, how would the system's memory be affected by your choice? This is a key test of your understanding of prototypes.

---

## Task 3: Inheritance for a New Era (The Prototype Chain)

**Goal:** "The Quill & Parchment" is now selling audiobooks. An Audiobook is a type of book, but with some unique characteristics. We need a new blueprint for it.

- Define an `Audiobook` constructor. It should inherit from `Book`.
- An Audiobook needs all the properties of a Book (title, author, price), plus a new one: `runtime` (in minutes).
- Ensure that when you create an Audiobook, the title, author, and price properties are set using the Book constructor's logic, without duplicating code.

**To Validate:**

1. Create an Audiobook instance and log it. Verify it has all four properties: title, author, price, and runtime.
2. Call the `getDetails()` method on your new Audiobook instance. It should work.

**Senior's Note:** This is where things get interesting and where many developers stumble. How do you link the `Audiobook` prototype to the `Book` prototype? And how do you correctly call the `Book` constructor from within the `Audiobook` constructor? Getting this right demonstrates a deep understanding of how inheritance is manually wired up in JavaScript.

---

## Task 4: Overriding Behavior (Polymorphism in Action)

**Goal:** The standard `getDetails()` message isn't quite right for an Audiobook. We don't just care about the price; we care about the listening time.

- Override the `getDetails()` method specifically for Audiobook instances.
- The new method should return a more descriptive string, like:`"The Hobbit by J.R.R. Tolkien, 600 min. for $24.99"`.
It should not affect the original `getDetails()` method on standard Book objects.

**To Validate:**

1. Create a Book instance and call `getDetails()` on it. Log the result.
2. Create an Audiobook instance and call `getDetails()` on it. Log the result.
3. The two outputs should be formatted differently, according to their respective methods.

**Senior's Note:** This task tests your understanding of how the prototype chain resolves method calls. When you call `getDetails()` on an Audiobook, why does JavaScript use your new method instead of the one on `Book.prototype`? Answering that question means you've grasped polymorphism.

---

## Bonus Task 5: Protecting the Data (A Glimpse of Encapsulation)

**Goal:** The store wants to offer discounts, but they want to control how discounts are applied to prevent accidental or invalid price changes. The price should not be changed directly.

- Modify your Book constructor so that the price cannot be directly reassigned after the object is created.
- Instead, create a method on the prototype called `applyDiscount()`. This method should take a percentage (e.g., `0.10` for 10%) and apply it to the current price.
- Make sure the price can never be discounted below $0.

**To Validate:**

1. Create a Book instance.
2. Try to change its price directly (`myBook.price = 5.00;`). Log `getDetails()` to see if it worked (it shouldn't).
3. Call `applyDiscount(0.20)` on the book and then log `getDetails()` to see the new, correctly calculated price.

**Senior's Note:** True privacy isn't something JavaScript's prototypal model offered out-of-the-box in the old days. This is a challenge that requires you to think about patterns. How can you use what you know about function scopes and constructors to "hide" data? This might lead you to discover trade-offs between perfect encapsulation and prototypal efficiency. There's no single "right" answer here, but your approach will tell me a lot about your problem-solving process.