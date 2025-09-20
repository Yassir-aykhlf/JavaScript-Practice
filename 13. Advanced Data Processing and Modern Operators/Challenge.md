### The Creator Marketplace Dashboard

Alright, welcome to the team! We're building a new "Creator Marketplace" platform where content creators can sell their digital products. Your first major task is to build the data-processing logic for the creator's dashboard.

The backend team has provided you with a sample data structure that mimics a real API response. Your job is to take this raw data and transform it into several formats that the UI team needs to render the dashboard.

This is a great opportunity to solidify your understanding of modern JavaScript. Don't rush it. Think about *why* you're choosing a particular method. The most elegant solution is often the one that uses the right tool for the job. Let's get started.

---

### **Part 1: Initial Data Setup & Display**

First, let's get our initial data organized and display some basic information.

#### **Initial Data Snippets:**

```javascript
// Raw data from the "API"
const creators = [
  {
    id: 'c1',
    name: 'Alice',
    products: [
      { id: 'p1', name: '3D Icon Pack', price: 25, stock: 50, tags: ['icons', '3d', 'design'] },
      { id: 'p2', name: 'UX Course', price: 150, stock: 0, tags: ['ux', 'course', 'design'] },
    ],
    socials: {
      twitter: '@alice_designs',
      instagram: '@alice_creates',
    }
  },
  {
    id: 'c2',
    name: 'Bob',
    products: [
      { id: 'p3', name: 'Photography Presets', price: 15, stock: 100, tags: ['photo', 'presets', 'lightroom'] },
    ],
    socials: {
      twitter: '@bob_photos',
      instagram: null, // Note: Bob hasn't linked his Instagram
    }
  },
  {
    id: 'c3',
    name: 'Charlie',
    products: [
      { id: 'p4', name: 'Music Production Kit', price: 75, stock: 20, tags: ['music', 'audio', 'ableton', 'presets'] },
      { id: 'p5', name: 'Video Editing LUTs', price: 15, tags: ['video', 'presets', 'final cut'] }, // Note: Stock is missing
    ],
    socials: {
      // Note: Socials object is missing entirely
    }
  }
];

const supportHours = {
  monday: '9 AM - 5 PM',
  tuesday: '9 AM - 5 PM',
  wednesday: '9 AM - 8 PM',
  thursday: '9 AM - 8 PM',
  friday: '9 AM - 5 PM'
  // Saturday and Sunday are closed
};
```

---

#### **Task 1: Assemble the Dashboard Data**

**Context:** We need a single, well-structured object to hold all the data for our dashboard. This makes it easier to pass around the application.

**Your Objective:**
Create a new object called `dashboardData`. This object should contain the `creators` array and the `supportHours` object. Use the Enhanced Object Literal syntax to assemble it.

**Hint:**
How can you add existing variables into a new object without writing `variableName: variableName`?

---

### **Part 2: Data Transformation and Aggregation**

Now that we have our main data object, let's pull out some specific information the UI team needs.

#### **Task 2: List All Creator Names**

**Context:** The dashboard needs a sidebar that lists the names of all creators on the platform.

**Your Objective:**
Iterate over the `creators` array within your `dashboardData` object and `console.log` each creator's name.

**Hint:**
Think about the most direct way to loop over the items of an array. If you try to loop over the `dashboardData` object directly, what happens?

---

#### **Task 3: Generate a Unique Tag Cloud**

**Context:** To help users discover products, the UI team wants to build a "tag cloud" feature. They need a single list of all product tags that exist on the platform, but with **no duplicates**.

**Your Objective:**
Create an array called `uniqueTags` that contains every tag from every product across all creators, without any repeated tags. The final order of the tags in the array doesn't matter.

**Hint:**
You'll need to gather all tags first. Afterwards, what's the most modern and efficient JavaScript data structure for ensuring all its elements are unique?

---

### **Part 3: Handling Inconsistent & Nested Data**

Real-world data is messy. It has missing properties and nested structures. This is where you can show your skill in writing robust, error-proof code.

#### **Task 4: Display Creator Social Handles Safely**

**Context:** The dashboard has a section to display each creator's social media handles. As you can see from the data, a creator might be missing the entire `socials` object, or a specific handle within it might be `null`. Our code must not crash.

**Your Objective:**
Loop through the `creators` array. For each creator, log a string like:
`"Alice's social media: Twitter - @alice_designs, Instagram - @alice_creates"`

If a social handle is missing or `null`, it should display 'N/A'. For Charlie, who is missing the entire `socials` object, both should show 'N/A'. For Bob, only Instagram should show 'N/A'.

**Hint:**
How can you safely access a property on a deeply nested object that might not exist at any level? And how do you provide a default value for something that is `null` or `undefined`?

---

#### **Task 5: Create a Product Status Report (The Tricky One!)**

**Context:** The inventory management page needs a status report for each product. The report must show the product's name and its current stock level.

Here's the critical business rule:
*   If the `stock` property exists, display its value.
*   A `stock` value of **`0` is a valid, important number** and means "Sold Out."
*   If the `stock` property is `missing` (`undefined`), it means the creator hasn't set it up yet, and we should display "Not Set".

**Your Objective:**
Loop through every product of every creator and log a status string:
`"[Product Name] - Stock: [Stock Level]"`

Example outputs:
*   `"3D Icon Pack - Stock: 50"`
*   `"UX Course - Stock: 0"` (This must show `0`, not "Not Set"!)
*   `"Video Editing LUTs - Stock: Not Set"`

**Hint:**
The classic `||` operator is often used for defaults, but it treats `0` as a "falsy" value. What is the modern operator that *only* provides a default for `null` or `undefined`?

---

#### **Task 6: Format the Support Schedule**

**Context:** The "Help" section of the dashboard needs to display the support team's weekly hours in a user-friendly format.

**Your Objective:**
Iterate over the `supportHours` object in `dashboardData`. For each day, log a formatted string:
`"On monday, support is available from 9 AM - 5 PM"`

**Hint:**
To create this string, you need access to both the day (the object's key) and the hours (the object's value) within each step of your loop. How can you iterate over an object to get both at the same time?