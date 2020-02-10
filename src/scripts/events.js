import apiActions from "./api.js"
import renderJournalEntries from "./entriesDOM.js"

const journalList = document.querySelector("#journal-container")

const updateFormFields = entryId => {

    const hiddenEntryId = document.querySelector("#entryId")
    const journalDateInput = document.querySelector("#journalDate")
    const conceptsCoveredInput = document.querySelector("#conceptsCovered")
    const journalEntryInput = document.querySelector("#journalEntry")
    const moodInput = document.querySelector("#mood")

    fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json())
        .then(entry => {
            hiddenEntryId.value = entry.id
            journalDateInput.value = entry.journalDate
            conceptsCoveredInput.value = entry.conceptsCovered
            journalEntryInput.value = entry.journalEntry
            moodInput.value = entry.mood
        })
}

export default {
    entryEventListener: () => {
        journalList.addEventListener("click", (event) => {
            if(event.target.id.startsWith("deleteEntry--")) {
                const deleteBtnId = event.target.id;
                const deleteBtnArray = deleteBtnId.split("--");
                const entryIdToDelete = deleteBtnArray[1];

                apiActions.deleteEntry(entryIdToDelete)
                    .then(apiActions.getJournalEntries)
                    .then(renderJournalEntries)
            } else if (event.target.id.startsWith("editEntry--")) {
                const entryIdToEdit = event.target.id.split("--")[1]

                updateFormFields(entryIdToEdit)
            }
        })
    }
}
