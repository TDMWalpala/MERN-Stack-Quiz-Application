import React from 'react'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {

  function onResult(){
    console.log('on result')
  }
  return (
    <div className="container">
      <h1 className='title'>Quiz</h1>
      <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                 <span className='bold'>{/*{userId || ""}*/}</span> 
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>{/*{totalPoints || 0}*/}</span>
            </div>
            <div className='flex'>
                <span>Total Questions : </span>
               <span className='bold'> {/* { queue.length || 0}*/}</span> 
            </div>
            <div className='flex'>
                <span>Total Attempts : </span>
                 <span className='bold'>{/*{attempts || 0}*/}</span> 
            </div>
            <div className='flex'>
                <span>Total Earn Points : </span>
                <span className='bold'> {/*{earnPoints || 0} */}</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                {/* <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span> */}
            </div>
        </div>

      <div>
        <Link className='btn' to={'/'} onClick={onResult}>Restart</Link>
      </div>
      <div>
        <ResultTable></ResultTable>
      </div>
    </div>
  )
}

export default Result
