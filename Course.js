import React from 'react'
import Part from './components/Name'

const Statistics = ({parts}) => {
  const sum = parts.reduce((ac, s) =>
  ac+s.exercises,0)
  return( <h4>total  {sum} exercises</h4>)
  }

const Course = ({course}) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(p=> 
        <Part key={p.id} part={p}/>)}
        <Statistics parts={course.parts}/>
    </div>
    )
}

export default Course