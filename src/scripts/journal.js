import API from './data.js'
import renderJournalEntries from './entriesDOM.js'

API.getJournalEntries().then(renderJournalEntries);

const submitButton = document.getElementById("submit-button")
const journalDate = document.getElementById("journalDate")
const conceptsCovered = document.getElementById("conceptsCovered")
const journalEntry = document.getElementById("journalEntry")
const mood = document.getElementById("mood")

const journalEntryMaker = (date, concepts, entry, mood) => {
    return {
        "journalDate": date,
        "conceptsCovered": concepts,
        "journalEntry": entry,
        "mood": mood
    }
}


submitButton.addEventListener('click', event => {
    const newJournalEntry = journalEntryMaker(journalDate.value, conceptsCovered.value, journalEntry.value, mood.value)

    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
})