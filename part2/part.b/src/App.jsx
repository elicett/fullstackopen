//Part 2, subpart b. altering data on the server, Exercise 2.12, (step 7):
import { useState, useEffect } from 'react'
import axios from 'axios'


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
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [finder, setFinder] = useState('')


  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setContacts(response.data)
      })
  }
  useEffect(hook, [])

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
    axios
      .post('http://localhost:3001/persons', newObject)
      .then(response => {
        setContacts(contacts.concat(response.data))
        //setContacts('')
      })
    
    //setContacts(contacts.concat(newObject))
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























/*
import { useState, useEffect } from 'react'
import axios from 'axios'




const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('true')
  
  /*
  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])


  // Handlers
  const addContact = event => {
    event.preventDefault()
    const contactObject = {
      name: newPerson,
      number: newNumber,
    }

    axios
      .post('http://localhost:3001/notes', contactObject)
      .then(response => {
        console.log(response)
        })
  }


  const handleNewPersonChange = (event) => {
    event.preventDefault()
    event.target.value
  }
  const handleNewNumberChange = (event) => {
    event.preventDefault()
    event.target.value
  }


  console.log('render', persons.length, 'contacts')

  return(
    <div>
      {persons.map(cPersons => (
        <p key={cPersons.id}>{cPersons.name} {cPersons.number}</p>
      ))}

      <form onSubmit={addContact}>
          <input value={newPerson}> onChange={handleNewPersonChange}</input>
            <input value={newPerson}> onChange={handleNewNumberChange}</input>
          <buttom> Submit</buttom>
      </form>
    </div>
  )
}


export default App
*/