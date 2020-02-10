import apiActions from "./api.js"
import renderJournalEntries from "./entriesDOM.js"

const clearForm = () => {
    const hiddenEntryId = document.querySelector("#entryId")
    const journalDateInput = document.querySelector("#journalDate")
    const conceptsCoveredInput = document.querySelector("#conceptsCovered")
    const journalEntryInput = document.querySelector("#journalEntry")
    const moodInput = document.querySelector("#mood")

    hiddenEntryId.value = ""
    journalDateInput.value = ""
    conceptsCoveredInput.value = ""
    journalEntryInput.value = ""
    moodInput.value = ""
}

const addJournalEventListener = () => {
    const saveButton = document.querySelector("#submit-button")

    saveButton.addEventListener("click", () => {
        const hiddenEntryId = document.querySelector("#entryId")
        const journalDateInput = document.querySelector("#journalDate")
        const conceptsCoveredInput = document.querySelector("#conceptsCovered")
        const journalEntryInput = document.querySelector("#journalEntry")
        const moodInput = document.querySelector("#mood")
        
        const entry = {
            journalDate: journalDateInput.value,
            conceptsCovered: conceptsCoveredInput.value,
            journalEntry: journalEntryInput.value,
            mood: moodInput.value
        }

        if (hiddenEntryId.value !== "") {
            entry.id = parseInt(hiddenEntryId.value)
            apiActions.updateEntry(entry)
                .then(() => {
                    apiActions.getJournalEntries()
                        .then(renderJournalEntries)
                        .then(clearForm)
                })
        } else {
            apiActions.addEntry(entry)
                .then(() => {
                    apiActions.getJournalEntries()
                    .then(renderJournalEntries)
                    .then(clearForm)
                })
        }
    })
}

export default addJournalEventListener