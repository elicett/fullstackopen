//Part 2, subpart a. Rendering one colection, modules. Exercise 2.1, (step 6):

const Note = ({ note }) => {
    return (
    <li>{note.content}</li>
    )
}

export default Note