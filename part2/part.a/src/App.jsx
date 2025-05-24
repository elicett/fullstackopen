//Part 2, subpart a. Rendering one colection, modules. Exercise 2.3, (step 8):
import Note from './components/Note'


const Course = (props) => {
  return(
    <div>
        <Header course={props.course.name}></Header>
        <Content course={props.course}></Content>
    </div>
  )
}

const Header = (props) => {
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

const Content = (props) => {
  return(
    <div>
      <Part course={props.course.parts}></Part>
    </div>
  )
}

const Part = (props) => {

  const identifierArray = props.course
  //identifierArray.forEach((parts) => console.log(parts.name,":", parts.exercises))
  const miLista = identifierArray.map(parts => (
    <p key={parts.id}>{parts.name}: {parts.exercises}</p>
  ))
  
  const exercisesArray = props.course
  console.log("exercisesArray:", exercisesArray)
  const acumulador=0
  const totalExercises = exercisesArray.reduce((acumulador, valorActual) =>{
    return acumulador = acumulador + valorActual.exercises
  }, 0)

  return(
    <div>
      <li>{miLista}</li>
      <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }  
    ]
  }
  return <Course course={course} />
}

export default App