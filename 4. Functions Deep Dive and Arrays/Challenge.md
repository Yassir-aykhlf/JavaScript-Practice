### **Challenge: The GymShark Fitness Gauntlet**

You are tasked with creating a system to determine the champion of the "GymShark Fitness Gauntlet," a competition between two athletes, Alex and Sarah. The winner isn't just the strongest, but the one who is most *dominant*.

Your system will need to calculate a "Power Score" for each athlete based on their performance in three events: Bench Press, Squats, and Deadlift. Then, it will compare their scores to declare a champion based on a specific set of rules.

#### **Data Sets**

*   **Test Data 1:**
    *   Alex's Lifts (kg): `[105, 120, 140]`
    *   Sarah's Lifts (kg): `[115, 130, 150]`
*   **Test Data 2:**
    *   Alex's Lifts (kg): `[130, 145, 160]`
    *   Sarah's Lifts (kg): `[110, 120, 135]`

#### **Challenge Requirements**

1.  **Strict Mode:** Ensure your script runs in strict mode.

2.  **Power Score Calculator (Arrow Function):**
    *   Create an **arrow function** called `calcPowerScore`.
    *   This function should take three arguments (for the three lifts).
    *   It should calculate the average of the three lifts and `return` the result. This average is the athlete's "Power Score".

3.  **Store the Data:**
    *   For one of the test data sets, store Alex's three lift values in an array called `alexLifts`.
    *   Store Sarah's three lift values in an array called `sarahLifts`.

4.  **Champion Declaration Logic (Function Expression):**
    *   Create a **function expression** and assign it to a variable named `declareChampion`.
    *   This function should accept two parameters: `alexScore` and `sarahScore`.

5.  **Inside the `declareChampion` function, implement the following logic:**
    *   The function must determine the winner based on these rules:
        *   A person is only declared the **champion** if their Power Score is **at least 25% higher** than their opponent's.
        *   If one person has a higher score, but it's **not** 25% higher, it's a "Narrow Victory," but **no champion is declared**.
        *   If their scores are equal, it's a "Draw."
    *   The function should `console.log` a summary string. For example: `"Sarah is the champion with a dominant Power Score of 131.7, crushing Alex's 121.7!"` or `"Narrow victory for Alex, but no champion is crowned (145.0 vs 121.7)."`.

6.  **Putting It All Together:**
    *   Outside of the functions, calculate the Power Score for Alex by calling `calcPowerScore`. You'll need to pass the individual elements from the `alexLifts` array as arguments. Store this value in a variable `alexPowerScore`.
    *   Do the same for Sarah, storing her score in `sarahPowerScore`.
    *   Finally, call the `declareChampion` function with `alexPowerScore` and `sarahPowerScore` as arguments to see the result.

7.  **Test Both Scenarios:**
    *   Once your code works for Test Data 1, reassign the score variables to test your logic against Test Data 2 to ensure all conditions work correctly.

---
#### ** Bonus Challenge (Ternary Operator) **

Create a separate **function declaration** named `getVictoryStatus`.

*   This function should take two scores as parameters (`score1`, `score2`).
*   It must use a **nested ternary operator** to `return` one of three strings: `"Dominant Victory"`, `"Narrow Victory"`, or `"Draw"`.
*   You can then integrate this function into your `declareChampion` logic to make your code even more modular.
