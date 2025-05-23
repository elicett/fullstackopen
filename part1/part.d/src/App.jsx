// Part 1, subpart d. Exercise 1.14: anecdotes, step 3
import { useState } from 'react'

const generateRandom = () => {
  const min = 0;
  const max = 7;
    return (
      Math.floor(Math.random() * (max - min + 1) + min)
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0]);

  const handleSelected = () => {
    setSelected(generateRandom())
  }

  const copy = { ...votes }
  // incrementa en uno el valor de la propiedad 2 copy2

  const handleVote = () => {
    const copy = [... votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const MostVoted = () =>{
    const mostVoted = Math.max(...votes)
    const indexMostVoted = votes.indexOf(mostVoted)
    return(
      indexMostVoted
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSelected}>next anecdote</button>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[MostVoted()]}</p>
      <p>has {votes[MostVoted()]} votes</p>
    </div>
  )
}

export default App