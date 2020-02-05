import API from './data.js'
import renderJournalEntries from './entriesDOM.js'

API.getJournalEntries().then(renderJournalEntries);

const submitButton = document.getElementById("submit-button")
const journalDate = document.getElementById("journalDate")
const conceptsCovered = document.getElementById("conceptsCovered")
const journalEntry = document.getElementById("journalEntry")
const mood = document.getElementById("mood")

const moodRadioButtons = document.getElementsByName("filterMood")

moodRadioButtons.forEach(button => button.addEventListener("click", function () {
    const selectedMood = event.target.value

    API.getJournalEntries()
        .then(entriesArray => {
            const filteredEntries = entriesArray.filter(entry => entry.mood === selectedMood)
            renderJournalEntries(filteredEntries)
        }) 
}))

const journalEntryMaker = (date, concepts, entry, mood) => {
    return {
        "journalDate": date,
        "conceptsCovered": concepts,
        "journalEntry": entry,
        "mood": mood
    }
}

const journalList = document.querySelector("#journal-container")

const entryDeleteEventListener = () => {
    journalList.addEventListener("click", (event) => {
        if(event.target.id.startsWith("deleteEntry--")) {
            const deleteBtnId = event.target.id;
            const deleteBtnArray = deleteBtnId.split("--");
            console.log(deleteBtnArray)
            const entryIdToDelete = deleteBtnArray[1];
            console.log(entryIdToDelete);


            API.deleteEntry(entryIdToDelete)
                .then(API.getJournalEntries)
                .then(renderJournalEntries)
        }
    })
}

entryDeleteEventListener();







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
