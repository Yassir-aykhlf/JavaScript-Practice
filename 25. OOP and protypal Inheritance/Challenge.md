### **Scenario**

You've been tasked with building the foundational logic for a new digital media library app. The app needs to handle different types of media (like books and movies), track their availability, and manage user ratings. Your goal is to create a robust and reusable system using classes.

### **Core Goal**

Create a system of classes to represent various media types, manage their ratings, and track their availability in the library.

### **Tasks**

#### **Task 1: The Base `Media` Class**

This is your foundation. Create a parent class named `Media`.

*   The `constructor` should accept a `title`.
*   It should have a private property (use the `#` syntax) to track if the media is checked out. Let's call it `#isCheckedOut`, and it should default to `false`.
*   It should also have a private property `#ratings`, which should default to an empty array.

---

#### **Task 2: Managing Availability (Encapsulation & Getters)**

Now, let's build the public interface for checking media in and out.

*   Add a **getter** named `isCheckedOut` that returns the value of the private `#isCheckedOut` property.
*   Add a public method named `toggleCheckOutStatus()` that changes the value of `#isCheckedOut` from `false` to `true`, or vice-versa.
*   Add two more public methods: `checkOut()` and `returnMedia()`. These should use the `toggleCheckOutStatus()` method to set the status explicitly. For example, `checkOut()` should ensure the status becomes `true`.

*Self-Correction Question:* Why is it better to have public methods like `checkOut()` control the private `#isCheckedOut` property instead of letting other parts of the code change it directly?

---

#### **Task 3: The Ratings System (Method Chaining & Setters)**

Let's implement the rating system.

*   Add a **getter** called `averageRating` that returns the average of all the numbers in the `#ratings` array. If the array is empty, it should return 0.
*   Add a public method called `addRating()` that accepts a number between 1 and 10. This method should push the rating to the `#ratings` array.
*   Make the `addRating()` method **chainable**. For example, `myBook.addRating(8).addRating(9).addRating(7);` should work.

*Self-Correction Question:* What must a method do to allow other methods to be chained onto its result?

---

#### **Task 4: Creating Subclasses (Inheritance)**

Your library won't just have generic "media." Let's create specific types.

*   Create a `Book` class that **inherits** from `Media`.
    *   Its `constructor` should accept `title`, `author`, and `pages`. It should properly call the parent constructor with the `title`.
*   Create a `Movie` class that also **inherits** from `Media`.
    *   Its `constructor` should accept `title`, `director`, and `runtime`. It should also call the parent constructor.

*Self-Correction Question:* What is the purpose of the `super()` function and why is it important to call it in the subclass constructor?

---

#### **Task 5: Adding Unique Behavior (Polymorphism)**

A book and a movie have different kinds of details. Let's implement that.

*   In the parent `Media` class, add a `getDetails()` method that returns a simple string: `"Title: [The Title]"`.
*   Now, **override** the `getDetails()` method in the `Book` class. It should return a more detailed string: `"Title: [The Title], Author: [The Author], Pages: [Number of Pages]"`.
*   Do the same for the `Movie` class. Its `getDetails()` method should return: `"Title: [The Title], Director: [The Director], Runtime: [The Runtime]"`.
*   **Bonus:** Can you make the child `getDetails()` methods reuse the logic from the parent `getDetails()` method to avoid repeating the "Title: ..." part?

### **Concepts Tested**

*   ES6 Classes (`class`, `constructor`)
*   Prototypal Inheritance (`extends`, `super`)
*   Encapsulation (Private Fields `#`, Public Methods as API)
*   Abstraction (The public API hides the complexity of the rating/checkout systems)
*   Polymorphism (Overriding the `getDetails` method)
*   Getters and Setters
*   Method Chaining (`return this`)