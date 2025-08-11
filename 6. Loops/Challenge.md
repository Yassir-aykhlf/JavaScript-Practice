### **Hard Challenge: Cosmic Navigator - The Final Frontier**

You are the captain of the starship *Odyssey*. Your mission is to navigate a newly discovered quadrant of space, scan celestial objects, collect valuable resources, and report back. However, the quadrant is filled with hazards, and your ship's resources are limited.

#### **Data Setup**

First, create your data structures.

1.  **The Starship Object:**
    *   Create an object literal named `starship`.
    *   It should have the following properties:
        *   `name`: `'Odyssey'`
        *   `fuelLevel`: `100`
        *   `cargo`: An empty array `[]`.
        *   `missionLog`: An empty array `[]`.

2.  **The Galaxy Map Array:**
    *   Create an array of objects named `galaxyMap`. Each object represents a celestial body.
    ```javascript
    const galaxyMap = [
      { name: 'Alpha-7', type: 'Planet', hazardLevel: 3, resources: 'Titanium', isHabitable: true },
      { name: 'Orion Nebula', type: 'Nebula', hazardLevel: 1, resources: 'Gas', isHabitable: false },
      { name: 'KX-449', type: 'Planet', hazardLevel: 7, resources: 'Crystals', isHabitable: false },
      { name: 'The Void', type: 'Asteroid Field', hazardLevel: 9, resources: 'None', isHabitable: false },
      { name: 'Epsilon-Eridani', type: 'Planet', hazardLevel: 2, resources: 'Water', isHabitable: true },
      { name: 'Rogue Comet', type: 'Comet', hazardLevel: 5, resources: 'Ice', isHabitable: false }
    ];
    ```

#### **Challenge Requirements**

You will add methods to your `starship` object to handle the mission logic.

1.  **The `scanObject` Method:**
    *   Add a method to the `starship` object called `scanObject`. This method will take one argument: a `celestialObject` from the `galaxyMap`.
    *   Inside this method, use the `this` keyword extensively.
    *   **Logic Flow:**
        *   **Fuel Consumption:** Every scan consumes `5` fuel. Decrease `this.fuelLevel` by 5.
        *   **Log the Scan:** Add a log entry to `this.missionLog`. The entry should be a string like: `"Scanned [Object Name]. Fuel remaining: [Fuel Level]."`.
        *   **Hazard Check:**
            *   If the `celestialObject.hazardLevel` is `8` or higher, the mission is too dangerous. Add a final log entry `"EMERGENCY! Hazard level too high. Mission aborted."` and immediately **terminate the entire loop** (Hint: `break`).
            *   If the `celestialObject.type` is `'Nebula'`, it's a scientific curiosity but nothing more. Add a log entry `"Nebula detected. Interesting, but moving on."` and immediately **skip to the next object** in the map (Hint: `continue`).
        *   **Resource Collection:** If the object is not a high hazard or a nebula, check its `resources`. If the `resources` are not `'None'`, add the resource string to `this.cargo` using an array method. Then, add a log entry: `"Resource collected: [Resource Name]."`.

2.  **The `generateMissionReport` Method:**
    *   Add a method called `generateMissionReport`.
    *   This method should `console.log` a header: `--- MISSION REPORT: STARSHIP ODYSSEY ---`.
    *   Then, it must **loop backwards** through `this.missionLog` and print each entry to the console in reverse chronological order.
    *   Finally, it should log a summary footer: `--- END OF REPORT. Cargo Hold: [[Cargo Items]]. Fuel: [Final Fuel] ---`.

3.  **The Main Mission Loop (Outside the Object):**
    *   Create a **`for` loop** that iterates through the `galaxyMap` from beginning to end.
    *   Inside the loop, for each `celestialObject`, call the `starship.scanObject()` method, passing the current object as an argument.
    *   The loop should also check if the `starship.fuelLevel` is below `10`. If it is, log `"CRITICAL FUEL LEVEL. Aborting mission."` and **break** the loop.

4.  **Putting It All Together:**
    *   After your main `for` loop has finished (or been broken), call `starship.generateMissionReport()`.

---

#### ** Bonus Challenge (`while` loop) **

Create one more method on the `starship` object called `emergencyManeuvers`.

*   This method will simulate escaping a sudden threat.
*   It should use a **`while` loop** that continues as long as `this.fuelLevel` is above `20`.
*   Inside the loop, you will simulate a series of random "jumps":
    *   Create a helper **arrow function** `calculateJumpCost` that returns a random number between 5 and 15.
    *   In each iteration of the `while` loop, call this helper function to get a `jumpCost`.
    *   Decrease `this.fuelLevel` by the `jumpCost`.
    *   Log the action: `"Emergency jump! Fuel consumed: [jumpCost]. Fuel remaining: [this.fuelLevel]."`.
*   **Test It:** Before your main mission loop, call `starship.emergencyManeuvers()`. This will use up some fuel before the main mission even begins, making the fuel check in the main loop more critical.