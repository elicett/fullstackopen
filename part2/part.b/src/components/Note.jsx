//Part 2, subpart b. Adding styles to the react application, Exercise 2.17, (step 12): Notifications and server state. Info previously removed

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