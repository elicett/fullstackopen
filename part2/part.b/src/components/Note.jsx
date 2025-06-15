//Part 2, subpart b. altering data on the server, Exercise 2.15, (step 10): Updating number to an existing contact 

const Note = ({ note, toggleImportance }) => {
    const label = note.important
    ? 'make not important' : 'make important'

    return (
    <li>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
    </li>
    )
}

export default Note