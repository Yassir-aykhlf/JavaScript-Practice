### The Scenario: "SocialFeed Pro" Analytics Dashboard

Imagine we're building a new feature for a social media analytics tool called "SocialFeed Pro". This feature needs to process and display user engagement data. We've just received a raw data dump from our backend, and your task is to whip it into shape for our new, fancy (and very demanding) UI components.

Here's the raw data you'll be working with. Notice its slightly inconsistent and messy structure—just like in the real world.

```javascript
const rawData = [
    { id: 'user1', posts: [{ postId: 'post1', likes: 10, comments: 5 }, { postId: 'post2', likes: '20', comments: 7 }] },
    { id: 'user2', posts: [{ postId: 'post3', likes: 15, comments: 3 }] },
    { id: 'user3', posts: [] }, // User with no posts
    { id: 'user4', posts: [{ postId: 'post4', likes: 5, comments: 'invalid' }, { postId: 'post5', likes: 12, comments: 8 }] },
];
```

Now, let's break down your tasks.

---

### **Part 1: The Data Sanitizer Module**

Our first problem is that the data is unreliable. Likes and comments are sometimes strings or even invalid data. We need a self-contained module that can process this data without polluting the global scope. This is a perfect use case for an **IIFE (Immediately Invoked Function Expression)** to create a private scope.

**Your Task:**

Create an IIFE that exposes a single method, `sanitizeData`. This method should take the `rawData` as input and return a new array where:

1.  Every `likes` and `comments` value is a valid number.
2.  If a value is a string-number (e.g., `'20'`), it should be converted to a number.
3.  If a value is not a valid number (e.g., `'invalid'`), it should be converted to `0`.
4.  The original `rawData` array should remain unchanged (maintain immutability).

**The Obscurity & The Trap:**

A junior might be tempted to directly modify the input array or use a simple `forEach` loop. However, the requirement for immutability and the need to return a *new* array makes `map` and other transformative methods a better choice. The IIFE structure forces you to think about how to expose your functionality to the outside world without creating global variables.

---

### **Part 2: The Engagement Score Calculator**

Now that we have clean data, management wants a way to calculate an "engagement score" for each post. However, the formula for this score is proprietary and might change. We need a flexible way to calculate this score. This is where **Closures** come into play.

**Your Task:**

1.  Create a function called `createScoreCalculator`. This function will accept two arguments: `likeWeight` and `commentWeight`.
2.  `createScoreCalculator` should **return another function**. This returned function is your "calculator."
3.  The returned calculator function should accept a single post object (e.g., `{ postId: 'post1', likes: 10, comments: 5 }`) and return the engagement score based on the formula: `(likes * likeWeight) + (comments * commentWeight)`.

**The Obscurity & The Trap:**

The key here is that the `likeWeight` and `commentWeight` values must be "remembered" by the returned calculator function, even after `createScoreCalculator` has finished executing. This is the essence of a closure. A common mistake is to define the weights inside the returned function, which would defeat the purpose of creating a flexible, reusable calculator. You should be able to create multiple, different calculators like this:

```javascript
const standardCalculator = createScoreCalculator(0.7, 1.3);
const likesFocusedCalculator = createScoreCalculator(1.5, 0.5);

// Now you can use these to process posts
const post = { postId: 'post1', likes: 10, comments: 5 };
console.log(standardCalculator(post)); // Expected output: 13.5
console.log(likesFocusedCalculator(post)); // Expected output: 17.5
```

---

### **Part 3: The Ultimate Data Transformation Pipeline**

This is where it all comes together. We need to create a final data structure that our UI team can easily use. You'll need to chain together your sanitized data, the score calculator, and various **Array methods** to produce the final result.

**Your Task:**

Using the `sanitizedData` from Part 1 and the `standardCalculator` from Part 2, create a final data array with the following transformations:

1.  **Filter out users with no posts.** The UI can't display them, so we don't need them.
2.  For each remaining user, calculate the engagement score for *all* of their posts using your `standardCalculator`.
3.  For each user, determine their `totalEngagement` by summing up the scores of all their posts.
4.  For each user, find their `topPost`, which is the post with the highest individual engagement score.
5.  The final output should be an array of objects, where each object has the following structure:

```javascript
{
  userId: 'user1',
  totalEngagement: 51.5, // Example value
  topPost: { postId: 'post2', likes: 20, comments: 7, score: 31.1 } // Example value
}
```

**The Obscurity & The Trap:**

This part is designed to trip you up on choosing the right array method.

*   You might be tempted to use `forEach` for everything, leading to complex, nested, and hard-to-read code.
*   You might struggle with how to use `map` to transform the user data while also using `reduce` internally to calculate the `totalEngagement` and find the `topPost`.
*   A common pitfall is incorrectly using `reduce` to find the `topPost`. The initial value of the accumulator is crucial. If you don't handle it correctly, you'll get unexpected results, especially for users with only one post.
*   The challenge is to chain these methods (`filter`, `map`, `reduce`) in a clean, declarative pipeline.