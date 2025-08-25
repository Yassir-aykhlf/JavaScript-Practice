"use strict";

const newUser = {
  name: " Bob ",
  id: "bo123",
};

// --- Part 1: User Profile Creation ---
const createUserProfile = function (
  username,
  joinDate,
  accountLevel = "basic",
  postCount = 0
) {
  return { username, joinDate, accountLevel, postCount };
};

// --- Test ---
console.log(`--- Testing createUserProfile ---`);
console.log(createUserProfile("conor", "00/00/00", undefined, 0));
console.log(createUserProfile("conor", "00/00/00"));
console.log(`---------------------------------`);

const logSanitizedProfile = function (user) {
  const userCopy = { ...user };
  userCopy.name = userCopy.name.trim();
  console.log(`Sanitized Profile for Mr. ${userCopy.name}`);
};

logSanitizedProfile(newUser);

console.log(newUser);

// --- Part 2: Higher-Order Functions ---
const users = [
  { name: "Peter Jones", posts: 12 },
  { name: "Susan Smith", posts: 45 },
  { name: "David Miller", posts: 0 },
];

const toSingleWord = function (str) {
  return str.split(" ")[0];
};

const toUpperCase = function (str) {
  return str.toUpperCase();
};

const processUsernames = function (users, fn) {
  const formattedNames = [];
  for (const user of users) {
    formattedNames.push(fn(user.name));
  }
  return formattedNames;
};

console.log(`Single word names: ${processUsernames(users, toSingleWord)}`);
console.log(`Uppercase word names: ${processUsernames(users, toUpperCase)}`);

// --- Part 3: Factory Functions ---
const greeterFactory = function (msg) {
  return function (name) {
    console.log(`${msg}, ${name}!`);
  };
};

const welcomeGreeter = greeterFactory("Welcome back");
const notificationGreeter = greeterFactory("New content from");

welcomeGreeter("peter");
notificationGreeter("peter");
