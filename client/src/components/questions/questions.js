// import React, { useEffect, useState } from "react";
// import Question from "../answers/answers";
// // import { useQuestionContext } from "../../utils/GlobalState";
// // import { UPDATE_QUESTIONS } from "../../utils/actions";
// // import { useQuery } from "@apollo/react-hooks";
// // import { QUERY_QUESTIONS } from "../../utils/queries";
// // import { idbPromise } from "../../utils/helpers";
// import qgeography from "../../questions.json";

// function QuestionList() {
//   // const [state, dispatch] = useQuestionContext();
//   const [questionsList, setQuestionsList] = useState(questions);

//   // const { currentCategory } = state;
//   // console.log(currentCategory, "WWE ARE HERE!");

//   // const { loading, data } = useQuery(QUERY_QUESTIONS);

//   // useEffect(() => {
//   //   if (data) {
//   //     dispatch({
//   //       type: UPDATE_QUESTIONS,
//   //       questions: data.questions,
//   //     });
//   //     data.questions.forEach((question) => {
//   //       idbPromise("questions", "put", question);
//   //     });
//   //   } else if (!loading) {
//   //     idbPromise("questions", "get").then((questions) => {
//   //       dispatch({
//   //         type: UPDATE_QUESTIONS,
//   //         questions: questions,
//   //       });
//   //     });
//   //   }
//   // }, [data, loading, dispatch]);

//   // function filterQuestions() {
//   //   if (!currentCategory) {
//   //     return state.questions;
//   //   }
//   //   // const filterQuestions = (currentCategory) => {
//   //   //   (state) => question.category._id !== id;
//   //   // };

//   //   return state.questions.filter(
//   //     (question) => question.category._id === currentCategory
//   //   );
//   // }

//   return (
//     <div className="my-2">
//       <h2>Quiz Questions:</h2>

//       <div className="flex-row">
//         {questionsList.map((questions) => (
//           <Question
//             ask={questions.ask}
//             category={questions.category}
//             key={questions.category}
//             question={questions.answer}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default QuestionList;
