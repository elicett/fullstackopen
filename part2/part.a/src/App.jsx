//Part 2, subpart a. Rendering one colection, modules. Exercise 2.4, (step 9):
import Note from './components/Note'


const Part = (props) => {
  //const { name, parts } = course;
  const name = props.course.name
  const parts = props.course.parts
  const totalExercisesPerPart = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h2>{name}</h2>
      {parts.map(part => (
        <p key={part.id}>  {part.name}: {part.exercises} </p>
      ))}
      <p>Total of {totalExercisesPerPart} exercises</p>
    </div>
  );
};


const Course = (props) => {
  const courses = props.courses
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map(course => (
        <Part key={course.id} course={course} />
      ))}
    </>
  );
};


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App