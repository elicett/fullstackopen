// Part 1, subpart d. Exercise 1.6: Unicafe
import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)




  const handleClick = () => {
    console.log('clicked good')
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good+1)}> good </button>
        <button onClick={() => setNeutral(neutral+1)}> neutral </button>
        <button onClick={() => setBad(bad+1)}> bad </button>
      </div>
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <>Average ={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}</>
        <p>positive {((good)/(good+neutral+bad)*100)}%</p>
      </div>


    </div>
  )
}

export default App

/*
Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. Tu tarea es implementar una aplicación web para
recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. Tu aplicación final podría verse así:

Ten en cuenta que tu aplicación debe funcionar solo durante una única sesión del navegador. Una vez que se actualice la página, 
los comentarios recopilados pueden desaparecer.
*/