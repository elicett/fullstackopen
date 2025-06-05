//Part 2, subpart b. Obtaining data from the server, Exercise 2.11, (step 6):
import { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState('true')

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

  console.log('render', persons.length, 'contacts')

  return (
    <div>
      {persons.map(cPersons => (
        <p key={cPersons.id}>{cPersons.name} {cPersons.number}</p>
      ))}
    </div>
    )
}


export default App