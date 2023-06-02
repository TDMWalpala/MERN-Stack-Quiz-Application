import React, { useRef } from 'react'
import {Link} from 'react-router-dom'

const Main = () => {

  const inputRef = useRef(null)

  return (
    <div className='Main-container'>
      <h1 className='title'>Quiz App</h1>
      <from id='form'>
        <input type="text" ref={inputRef} placeholder='username' />
      </from>
      <div className="start-btn-container">
        <Link className='start-btn' to={'quiz'}>Start Quiz</Link>
      </div>
    </div>
  )
}

export default Main
