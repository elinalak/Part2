import React from 'react'
import Course from './Course'

const App = ({courses}) => {


  
    const Header = () => {
      return(
        <h1> Web development curriculum </h1>)}
    
   
  const Content = () => {
    return (
     <div>
    {courses.map(course=> 
      <Course key={course.id} course={course}/>
    )} 
   </div>
    )}

    //const Statistics = () => {
    //const sum = courses.reduce((s, ac) =>
    //s+ac.exercises,{})
    //return( <p>total of {sum} exercises</p>)
    //}



    return (
      <div>
      <Header />
      <Content />

      </div>
    )
    }

export default App