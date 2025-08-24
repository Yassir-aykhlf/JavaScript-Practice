### The Challenge:
Today, we're going to work on something you'll see a dozen times in your career: wrangling data from a legacy system. We've just been handed a data feed from our old "LogTron 2000" monitoring service. It's... quirky. The data comes in as a single, messy, multi-line string.

Our goal is to take this raw log data and transform it into a clean, formatted, and readable report for the operations team. This isn't just about making it look pretty; it's about making it *useful* and reliable.

Here is the entire raw data block we're working with. Just copy this into your script file to get started.

```javascript
// --- Initial Data ---
const eventLog = `
_USER_LOGIN_SUCCESS;;jane.doe@example.com;;ID-001-453;;(NORMAL)
  _USER_PROFILE_UPDATE;;  john.smith@example.com  ;;ID-002-910;;(HIGH)
_USER_LOGIN_FAILURE;;peter.jones@example.com;;ID-003-765;;(HIGH)
_APP_CRITICAL_ERROR;;null;;ID-004-001;;(CRITICAL)
_USER_LOGOUT;;jane.doe@example.com;;ID-001-453;;(NORMAL)
_MAINTENANCE_WINDOW_START;;system;;ID-SYS-001;;(NORMAL)
_USER_LOGIN_SUCCESS;;  alice.w@example.com;;ID-005-451;;(NORMAL)
_APP_CRITICAL_ERROR;;  SYNTAX_ERROR @ user_input.js;;ID-004-002;;(CRITICAL)
`;
```

Let's break this down into manageable steps.

---

#### **Part 1: The Initial Ingestion**

**Context:**
Right now, `eventLog` is one giant, unmanageable string. Notice the leading and trailing whitespace from the template literal, and how each actual log entry is on its own line. We can't work on the data until we've isolated each event.

**Your Objective:**
Process the `eventLog` string into an array where each element is a single, complete log entry. Be careful to handle any extraneous whitespace or empty lines that might result from the initial string format.

---

#### **Part 2: Deconstructing and Normalizing the Data**

**Context:**
Now that you have an array of individual log lines, we need to process them. Each line is a composite of four distinct pieces of information, separated by `;;`. The data, as you can see, is inconsistent:
-   The event type has multiple underscores and is in all-caps.
-   The email address sometimes has leading or trailing spaces.

To perform any reliable logic, we first need to standardize this data.

**Your Objective:**
Create a new array of "processed" log objects. Loop through your array from Part 1, and for each line:
1.  Split the line into its four components: the event type, the email, the unique ID, and the priority level.
2.  **Clean the data:**
    -   The event type should be converted to a more readable format (e.g., `_USER_LOGIN_SUCCESS` should become `User Login Success`).
    -   The email address should be trimmed of any whitespace and converted to lowercase.
3.  Store this cleaned data in a structured object, for example: `{ eventType: '...', email: '...', id: '...', priority: '...' }`.

---

#### **Part 3: Extracting Key Information**

**Context:**
The unique ID format is consistent: `ID-XXX-YYY`. For our report, the team only needs the final three-digit code (`YYY`). The priority level is enclosed in parentheses, which we don't need in our final output.

**Your Objective:**
Create a *new* array by transforming the objects from Part 2. For each object, create a new object that contains:
1.  The same cleaned `eventType` and `email` from the previous step.
2.  A new property, `eventCode`, which contains *only* the last three characters of the original ID, converted to uppercase.
3.  A new property, `priorityLevel`, which contains the priority text (e.g., 'NORMAL', 'HIGH') without the parentheses and in all caps.

---

#### **Part 4: Generating the Final Report**

**Context:**
It's time to generate the report. The operations team wants a clean, aligned, and visually scannable output in the console. They want high and critical priority events to be flagged so they can't be missed. The final report should look like a structured table.

**Your Objective:**
Loop over your final array of processed objects from Part 3. For each object, `console.log` a single line formatted exactly as follows:
-   A visual flag: `🔴` if the priority level is `HIGH` or `CRITICAL`, and `🟢` for `NORMAL` priority.
-   The event type, padded to the right to a total length of 25 characters.
-   The email address, padded to the right to a total length of 30 characters.
-   The final 3-digit event code.

**Example of a single output line:**
`🟢 User Login Success         jane.doe@example.com          453`

---
Take your time, work through each part, and really think about the most effective tool for each job. Don't be afraid to `console.log` your intermediate results to see what's happening. I'll be here to review your solution when you're done. Good luck.