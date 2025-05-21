// Part 1, subpart d. Exercise 1.10: Unicafe, step 5
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
      <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
    </div>
    
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
