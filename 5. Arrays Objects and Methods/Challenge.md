**Challenge**

This challenge is designed to be tough. It requires you to use nearly every concept from today's lessons—array methods, object creation, dot vs. bracket notation, object methods, and the `this` keyword—and combine them in a logical way.

---

### **Hard Challenge: Calorie Counter Pro**

You are building a feature for a fitness app. Your task is to create a `user` object that can track meals, calculate a user's Basal Metabolic Rate (BMR), and provide a daily summary.

### **Challenge Requirements**

1. **The User Object:**
    - Create an object literal named `user`.
    - It should have the following initial properties:
        - `username`: A string (e.g., `'JaneDoe')`.
        - `weight`: A number in kg (e.g., `65`).
        - `height`: A number in cm (e.g., `175`).
        - `meals`: An empty array `[]`.
2. **BMR Calculation Method:**
    - Add a method to the `user` object called `calculateBMR`.
    - This method should calculate the user's BMR using the simplified formula: *BMR = 10 \ weight (kg) + 6.25 \* height (cm)**.
    - Inside the method, you **must** use the `this` keyword to access the `weight` and `height` properties from the object.
    - The method should create a **new property** on the object called `bmr` and store the calculated value there (e.g., `this.bmr = ...`).
    - Finally, the method should also `return` the calculated BMR value.
3. **Meal Tracking Method:**
    - Add a method to the `user` object called `addMeal`.
    - This method should accept two arguments: `mealName` (a string) and `calories` (a number).
    - It should create a new **meal object** with two properties: `name` and `calories`.
    - It must then add this new meal object to the **end** of the `meals` array property using the `this` keyword and the correct array method.
4. **Daily Summary Method:**
    - Add a final method called `getTodaysSummary`.
    - This method should `return` a summary string. **Crucially, the `age` property does not exist, so you must calculate it on the fly.**
    - The string should be in this format: *"[Username]'s BMR is [BMR value] calories. Today, they have eaten [Number of Meals] meals."*
    - You **must** use the `this` keyword to get the `username`, `bmr`, and the **length** of the `meals` array.
    - **Important:** This method should work correctly even if `calculateBMR` has not been called yet. If `this.bmr` doesn't exist, it should call `this.calculateBMR()` itself to get the value.
5. **Putting It All Together (The Script):**
    - First, call the `addMeal` method three times to add the following meals:
        - 'Breakfast', 450
        - 'Lunch', 700
        - 'Dinner', 600
    - Then, `console.log` the entire `user` object to inspect its current state. You should see the `meals` array populated.
    - Finally, call the `getTodaysSummary` method and log the returned string to the console.
    - **Expected Final Output in Console:**
        
        ```
        // The user object with all its properties and populated meals array
        // ...
        JaneDoe's BMR is 1743.75 calories. Today, they have eaten 3 meals.
        
        ```
        

---

### **🌟 Bonus Challenge (Advanced `this` and Bracket Notation) 🌟**

Create one more method on the `user` object called `updateStat`.

- This method should accept two arguments: `statName` (a string, e.g., `"weight"`) and `value` (a number).
- It should use **bracket notation** to dynamically update a property on the `user` object (e.g., if `statName` is `"weight"`, it should update `this.weight`).
- **Add a safeguard:** The method should only update the property if it's one of the "updatable" stats: `'weight'` or `'height'`. You can use an array method like `.includes()` for this check.
- **Important:** If `weight` or `height` is successfully updated, the method **must call `this.calculateBMR()` again** to ensure the BMR value is kept up-to-date.
- **Test it:** After your main script, call `user.updateStat('weight', 70)` and then call `user.getTodaysSummary()` again to see the updated BMR in the summary.

This challenge will test your ability to chain properties and methods (`this.meals.length`), create new properties from within methods (`this.bmr`), and use `this` to call other methods (`this.calculateBMR()`). The bonus pushes your understanding of bracket notation and creating self-contained, intelligent objects.