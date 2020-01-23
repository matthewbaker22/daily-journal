const getJournalEntries = () => {
    const journalUrl = "http://localhost:3000/journalEntries"
    fetch(journalUrl)
        .then(resp => resp.json())
        .then(journalsFromAPI => {
            renderJournalEntries(journalsFromAPI)
            console.log(journalsFromAPI)
        })
}

const renderJournalEntries = (journals) => {
    const container = document.querySelector("#journal-container")
    journals.forEach(journal => {
        const journalHTML = journalFactory(journal)
        container.innerHTML += journalHTML
    })
}

const journalFactory = (journal) => {
    return `
        <section class="journal">
            <h1>Date: ${journal.journalDate}</h1>
            <h1>Concepts Covered: ${journal.conceptsCovered}</h1>
            <h1>Entry: ${journal.journalEntry}</h1>
            <h1>Mood: ${journal.mood}</h1>
        </section>
    `
}

getJournalEntries();