const entriesUrl = "http://localhost:8088/entries"

const API = {
    getJournalEntries () {
        return fetch(entriesUrl)
            .then(response => response.json()) 
    },
    deleteEntry(entryId) {
        return fetch (`${entriesUrl}/${entryId}`, {
            method: "DELETE"
        })
    }
}

export default API



