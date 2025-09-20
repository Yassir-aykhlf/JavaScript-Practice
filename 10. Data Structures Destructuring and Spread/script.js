"use strict";

const bookwormData = {
  // --- Basic Info ---
  platformName: "BookWorm",
  established: 2021,
  // --- Book Data ---
  books: [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genres: ["Adventure", "Fantasy"],
      publicationYear: 1988,
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genres: ["Science Fiction", "Adventure"],
      publicationYear: 1965,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genres: ["Romance", "Classic"],
      publicationYear: 1813,
    },
    {
      title: "1984",
      author: "George Orwell",
      genres: ["Dystopian", "Science Fiction"],
      publicationYear: 1949,
    },
  ],
  // --- User Data ---
  users: {
    user123: {
      name: "Alice",
      readingList: [0, 2],
    },
    user456: {
      name: "Bob",
      readingList: [1, 3],
    },
  },
  // --- Platform Methods ---
  getBookByAuthor(authorName) {
    return this.books.find((book) => book.author === authorName);
  },
  addNewBook(bookObject) {
    this.books.push(bookObject);
    console.log(`"${bookObject.title}" has been added to the library.`);
  },
};

const { platformName: platform, books: library } = bookwormData;

const [firstBook, secondBook] = library;

const { title, author } = firstBook;

const [, , thirdBook] = library;

const {
  genres: [thirdBookMainGenre],
} = thirdBook;

const { founder = "Anonymous" } = bookwormData;

// --- New Data ---
const newClassics = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genres: ["Classic", "Fiction"],
    publicationYear: 1960,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genres: ["Classic", "Fiction"],
    publicationYear: 1925,
  },
];

const comprehensiveLibrary = [...newClassics, ...library];

const dataSnapshot = { ...bookwormData};

dataSnapshot.activeUsers = 5000;

console.log(bookwormData, dataSnapshot);