//Part 2, subpart a. Rendering one colection, modules. Exercise 2.5, (step 10): Separated module
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


export default Course