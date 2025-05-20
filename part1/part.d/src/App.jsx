// Part 1, subpart d. Exercise 1.7: Unicafe, step 2
import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (  
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}> good </button>
      <button onClick={() => setNeutral(neutral+1)}> neutral </button>
      <button onClick={() => setBad(bad+1)}> bad </button>
      <h1>statistics</h1>
      <p>good={good}</p>
      <p>neutral={neutral}</p>
      <p>bad={bad}</p>
      <p>total={good+neutral+bad}</p>
      <p>average={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</p>
      <p>positive={((good/(good+neutral+bad))*100)}%</p>
    </div>
  )
}

export default App



















/*
// Part 1, subpart d. Exercise 1.8: Unicafe, step 3
import { useState } from 'react'


const Statistics = ({ good, neutral, bad }) => {

  const total = good+neutral+bad
  const average = (good*1+neutral*0+bad*-1)/(good+neutral+bad)
  const positive = ((good/total)*100)

  return (
    <div>
      <h1>statistics</h1>
      <p>good={good}</p>
      <p>neutral={neutral}</p>
      <p>bad={bad}</p>
      <p>total={total}</p>
      <p>average={average}</p>
      <p>positive={positive}%</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (  
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good+1)}> good </button>
      <button onClick={() => setNeutral(neutral+1)}> neutral </button>
      <button onClick={() => setBad(bad+1)}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
*/