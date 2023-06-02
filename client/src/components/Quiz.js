import React, { useEffect } from "react";
import Questions from './Questions'

import {useSelector} from 'react-redux'

const Quiz = () => {
  const state  = useSelector(state => state )
  useEffect(()=>{
    console.log(state)
  })

  function onNext() {
    console.log("on click next btn");
  }
  function onPrevious() {
    console.log("on click prev btn");
  }
  return (
    <div className="container">
      <h1 className="title">Question</h1>
      <Questions></Questions>
      <div className="grid">
        <button className="next btn" onClick={onNext}>
          Next
        </button>
        <button className="prev btn" onClick={onPrevious}>
          Prev
        </button>
      </div>
    </div>
  );
};

export default Quiz;
