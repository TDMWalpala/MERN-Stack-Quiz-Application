import React, { useEffect, useState } from 'react';
import data from '../database/data';

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log('radio btn selected');
  }

  const question = data[0];

  useEffect(() => {
    console.log(question);
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

