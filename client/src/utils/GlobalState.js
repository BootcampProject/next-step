import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const quizQuestions = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    questions: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useQuestionContext = () => {
  return useContext(QuestionContext);
};

export { quizQuestions, useQuestionContext };
