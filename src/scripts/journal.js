const journalEntry1 = {
    journalDate: "2020-01-10",
    conceptsCovered: "Functions and objects in JavaScript",
    journalEntry: "I don't know what going on.",
    mood: "Sleepy"
}
const journalEntry2 = {
    journalDate: "2020-01-10",
    conceptsCovered: "Simple javascript functions",
    journalEntry: "Still barely know whats going on",
    mood: "Happy"
}
const journalEntry3 = {
    journalDate: "2020-01-10",
    conceptsCovered: "Hopefully nothing, ill be out of NSS",
    journalEntry: "Tomorrow is christmas-",
    mood: "Sleepy"
}

let journalArray = [];

function newJournalEntry (journalEntry) {
    journalArray.push(journalEntry);
}

newJournalEntry(journalEntry1);
newJournalEntry(journalEntry2);
newJournalEntry(journalEntry3);

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <div class="journal">
            <h1>${journalEntry.conceptsCovered}</h1>
            <h3>${journalEntry.journalEntry}</h3>
            <h2>${journalEntry.journalDate}</h2>
            <h3>${journalEntry.mood}</h3>
        </div>
    `
}

const entryLog = document.getElementById("entryLog");

const renderJournalEntries = (journalArray) => {
    for (let i = 0; i < journalArray.length; i++) {
        entryLog.innerHTML += makeJournalEntryComponent(journalArray[i]);
    }
}

renderJournalEntries(journalArray);
