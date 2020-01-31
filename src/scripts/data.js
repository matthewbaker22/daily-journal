// const getJournalEntries = () => {
//     const journalUrl = "http://localhost:3000/journalEntries"
//     fetch(journalUrl)
//         .then(resp => resp.json())
//         .then(journalsFromAPI => {
//             renderJournalEntries(journalsFromAPI)
//             console.log(journalsFromAPI)
//         })
// }

const entriesUrl = "http://localhost:8088/entries"

const API = {
    getJournalEntries () {
        return fetch(entriesUrl)
            .then(response => response.json()) 
    }
}

export default API


