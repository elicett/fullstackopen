// Part b: Javascript, Step 1.3
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name}: {props.number_of_exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} number_of_exercises={props.part1.exercises}/>
      <Part name={props.part2.name} number_of_exercises={props.part2.exercises}/>
      <Part name={props.part3.name} number_of_exercises={props.part3.exercises}/>
    </div>
  )
}

const Total = (props) => {
    return (
      <div>
        <p>Total: {props.exercises1+props.exercises2+props.exercises3}</p>
      </div>
    )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
    </div>
  )
}
export default App























/* ----------------------- STEP 1.3
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    'name': 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    'name': 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    'name': 'State of a component',
    exercises: 14 
  }

return (
  <div>
    <Header course={course}/>
    <Content part1={part1} part2={part2} part3={part3} />
    <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
  </div>
)
*/////////////////////////// END STEP 1.3 //////////////////////





/* -----------------------  STEP 1.4
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name}: {props.number_of_exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} number_of_exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} number_of_exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} number_of_exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
    return (
      <div>
        <p>Total: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      'name': 'Fundamentals of React',
      exercises: 10
    },
    {
      'name': 'Using props to pass data',
      exercises: 7
    },
    {
      'name': 'State of a component',
      exercises: 14 
    }
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  )
}
*/ //////////////////////// END STEP 1.4 //////////////////////



/* STEP 1.5
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.name}: {props.number_of_exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} number_of_exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} number_of_exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} number_of_exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
    return (
      <div>
        <p>Total: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </div>
    )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
*/
