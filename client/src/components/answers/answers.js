import React from "react";
// import { useQuestionContext } from "../../utils/GlobalState";

function Question(quiz) {
  // const [state] = useQuestionContext();

  // const {
  //   question,
  //   answer,
  //   _id,
  // } = quiz;

  // function filterQuestions() {
  //   if (!currentCategory) {
  //     return state.questions;
  //   }

  //   return state.questions.filter(question => question.category._id === currentCategory);
  // }

  return (
    <div className="card px-1 py-1">
      {/* <Link to={`/questions/${_id}`}>
        <p>{question, answer}</p>
      </Link> */}
      <h3>{quiz.ask}</h3>
      <h3>{quiz.answer}</h3>
    </div>
  );
}

export default Question;
