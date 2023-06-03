import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchQuestion } from '../hooks/fetchQuestion';

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector((state) => state.questions?.queue?.question?.[state.questions?.trace] || {});
  const trace = useSelector((state) => state.questions?.trace);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  function onSelect() {
    // console.log('radio btn selected');
  }

  if (isLoading) return <h3 className="title">Loading...</h3>;
  if (serverError) return <h3 className="title">{serverError || 'Unknown Error'}</h3>;

  return (
    <div className="questions">
      {questions && questions.options ? (
        <>
          <h3 className="title">{questions.question}</h3>
          <ul key={questions.id}>
            {questions.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  value={checked}
                  name="options"
                  id={`q${i}-option`}
                  onChange={onSelect}
                />
                <label htmlFor={`q${i}-option`}>{q}</label>
                <div className="check"></div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3 className="title">No questions available</h3>
      )}
    </div>
  );
};

export default Questions;
