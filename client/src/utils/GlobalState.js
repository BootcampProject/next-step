import React, { createContext, useContext } from "react";
import { useQuestionReducer } from './reducers'

const QuestionContext = createContext();
const { Provider } = QuestionContext;

const QuizQuestions = ({ value = [], ...props }) => {
  const [state, dispatch] = useQuestionReducer({
    questions: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useQuestionContext = () => {
  return useContext(QuestionContext);
};

export { QuizQuestions, useQuestionContext };
