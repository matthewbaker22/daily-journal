import journalFactory from './entryComponent.js'

const renderJournalEntries = (journals) => {
    const container = document.querySelector("#journal-container")
    container.innerHTML = ""
    journals.forEach(journal => {
        const journalHTML = journalFactory(journal)
        container.innerHTML += journalHTML
    })
}

export default renderJournalEntries

