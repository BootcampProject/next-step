import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useParams } from "react-router";
import { useQuery } from '@apollo/react-hooks';

import { useQuestionContext } from "../utils/GlobalState";
import {UPDATE_QUESTIONS} from "../utils/actions";
import { QUERY_QUESTIONS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";

function Detail() {
  const [state, dispatch] = useQuestionContext();
  const { id } = useParams();

  const [currentQuestion, setCurrentQuestion] = useState({});

  const { loading, data } = useQuery(QUERY_QUESTIONS);

  const { questions} = state;

  useEffect(() => {
    // already in global store
    if (questions.length) {
      setCurrentQuestion(questions.find(question => question._id === id));
    } 
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_QUESTIONS,
        questions: data.questions
      });

      data.questions.forEach((question) => {
        idbPromise('questions', 'put', question);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('questions', 'get').then((indexedQuestions) => {
        dispatch({
          type: UPDATE_QUESTIONS,
          questions: indexedQuestions
        });
      });
    }
  }, [questions, data, loading, dispatch, id]);


  return (
    <>
      {currentQuestion ? (
        <div className="container my-1">
          <Link to="/">
            ← Back to Home
          </Link>

          <h2>{currentQuestion.question}</h2>

          <p>
            {currentQuestion.answer}
          </p>
          
        </div>
      ) : null}
    </>
  );
};

export default Detail;
