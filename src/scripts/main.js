import apiActions from "./api.js"
import events from "./events.js"
import renderJournalEntries from "./entriesDOM.js"
import addJournalEventListener from "./journal.js"


addJournalEventListener()

events.entryEventListener()

apiActions.getJournalEntries().then(renderJournalEntries)

events.searchEntries()