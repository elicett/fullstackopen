//Part 2, subpart b. Forms Exercise 2.10, (step 5):
import { useState } from 'react'



const Filter = ( {handleFinder, finder} ) => {
  return (
    <div>
      <h1>
      Phonebook
      </h1>
      <form>
        <div>filter show with:<input value={finder} onChange={handleFinder}></input></div>
      </form>
    </div>
  )
}


const PersonForm = ( {handleAddName, handleAddNumber, newName, handleSetContacts, newNumber} ) => {

  return (
    <div>
      <h1>
        add a new
      </h1>
      <form  onSubmit={handleSetContacts}>
        <div>name:<input value={newName} onChange={handleAddName}></input></div>
        <div>number:<input value={newNumber} onChange={handleAddNumber}></input></div>
        <div><button type="submit" >add</button></div>
      </form>
    </div>  
  )
}


const Persons = ({ contacts, finder }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(finder.toLowerCase())
  );
  const contactItems = filteredContacts.map(contact => (
    <p key={contact.id}>
      {contact.name} {contact.number}
    </p>
  ));

  return (
    <div>
      <h2>Numbers</h2>
      {contactItems.length > 0 ? contactItems : <p>No contacts found.</p>}
    </div>
  );
};




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

  //Handlers

  const handleSetContacts = (event) => {
    event.preventDefault()
    console.log("Se ejecutó handleSetContacts")
    if (contacts.map(valores => valores.name).includes(newName)===true){
      alert('The contact "'+newName+'" already exists')
      event.preventDefault()
      return
    }
    const newObject = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1,
    }
    setContacts(contacts.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const handleAddName = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFinder = (event) => {
    //toLowerCase()
    setFinder(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <Filter contacts={contacts} handleAddName={handleAddName} handleFinder={handleFinder} handleAddNumber={handleAddNumber} handleSetContacts={handleSetContacts} newName={newName} newNumber={newNumber} finder={finder}/>
      <PersonForm contacts={contacts} handleAddName={handleAddName} handleAddNumber={handleAddNumber} handleSetContacts={handleSetContacts} newName={newName} newNumber={newNumber}/>
      <Persons contacts={contacts} finder={finder}/>
    </div>
  )
}

export default App