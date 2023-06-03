import React, { useEffect } from "react";
import Questions from './Questions'

import {useSelector, useDispatch} from 'react-redux'
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/fetchQuestion";

const Quiz = () => {
  const trace  = useSelector(state => state.questions?.trace )
  const questions = useSelector((state) => state.questions?.queue?.question);
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(trace)
  })

  function onNext() {
    console.log("on click next btn");
    if(trace < questions.length - 1){
      dispatch(MoveNextQuestion())
    }
    
  }
  function onPrevious() {
    console.log("on click prev btn");
    if(trace > 0){
      dispatch(MovePrevQuestion())
    } 
  }
  return (
    <div className="container">
      <h1 className="title">Question</h1>
      <Questions></Questions>
      <div className="grid">
        <button className="prev btn" onClick={onPrevious}>
          Prev
        </button>
        <button className="next btn" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
