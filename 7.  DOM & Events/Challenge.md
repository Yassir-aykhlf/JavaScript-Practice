### **Today's Challenge: Modal Mayhem**

Your mission is to build a fully functional and reusable modal window component from scratch. A modal is a popup window that appears on top of the main content, often used for alerts, forms, or displaying extra information.

This challenge will test your ability to:
*   Select and manipulate multiple DOM elements.
*   Change CSS styles/classes with JavaScript to show and hide elements.
*   Handle `click` and `keyboard` events.
*   Use functions to create reusable, clean, and DRY (Don't Repeat Yourself) code.

#### **Step 0: The Setup**

Create an `index.html` file, a `style.css` file, and a `script.js` file. Copy the following code into the appropriate files. This starter code gives you the necessary elements so you can focus purely on the JavaScript logic.

**`index.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Modal Mayhem</title>
</head>
<body>
    <button class="show-modal">Show Instructions</button>

    <div class="modal hidden">
        <button class="close-modal">&times;</button>
        <h1>Important Instructions 📜</h1>
        <p>
            This modal is your challenge! You need to make it appear and disappear using the power of JavaScript. You also need to make the 'Escape' key close it. Good luck!
        </p>
    </div>
    <div class="overlay hidden"></div>

    <script src="script.js"></script>
</body>
</html>
```

**`style.css`**
```css
body {
    background: linear-gradient(to top left, #28b487, #7dd56f);
    font-family: sans-serif;
    color: #333;
    line-height: 1.5;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5rem;
}

/* --- UTILITY & BUTTON --- */
.hidden {
    display: none;
}

.show-modal {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.25rem 2.5rem;
    border-radius: 10rem;
    border: none;
    background-color: #fff;
    color: #444;
    cursor: pointer;
}

/* --- MODAL & OVERLAY --- */
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 600px;
    background-color: white;
    padding: 3rem 4rem;
    border-radius: 5px;
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
    z-index: 10;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 5;
}

.close-modal {
    position: absolute;
    top: 0.8rem;
    right: 1.5rem;
    font-size: 3rem;
    color: #555;
    cursor: pointer;
    border: none;
    background: none;
}
```

---

### **Your Tasks (in `script.js`)**

#### **Step 1: Setup and Element Selection**

1.  Select the modal window, the overlay, the "close modal" button, and the "show modal" button.
2.  Store each of these selected elements in its own `const` variable. This will make them easy to reference throughout your code.

#### **Step 2: Opening the Modal**

1.  Attach a `click` event listener to the "Show Instructions" button.
2.  Inside the event handler function, you need to make the modal and the overlay visible.
    *   **Hint:** The `.hidden` class in the CSS has `display: none;`. To make an element visible, you need to remove this class. A great way to do this is with the `classList` property (e.g., `element.classList.remove('hidden')`).

#### **Step 3: Closing the Modal**

1.  Attach a `click` event listener to the "close modal" button (the 'X').
2.  The event handler function for this button should make the modal and the overlay hidden again by *adding* the `.hidden` class back to them.
3.  Do the exact same thing for the overlay. When the user clicks on the dark overlay area, the modal should also close.

#### **Step 4: Refactoring for DRY Code**

You've now written the same closing logic in two different places. Let's fix that!
1.  Create a new function called `closeModal`. Move the logic for hiding the modal and overlay (adding the `.hidden` class) into this function.
2.  Create another function called `openModal`. Move the logic for showing the modal and overlay (removing the `.hidden` class) into this function.
3.  Now, update your event listeners. Instead of using an anonymous function with the logic inside, simply pass your new `openModal` or `closeModal` function as the event handler. For example: `btnShowModal.addEventListener('click', openModal);`.

#### **Step 5: Handling Keyboard Events (The Final Polish)**

A truly professional modal can be closed by pressing the 'Escape' key.
1.  Add an event listener to the entire `document` that listens for a `keydown` event.
2.  The event handler function will automatically receive an `event` object as an argument. You can check which key was pressed with `event.key`.
3.  Inside the handler, write an `if` statement to check two things:
    *   If the key pressed was `'Escape'`.
    *   And if the modal does **not** already have the `hidden` class (i.e., it is currently visible). You can check for a class with `element.classList.contains('hidden')`.
4.  If both conditions are true, call your `closeModal()` function.