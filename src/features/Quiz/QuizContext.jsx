import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useParams } from "react-router";

const QuizContext = createContext();

const initialState = {
  questions: [],
  answer: null,
  index: 0,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload.questions };

    case "dataFailed":
      return { ...state };

    case "nextBtn":
      return { ...state, index: state.index + 1 };

    case "newAns": {
      const question = state.questions[action.payload];
      return {
        ...state,
        points:
          action.payload == question.correctOption
            ? state.points + 10
            : state.points,
      };
    }
    case "restart":
      return { ...state, index: 0, points: 0 };

    default:
      return state;
  }
}

export default function QuizProvider({ children }) {
  const { topic } = useParams();
  // console.log(topic);
  const [{ questions, index, points, answer }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions?.length;

  useEffect(
    function () {
      if (!topic) return;
      async function loadQuestion() {
        try {
          let data = await fetch(`${import.meta.env.BASE_URL}questions.json`);
          let res = await data.json();
          dispatch({ type: "dataReceived", payload: res[topic] });
          console.log(res[topic]);
        } catch {
          dispatch({ type: "dataFailed" });
        }
      }
      loadQuestion();
    },
    [topic],
  );

  return (
    <QuizContext.Provider
      value={{
        question: questions.length > 0 ? questions[index] : null,
        index,
        points,
        answer,
        dispatch,
        numQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  // console.log(context);
  if (context == undefined)
    throw new Error("Quiz context is out of quiz provider!");
  return context;
}
