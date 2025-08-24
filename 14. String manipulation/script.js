"use strict";

// --- Raw Data ---
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

// --- Cleaned Data ---
const trimmedEventLog = eventLog.trim().split("\n");

// --- Extracted Data ---
const entries = [];
for (const line of trimmedEventLog) {
  let components = line.split(";;");

  const event = components[0].replace(/_/g, " ").trim().toLowerCase();
  const eventWords = event.split(" ");
  const words = [];
  for (const word of eventWords) {
    words.push(word.replace(word[0], word[0].toUpperCase()));
  }
  const cleanedEvent = words.join(" ");

  const email = components[1].toLowerCase().trim().split(" ")[0];
  const id = components[2];
  const priority = components[3];

  entries.push({ event: cleanedEvent, email, id, priority });
}

// --- Formatted Data ---
const processedEntries = [];
for (const entry of entries) {
  const event = entry.event;
  const email = entry.email;
  const eventCode = entry.id.slice(-3).toUpperCase();
  const priorityLevel = entry.priority
    .replace(/\(/g, "")
    .replace(/\)/g, "");
  processedEntries.push({ event, email, eventCode, priorityLevel });
}

// --- Display Data ---
for (const entry of processedEntries) {
  const flag =
    entry.priorityLevel === "HIGH" || entry.priorityLevel === "CRITICAL"
      ? `🔴`
      : `🟢`;
  const eventType = entry.event.padEnd(25, " ");
  const email = entry.email.padStart(30, " ");
  const code = entry.eventCode;
  console.log(`${flag} ${eventType}${email} ${code}`);
}
