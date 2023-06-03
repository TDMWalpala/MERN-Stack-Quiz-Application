import { useEffect, useState } from "react";
import data from "../database/data";
import { useDispatch } from "react-redux";
import * as Actions from '../redux/question_reducer';

export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null
  });

  useEffect(() => {
    setGetData(prev => ({...prev, isLoading : true}));

    (async () => {
      setGetData(prevState => ({
        ...prevState,
        isLoading: true
      }));

      try {
        const questions = await data;
        if (questions.length > 0) {
          setGetData(prev => ({...prev, isLoading : false}));
          setGetData(prev => ({...prev, apiData : questions}));

          dispatch(Actions.startExamAction({ question : questions}))
        } else {
          throw new Error("No Questions Available");
        }
      } catch (error) {
        setGetData(prev => ({...prev, isLoading : false}));
        setGetData(prev => ({...prev, serverError : error}));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};
