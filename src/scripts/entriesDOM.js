import journalFactory from './entryCardFactory.js'

const container = document.querySelector("#journal-container")

const renderJournalEntries = (journals) => {
    
    container.innerHTML = ""
    
    journals.forEach(journal => {
        const journalHTML = journalFactory(journal)
        container.innerHTML += journalHTML
    })
}

export default renderJournalEntries

/* Alt for statement:
    for (const journal of journals) {}
*/