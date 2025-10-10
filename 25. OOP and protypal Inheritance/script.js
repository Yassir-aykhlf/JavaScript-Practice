"use strict";

class Media {
    #isCheckedOut = false;
    #ratings = [];

    constructor(title) {
        this.title = title;
    }
    get isCheckedOut() {
        return this.#isCheckedOut;
    }
    get averageRating() {
        const sum = this.#ratings.reduce((acc, rating) => rating + acc , 0);
        return sum / (this.#ratings.length || 1);
    }

    toggleCheckOutStatus() {
        this.#isCheckedOut = !this.#isCheckedOut;
    }
    checkOut() {
        if (!this.#isCheckedOut) {
            this.toggleCheckOutStatus();
        }
    }
    returnMedia() {
        if (this.#isCheckedOut) {
            this.toggleCheckOutStatus();
        }
    }
    addRating(rating) {
        if (typeof rating === "number" && rating >= 0 && rating <= 10) {
            this.#ratings.push(rating);
        }
        return this;
    }
    getDetails() {
        return `Title: ${this.title}`;
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this.author = author;
        this.pages = pages;
    }

    getDetails() {
        return `${super.getDetails()}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}

class Movie extends Media {
    constructor(title, director, runtime) {
        super(title);
        this.director = director;
        this.runtime = runtime;
    }

    getDetails() {
        return `${super.getDetails()}, Director: ${this.director}, Runtime: ${this.runtime}`;
    }
}
