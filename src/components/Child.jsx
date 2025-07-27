import React from 'react'

function Child(props) {
  return (
    <>
    
    <h1>Child Component {props.number}</h1>
    <button onClick={()=>{
        props.setoption(`Option ${props.number}` )
    }}>Option {props.number}</button>
   </>
  )
}

export default Child
