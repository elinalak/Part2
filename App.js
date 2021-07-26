import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('a new person...')

  const addNote = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }

    console.log('is...'+newName)
  
    setPersons(persons.concat(personObject))
    setNewName(newName)
    console.log('is personObject '+persons.length)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
            <Note key={person.id} person={person} />
        )}
      </div>
    </div>
  )
}

export default App
