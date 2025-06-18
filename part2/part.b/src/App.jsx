//Part 2, subpart b. Adding styles to the react application, Exercise 2.16, (step 11): Notifications. Contact added and contact edited 
import { useState, useEffect } from 'react'
import noteService from './services/notes.js'



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


const Persons = ({ contacts, finder, handleDeleteContact }) => {
  console.log(contacts)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(finder.toLowerCase())
  );
  const contactItems = filteredContacts.map(contact => (
    <div key={contact.id}>
      <span className='contactList'>
        {contact.name} {contact.number}
      </span>
      <button type='button' onClick={() => handleDeleteContact(contact.id, contact.name)}> 
        delete
      </button>
    </div>
  ));

  return (
    <div>
      <h2>Numbers</h2>
      {contactItems.length > 0 ? contactItems : <p>No contacts found.</p>}
    </div>
  );

};


  const Notification = ({ message }) => {
    if (message===null){
      return null
    }
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }



const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [finder, setFinder] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  console.log(notificationMessage)
  //Funciones

  const hook = () => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setContacts(response.data)
      })
  }
  useEffect(hook, [])

  //Handlers

  const handleSetContacts = (event) => {
    event.preventDefault()
    console.log("Se ejecutó handleSetContacts")

    if (newName==='' || newName===null || newNumber==='' || newNumber===null){
        event.preventDefault()
        window.alert('You should fill both fields')
        return
      }

    if (contacts.map(valores => valores.name).includes(newName)===true){
      if(!window.confirm(`${newName} is already added to phonebook, replace the old number wich a new one?`)){
        event.preventDefault()
        return
      }

      const existingContact = contacts.find(valores=> valores.name===newName)
      
      if (existingContact.number===newNumber){
        event.preventDefault()
        window.alert('Please check: You are introducing the same phone number value')
        return
      }
      
      const editNumber = {
        name: existingContact.name,
        id: existingContact.id,
        number: newNumber
      }
      noteService
        .replace(editNumber)
        .then(response=> { console.log(response.data)
          setContacts(contacts.map(contact => 
            contact.id === response.data.id
              ? {
                  id: response.data.id,
                  name: response.data.name,
                  number: response.data.number
                }//operador ternario cuando la condicion es falsa (: = False)
              : contact //operador ternario cuando la condicion es verdadera (: = True)
          ))
          setNotificationMessage(`Number of the user ${response.data.name} edited correctly`)
          setTimeout(()=> {setNotificationMessage(null)}, 5000)
        })
      setNewName('')
      setNewNumber('')
      return
    }
    const newObject = {
      name: newName,
      number: newNumber
      //id: contacts.length + 1 has been removed to give that value through React/JSON-server
    }
    noteService
      .create(newObject)
      .then(response => {
        setContacts(contacts.concat(response.data))
        setNotificationMessage(`${response.data.name} created correctly`)
        setTimeout(()=> {setNotificationMessage(null)}, 5000)
      })
    setNewName('')
    setNewNumber('')
  }

  const handleDeleteContact = (id, name) => {

    if (!window.confirm(`Are you sure that you want to delete ${name}?`)) { 
        return
      }

    console.log(id, 'deleted at: ', new Date().toLocaleTimeString())
    noteService
      .erase(id) 
      .then(response => 
        console.log('Request status:', response.status))
        setContacts(prev => prev.filter(contact => contact.id !== id))
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
    setFinder(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <Notification message={notificationMessage}/>
      <Filter contacts={contacts} handleAddName={handleAddName} handleFinder={handleFinder} handleAddNumber={handleAddNumber} handleSetContacts={handleSetContacts} newName={newName} newNumber={newNumber} finder={finder}/>
      <PersonForm contacts={contacts} handleAddName={handleAddName} handleAddNumber={handleAddNumber} handleSetContacts={handleSetContacts} newName={newName} newNumber={newNumber}/>
      <Persons contacts={contacts} finder={finder} handleDeleteContact={handleDeleteContact}/>
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