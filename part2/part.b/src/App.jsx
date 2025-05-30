//Part 2, subpart b. Forms Exercise 2.9, (step 4):
import { useState } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [finder, setFinder] = useState('')


  //Funciones

  //Funcion para añadir registro
  const addValues = (event) => {
    event.preventDefault()

    if (contacts.map(valores => valores.name).includes(newName)===true){
      alert('The contact "'+newName+'" already exists')
      event.preventDefault()
      return
    }

    const contactObject = {
      name: newName,
      number: newNumber
    }

    setContacts(contacts.concat(contactObject))
    setNewName('')
    setNewNumber('')
  }

  //Funcion para mostrar registro buscado
  const contactsToShow = contacts.filter(
    cFiltered => cFiltered.name.toLowerCase().includes(finder.toLowerCase())
  )


  //Handlers
  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFinder = (event) => {
    console.log(event.target.value)
    //toLowerCase()
    setFinder(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div> filter show with <input value={finder} onChange={handleFinder}/></div>

      <h2>add a new</h2>
      <form onSubmit={addValues}>
        <div>name: <input value={newName} onChange={handleAddName}/></div>
        <div>number: <input value={newNumber} onChange={handleAddNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
        <div>
          {contactsToShow.map(contact =>
            <p key={contact.id}> 
              {contact.name} {contact.number}
            </p>
          )}
        </div>
    </div>
  )
}

export default App

