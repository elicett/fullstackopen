// Part 1, subpart d. Exercise 1.11: Unicafe, step 6 (Corrected Buttom Function and commited again)
import { useState } from 'react'


const StatisticLine = ({ text, value }) =>{
  return (
    <div>
      {text}: {value}
    </div>
  )

}

const Statistics = (props) => {
  const good=props.good
  const neutral=props.neutral
  const bad=props.bad
  const all = good+neutral+bad
  if (all === 0) return (<p>No feedback given</p>)
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
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>    
    {text}  
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClicksetGood = () => {
    setGood(good+1)
  }
  const handleClicksetNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleClicksetBad = () => {
    setBad(bad+1)
  }

  return (  
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClicksetGood} text='good'/>
      <Button handleClick={handleClicksetNeutral} text='neutral'/>
      <Button handleClick={handleClicksetBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
