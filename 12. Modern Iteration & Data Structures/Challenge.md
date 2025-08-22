**Your Role:** You're a junior full-stack engineer at a new startup called "DevDine". Our platform helps users find and review restaurants. You've just been tasked with building the main data processing logic for the restaurant profile page. You'll be working with a mock API response that gives you a big blob of data for a single restaurant. Your job is to wrangle this data into formats that our front-end team can easily use.

Here's the initial data structure you'll be working with. Copy this into your editor.

```javascript
// --- Initial Data ---
const restaurantData = {
  name: "The Rustic Spoon",
  cuisine: "Italian",
  id: "rr-001",
  menuSpecials: [
    "Truffle Risotto",
    "Margherita Pizza",
    "Gnocchi al Pesto",
    "Tiramisu"
  ],
  openingHours: {
    tuesday: { open: 11, close: 22 },
    wednesday: { open: 11, close: 22 },
    thursday: { open: 11, close: 22 },
    friday: { open: 11, close: 23 },
    saturday: { open: 12, close: 24 },
    sunday: { open: 12, close: 20 },
  },
  tags: ["Italian", "Cozy", "Pizza", "Family Friendly", "Italian", "Pasta"],
  averageRating: 4.5,
  chef: {
    name: "Marco Rossi",
    specialty: "Pasta"
  },
  // We want to add a method to book a table
  bookTable: function(numGuests) {
    console.log(`Booking a table for ${numGuests} guests at ${this.name}.`);
  }
};
```

Let's break this down into a few parts. Take your time with each one.

---

### **The Challenge: Building the DevDine Profile Page Logic**

#### **Part 1: Foundational Data Display**

Our first goal is to simply display the basic, structured information we have.

**Task 1.1: Displaying the Menu Specials**

The UI team wants a numbered list of the daily specials. The list should be 1-indexed (i.e., start with "1.", not "0.").

*   **Objective:** Loop over the `menuSpecials` array and log a string for each item to the console, like:
    `1: Truffle Risotto`
    `2: Margherita Pizza`
    ...and so on.
*   **Hint:** The standard `for-of` loop gives you the item, but not the index. How can you get both the index and the item in a modern, clean way while iterating?

**Task 1.2: Formatting the Opening Hours**

The `openingHours` object is great for logic, but not for display. We need to present it in a human-readable format.

*   **Objective:** Loop over the `openingHours` object. For each day the restaurant is open, log a string to the console like:
    `On tuesday, we are open from 11 to 22.`
    `On wednesday, we are open from 11 to 22.`
    ...and so on for all open days.
*   **Hint:** You'll quickly discover you can't use a `for-of` loop directly on an object. What `Object` method can you use to transform the object into an iterable structure that gives you both the key (the day) and the value (the hours object) in each iteration?

#### **Part 2: Data Transformation & Modern Object Creation**

Next, we need to clean up some of the data and create a new, summary object for a different part of the UI.

**Task 2.1: Generating Unique Tags**

Our content team has been a bit sloppy, and the `tags` array has duplicates. The UI needs a clean list of unique tags to display.

*   **Objective:** From the `restaurantData.tags` array, create a new array called `uniqueTags` that contains each tag only once. Log the `uniqueTags` array to the console.
*   **Hint:** You could write a loop and use `.includes()` to build a new array, but there's a modern JavaScript data structure specifically designed to hold only unique values. How can you leverage it to solve this in one line?

**Task 2.2: Creating a Restaurant Overview Object**

For a "quick view" card on the homepage, we need a new, smaller object with some specific information. This task will test your ability to build objects using modern syntax.

*   **Objective:** Create a new object called `restaurantOverview`. It should contain:
    1.  The restaurant's `name` and `cuisine`, taken directly from `restaurantData`.
    2.  A property called `mainTag`, which should be the *first* tag from the `uniqueTags` array you created in the previous step.
    3.  A new method called `getMenuSummary` that, when called, logs a string like: "The Rustic Spoon offers Italian cuisine and is known for Truffle Risotto." (using the first special).
    4.  A dynamic property. Let's say we want to highlight today's hours. Create a property where the *key* is the current day of the week (e.g., 'friday') and the *value* is the corresponding hours object from `restaurantData.openingHours`.
*   **Hint:** Think about how Enhanced Object Literals can simplify this. How can you add properties from existing variables without `key: value`? How do you write methods without the `function` keyword? How do you create a property key from a variable's value?

#### **Part 3: Handling Unreliable & Inconsistent Data**

Our backend is still under development, and the API sometimes returns incomplete data. Our code needs to be robust and not crash when this happens.

Here's a new mock API response. Notice how the data for "Pizza Palace" is different.

```javascript
// --- New, Inconsistent Data ---
const allRestaurants = [
  // A complete record
  {
    name: "The Rustic Spoon",
    id: "rr-001",
    averageRating: 4.5,
    chef: { name: "Marco Rossi", specialty: "Pasta" }
  },
  // A record with a valid, but "falsy" rating, and a missing chef
  {
    name: "Pizza Palace",
    id: "rr-002",
    averageRating: 0, // This is a real, terrible rating
    // No chef property!
  },
  // A new restaurant with no rating yet
  {
    name: "Green Leaf Cafe",
    id: "rr-003",
    averageRating: null, // Rating is not available yet
    chef: { name: "Anya Sharma", specialty: "Vegan" }
  }
];
```

**Task 3.1: Safely Displaying the Chef's Name**

We need to display the chef's name for each restaurant, but only if that data exists. If it doesn't, we should display "Chef not listed". Our current code would crash on "Pizza Palace".

*   **Objective:** Write a `for-of` loop to iterate over the `allRestaurants` array. Inside the loop, log a string for each restaurant:
    `Chef at The Rustic Spoon: Marco Rossi`
    `Chef at Pizza Palace: Chef not listed`
    `Chef at Green Leaf Cafe: Anya Sharma`
*   **Hint:** How can you try to access `restaurant.chef.name` without your code throwing an error if `restaurant.chef` is undefined? There's an operator for that.

**Task 3.2: Accurately Displaying Ratings**

The rating display logic is tricky. A rating of `0` is a valid, existing rating. A rating of `null` or `undefined` means it hasn't been rated yet. We need to handle this distinction correctly.

*   **Objective:** Inside the same loop over `allRestaurants`, log a string that displays the rating. If the rating is `0` or any other number, it should be displayed. If it's `null` or `undefined`, it should say "Not yet rated". The output should be:
    `Rating for The Rustic Spoon: 4.5`
    `Rating for Pizza Palace: 0`
    `Rating for Green Leaf Cafe: Not yet rated`
*   **Hint:** A simple `||` for a default value will fail for "Pizza Palace". What's the name of the operator that *only* triggers for `null` and `undefined`?