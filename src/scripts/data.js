const entriesUrl = "http://localhost:8088/entries"

const API = {
    getJournalEntries () {
        return fetch(entriesUrl)
            .then(response => response.json()) 
    }
}

const saveJournalEntry = (entry) => {
    
}

export default API



