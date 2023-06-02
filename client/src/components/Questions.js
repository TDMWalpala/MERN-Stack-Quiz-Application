import React, { useEffect, useState } from 'react';
import data from '../database/data';

import { useFetchQuestion } from '../hooks/fetchQuestion';

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log('radio btn selected');
  }
  const [{isLoading, apiData, serverError}] =  useFetchQuestion()
  const question = data[0];

  useEffect(() => {
    console.log(isLoading,apiData,serverError);
  });

  return (
    <div className="questions">
      <h3 className="title">{question.question}</h3>
      <ul key={question.id}>
        {question.options.map((q, i) => {
          return (
            <li key={i}>
              <input
                type="radio"
                value={checked}
                name="options"
                id={`q${i}-option`}
                onChange={onSelect}
              />
              <label htmlFor={`q${i}-option`}>{q}</label>
              <div className="check checked"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Questions;

