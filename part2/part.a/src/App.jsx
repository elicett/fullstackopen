//Part 2, subpart a. Rendering one colection, modules. Exercise 2.1, (step 6):
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

  const array = props.course
  //array.forEach((parts) => console.log(parts.name, parts.exercises))
  
  const miLista = array.map(parts => (
    <li key={parts.id}>{parts.name}: {parts.exercises}</li>
  ))

  return(
    <div>
      <p>
        {miLista}
      </p>
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
      }
    ]
  }

  return <Course course={course} />
}

export default App