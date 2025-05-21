// Part 1, subpart d. Exercise 1.11: Unicafe, step 6
import { useState } from 'react'


const StatisticLine = ({ text, value }) =>{
  return (
    <div>
      {text}{value}
    </div>
  )

}

const Statistics = ({ good, neutral, bad }) => {

  const all = good+neutral+bad
  if (all === 0) return (<h1>No feedback given</h1>)
  const average = (good*1+neutral*0+bad*-1)/(good+neutral+bad)
  const positive = ((good/all)*100)  + '%'

  return (
    <table>

      <thead>
        <tr>
          <th colSpan={2}><h1>statistics</h1></th>
        </tr>
      </thead>

      <tbody>
      <tr>
        <td><StatisticLine text="good"/></td>
        <td><StatisticLine value={good}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="neutral"/></td>
        <td><StatisticLine value={neutral}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="bad"/></td>
        <td><StatisticLine value={bad}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="all"/></td>
        <td><StatisticLine value={all}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="average"/></td>
        <td><StatisticLine value={average}/></td>
      </tr>
      <tr>
        <td><StatisticLine text="positive"/></td>
        <td><StatisticLine value={positive}/></td>
      </tr>
      </tbody>

    </table>
    
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
