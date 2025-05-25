//Part 2, subpart b. Forms Exercise 2.7, (step 2):
import { useState } from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  //Funciones
  const addValues = (event) => {
    event.preventDefault()
    console.log('Boton clickeado en:', event.target)
    console.log(contacts.map(valores => valores.name).includes(newName))
    const contactObject = {
      name: newName
    }
    
    if (contacts.map(valores => valores.name).includes(newName)===true){
      alert('The contact "'+newName+'" already exists')
      event.preventDefault()
      return
    }
    setContacts(contacts.concat(contactObject))
    setNewName('')
  }

  //Handlers
  const handleAddValues = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addValues}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handleAddValues}
          />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          {contacts.map(valores =>
            <p key={valores.name}>
              {valores.name}
            </p>
          )}
        </div>
    </div>
  )
}

export default App