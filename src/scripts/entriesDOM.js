import journalFactory from './entryComponent.js'

const renderJournalEntries = (journals) => {
    const container = document.querySelector("#journal-container")
    journals.forEach(journal => {
        const journalHTML = journalFactory(journal)
        container.innerHTML += journalHTML
    })
}

export default renderJournalEntries

