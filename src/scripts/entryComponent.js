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

export default journalFactory