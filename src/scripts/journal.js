const journalEntry1 = {
    journalDate: "January 17, 2020",
    conceptsCovered: "functions and objects in JavaScript",
    journalEntry: "I don't know what going on.",
    mood: "Sleepy"
};
const journalEntry2 = {
    journalDate: "August 10, 2020",
    conceptsCovered: "simple javascript functions",
    journalEntry: "Still barely know whats going on",
    mood: "Happy"
};
const journalEntry3 = {
    journalDate: "December 24, 2020",
    conceptsCovered: "Hopefully nothing, ill be out of NSS",
    journalEntry: "Tomorrow is christmas-",
    mood: "Sleepy"
};

let journalArray = [];

function newJournalEntry (journalEntry) {
    journalArray.push(journalEntry1, journalEntry2, journalEntry3);
}

newJournalEntry(journalEntry);
console.log(journalArray);