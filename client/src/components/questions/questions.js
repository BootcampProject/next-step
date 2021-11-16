import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_QUESTIONS } from "../../utils/actions";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_QUESTIONS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif"

function Question() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_QUESTIONS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_QUESTIONS,
          questions: data.questions
        });
        data.questions.forEach((question) => {
          idbPromise('questions', 'put', question);
        });
    } else if (!loading) {
      idbPromise('questions', 'get').then((questions) => {
        dispatch({
          type: UPDATE_QUESTIONS,
         questions: questions
       });
      });
    }
  }, [data, loading, dispatch]);

  function filterQuestions() {
    if (!currentCategory) {
      return state.questions;
    }

    return state.questions.filter(question => question.category._id === currentCategory);
  }

  return (
    <div className="my-2">
      <h2>Quiz Questions:</h2>
      {state.questions.length ? (
        <div className="flex-row">
            {filterProducts().map(product => (
                <ProductItem
                  key= {question._id}
                  _id={question._id}
                  question={product.question}
                />
            ))}
        </div>
      ) : (
        <h3>No Questions</h3>
      )}
      { loading ? 
      <img src={spinner} alt="loading" />: null}
    </div>
  );
}

export default Question;