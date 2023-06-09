import React, { useEffect } from "react";
import Journal from "./Journal";

function JournalList({ journalList, onJournalChange, onJournalDelete }) {

    useEffect(() => {
        fetch('http://localhost:3000/entries')
        .then(res => res.json())
        .then(journals => {
            const diplayJournals = journals.map((journal) => {
                return <Journal 
                key={journal.id} 
                id={journal.id} 
                passage={journal.passage}
                onJournalDelete={onJournalDelete} 
                />
            })
            onJournalChange(diplayJournals)
        })
    }, [])

    return(
        <div>
            {journalList}
        </div>
    )

}

export default JournalList