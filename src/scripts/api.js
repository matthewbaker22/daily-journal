const entriesUrl = "http://localhost:8088/entries"

export default {
    getJournalEntries() {
        return fetch(entriesUrl)
            .then(response => response.json()) 
    },
    addEntry(entry) {
        return fetch(entriesUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    updateEntry(entry) {
        return fetch(`${entriesUrl}/${entry.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        })
    },
    deleteEntry(entryId) {
        return fetch (`${entriesUrl}/${entryId}`, {
            method: "DELETE"
        })
    }
}