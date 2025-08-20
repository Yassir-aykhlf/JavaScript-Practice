### **The Challenge:** 

Start with this data object in your script file:

```javascript
'use strict';

const bookwormData = {
  // --- Basic Info ---
  platformName: 'BookWorm',
  established: 2021,
  // --- Book Data ---
  books: [
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      genres: ['Adventure', 'Fantasy'],
      publicationYear: 1988,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genres: ['Science Fiction', 'Adventure'],
      publicationYear: 1965,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genres: ['Romance', 'Classic'],
      publicationYear: 1813,
    },
    {
      title: '1984',
      author: 'George Orwell',
      genres: ['Dystopian', 'Science Fiction'],
      publicationYear: 1949,
    },
  ],

  // --- User Data ---
  users: {
    user123: {
      name: 'Alice',
      readingList: [0, 2], // Indices of books in the 'books' array
    },
    user456: {
      name: 'Bob',
      readingList: [1, 3],
    },
  },

  // --- Platform Methods ---
  getBookByAuthor(authorName) {
    // This method should find and return the book object by a specific author
    // A little helper for you to use later
    return this.books.find(book => book.author === authorName);
  },

  addNewBook(bookObject) {
    this.books.push(bookObject);
    console.log(`"${bookObject.title}" has been added to the library.`);
  },
};
```

---

### **Level 1: The Basics (Destructuring Fundamentals)**

*   **Task 1.1:** Destructure the `bookwormData` object to create two standalone variables: `platform` (which should be the value of `platformName`) and `library` (which should be the `books` array). Rename them during destructuring.
*   **Task 1.2:** From the `library` array you just created, use array destructuring to get the first two books and assign them to variables `firstBook` and `secondBook`.
*   **Task 1.3:** From the `firstBook` object, destructure its `title` and `author`.
*   **Task 1.4:** Let's say we want to get the third book's primary genre. From the `library` array, get the third book. From that book, use nested destructuring to get the first element of its `genres` array. Name the final variable `thirdBookMainGenre`.
*   **Task 1.5:** Let's imagine the platform might not have a founder yet. Destructure the `bookwormData` object to get a `founder` property. Since it doesn't exist, provide a default value of `'Anonymous'` for the `founder` variable.

---

### **Level 2: Intermediate Operations (Spread Operator & More)**

*   **Task 2.1:** The platform is acquiring a new set of classic books. Here is the new data:
    ```javascript
    const newClassics = [
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', genres: ['Classic', 'Fiction'], publicationYear: 1960 },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genres: ['Classic', 'Fiction'], publicationYear: 1925 }
    ];
    ```
    Create a new array called `comprehensiveLibrary` that contains all the books from the original `library` *plus* the books from `newClassics`. Use the spread operator.
*   **Task 2.2:** Create a shallow copy of the `bookwormData` object and call it `dataSnapshot`. Then, on this `dataSnapshot`, add a new property `activeUsers` with a value of `5000`. Log both the original `bookwormData` and the `dataSnapshot` to the console to confirm that the original object was not mutated.