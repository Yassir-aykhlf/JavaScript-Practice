"use strict";

const Book = function (title, author, price) {
    // local variable in the constructor's stack frame
    let _price = price;

    // object properties stored in the heap object
    this.title = title;
    this.author = author;

    // this function property closes over the local variable _price
    this.applyDiscount = function (percentage) {
        if (percentage >= 0 && percentage <= 1)
            _price = _price * (1 - percentage);
    };

    // this function also closes over the constructor's lexical environment containing _price
    this.getPrice = function () {
        return _price;
    };
};

const book1 = new Book("Dune", "Frank Herbert", 19.99);
const book2 = new Book("1984", "George Orwell", 14.99);

// shared method on prototype, more memory efficient than instance methods
Book.prototype.getDetails = function () {
    return `${this.title} by ${this.author} for $${this.getPrice()}`;
};

const Audiobook = function (title, author, price, runtime) {
    Book.call(this, title, author, price);
    this.runtime = runtime;
};
// set up prototype chain: Audiobook.prototype -> Book.prototype -> Object.prototype
Object.setPrototypeOf(Audiobook.prototype, Book.prototype);

const audiobook1 = new Audiobook(
    "The Hobbit",
    "J.R.R. Tolkien",
    29.99,
    "11h 32m"
);

Audiobook.prototype.getDetails = function () {
    return `${this.title} by ${this.author}, ${this.runtime} for $${this.getPrice()}`;
};

const audiobook2 = new Audiobook("The Martian", "Andy Weir", 24.99, "10h 53m");

const book3 = new Book("Brave New World", "Aldous Huxley", 18.99);

book3.price = 5.0;
console.log(book3.getDetails());

book3.applyDiscount(0.2);
console.log(book3.getDetails());
