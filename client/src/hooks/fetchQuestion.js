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
    const fetchData = async () => {
      setGetData(prevState => ({
        ...prevState,
        isLoading: true
      }));

      try {
        const question = await data;
        if (question.length > 0) {
          setGetData(prevState => ({
            ...prevState,
            isLoading: false,
            apiData: question
          }));

          dispatch(Actions.startExamAction());
        } else {
          throw new Error("No Questions Available");
        }
      } catch (error) {
        setGetData(prevState => ({
          ...prevState,
          isLoading: false,
          serverError: error
        }));
      }
    };

    fetchData();
  }, [dispatch]);

  return [getData, setGetData];
};
