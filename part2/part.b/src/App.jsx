//Part 2, subpart b. Forms Exercise 2.7, (step 2):
import { useState } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas' , number: '39-44-5323523'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //Funciones
  const addValues = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber
    }
    
    if (contacts.map(valores => valores.name).includes(newName)===true){
      alert('The contact "'+newName+'" already exists')
      event.preventDefault()
      return
    }

    setContacts(contacts.concat(contactObject))
    setNewName('')
    setNewNumber('')
  }

  //Handlers
  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

    const handleAddNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addValues}>
        <div>name: <input value={newName} onChange={handleAddName}/></div>
        <div>number: <input value={newNumber} onChange={handleAddNumber}/></div>
        <div><button type="submit">add</button></div>
        
      </form>
      <h2>Numbers</h2>
        <div>
          {contacts.map(valores =>
            <p key={valores.name}>
              {valores.name}: {valores.number}
            </p>
          )}
        </div>
    </div>
  )
}

export default App