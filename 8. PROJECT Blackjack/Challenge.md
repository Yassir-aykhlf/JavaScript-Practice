This challenge is designed to test every key concept from the "Pig Game" project—state management, DOM manipulation, event handling, conditional logic, and refactoring—in a new context.

---

### Comprehensive Challenge: Build a "Simple Blackjack" Game

Your mission is to create a simplified, single-player version of the card game Blackjack (also known as 21). You will play against an automated dealer. This will require you to manage more complex game state and perform more dynamic DOM manipulation than in the Pig Game.

#### Game Rules:

1.  **Objective:** Get a card score as close to 21 as possible, without going over. A score over 21 is a "bust."
2.  **Card Values:**
    *   Number cards (2-10) are worth their face value.
    *   Face cards (Jack, Queen, King) are all worth 10.
    *   An **Ace** is special: it's worth 11, *unless* that would cause a bust, in which case it's worth 1.
3.  **Gameplay:**
    *   The game starts when the player clicks "New Game." The player and dealer are each dealt two cards. Only one of the dealer's cards is shown face up.
    *   The player's score is displayed. The player can choose to **"Hit"** (take another card) or **"Stand"** (end their turn).
    *   The player can "Hit" as many times as they want. If their score exceeds 21, they bust and immediately lose.
    *   When the player clicks "Stand," their turn ends. The dealer then reveals their hidden card.
    *   The dealer must "Hit" until their score is 17 or higher. If the dealer busts, the player wins.
    *   If neither busts, the scores are compared. The higher score wins. A tie is a "push."

---

### Phase 1: The Setup (HTML, CSS & Initial JS)

**Goal:** Create the game board and prepare the JavaScript file.

1.  **HTML Structure:** Create `index.html` with the following areas:
    *   A main game container.
    *   A "dealer" area with a `<h2>Dealer's Score: <span id="dealer-score"></span></h2>` and a `div` to hold the dealer's cards (`id="dealer-cards"`).
    *   A "player" area with a `<h2>Your Score: <span id="player-score"></span></h2>` and a `div` to hold the player's cards (`id="player-cards"`).
    *   A `div` for game controls containing three buttons: "New Game", "Hit", and "Stand".
    *   An `<h1>` element to display the game result (e.g., "Player Wins!", "Bust!").

2.  **CSS Styling:** Create `style.css` to make the game presentable.
    *   Use Flexbox to lay out the dealer and player areas.
    *   Style the card elements (give them a border, padding, width, and height so they look like cards).
    *   Style the buttons.

3.  **Initial JavaScript:** In `script.js`:
    *   Select and store all necessary DOM elements in variables (scores, card areas, buttons, result message).
    *   Define your global state variables. You'll need more than in the Pig Game!
        ```javascript
        let playerScore, dealerScore;
        let playerCards, dealerCards;
        let deck;
        let isGameOver;
        ```
    *   Create the **deck of cards**. An array of objects is perfect for this. Each object should represent a card and have a `value` and `score`.
        *Example: `[{value: 'A', score: 11}, {value: '2', score: 2}, ...]`*

---

### Phase 2: Core Gameplay - Dealing and Hitting

**Goal:** Implement the logic for starting the game and the player's turn.

1.  **Create an `init()` Function:** Just like in the Pig Game, create an `init()` function that sets up the game's initial state. It should:
    *   Reset scores and card arrays to their starting values.
    *   Set `isGameOver = false;`.
    *   Clear any cards from the UI and reset the result message.
    *   "Shuffle" the deck and deal the initial two cards to both the player and dealer.

2.  **Card Dealing Logic:**
    *   Create a `drawCard()` function that selects a random card from the `deck` array, *removes it* (to prevent it from being drawn again), and returns it.
    *   Create a `displayCard(card, area)` function that takes a card object and the DOM element (player's or dealer's card area) and dynamically creates and appends a new `div` to represent the card on the screen.

3.  **Score Calculation Logic:**
    *   Create a `calculateScore(cards)` function. This is the trickiest part. It must correctly handle the Ace's dual value.
        *   **Hint:** First, sum all card scores. Then, check if the score is > 21. If it is, loop through the cards to find an Ace (worth 11) and subtract 10 from the score. Repeat until the score is 21 or less, or there are no more Aces worth 11.

4.  **Wire up the Buttons:**
    *   **"New Game":** Add an event listener that calls your `init()` function.
    *   **"Hit":** Add an event listener. It should only work if `isGameOver` is `false`. Inside, the player should `drawCard()`, have it `displayCard()`, and have their score recalculated and updated on the UI.
    *   After hitting, check if `playerScore > 21`. If so, the player busts. End the game and display a "You Bust!" message.

---

### Phase 3: Standing and the Dealer's Turn

**Goal:** Implement the "Stand" logic and determine the game's winner.

1.  **"Stand" Button Logic:**
    *   Add an event listener. It should only work if `isGameOver` is `false`.
    *   When clicked, it should trigger the dealer's turn.

2.  **Dealer's Automated Turn:**
    *   Create a `dealerTurn()` function.
    *   Inside this function, use a `while` loop that continues as long as the `dealerScore` is less than 17.
    *   In each loop iteration, the dealer should `drawCard()`, `displayCard()`, and have their score recalculated.

3.  **Determine the Winner:**
    *   Once the dealer's turn is over (their score is >= 17), create a `determineWinner()` function.
    *   This function will contain all the final `if/else if/else` logic to compare `playerScore` and `dealerScore`, accounting for all possibilities (dealer busts, player has higher score, dealer has higher score, push).
    *   Update the result message `<h1>` with the outcome.
    *   Set `isGameOver = true;` to prevent further clicks on "Hit" or "Stand".

---

### Evaluation Criteria:

You've fully absorbed the concepts if your final project:

✅ **Uses State Variables** correctly to track scores, cards, and game status.
✅ **Manipulates the DOM** by not just changing text but by *dynamically creating and adding* new elements (the cards).
✅ **Handles Events** for all three buttons, with logic to disable them when the game is over (`isGameOver` state).
✅ **Implements Complex Conditional Logic** for calculating scores (especially the Ace) and determining the winner.
✅ **Follows the DRY Principle** by using an `init()` function for setup and reset, and likely separate functions for major tasks like calculating score and drawing a card.