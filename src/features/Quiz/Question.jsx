import React, { useState } from "react";
import { useQuiz } from "./QuizContext";
import { NavLink } from "react-router";

export default function Question() {
  const { question, dispatch, numQuestions, index } = useQuiz();
  const [isAnswered, setIsAnswered] = useState(false);
  const [clickIndex, setClickIndex] = useState(null);

  if (question == null) return <p>Loading...</p>;
  // console.log(question.correctOption, index);

  return (
    <div className="px-8 flex flex-col  gap-12">
      <div className=" flex flex-col  gap-6">
        <h2 className="text-2xl font-semibold">{question.question}</h2>
        <div className="flex flex-col px-2 gap-4">
          {question.options.map((item, index) => (
            <button
              disabled={isAnswered}
              key={index}
              onClick={() => {
                setIsAnswered(true);
                setClickIndex(index);
                dispatch({ type: "newAns", payload: index });
              }}
              className={`text-left px-6 cursor-pointer text-lg border border-stone-400 py-2 rounded-full ${
                isAnswered
                  ? question.correctOption === index
                    ? "bg-[#1098ad]"
                    : "bg-[#ffa94d]"
                  : ""
              } ${clickIndex == index ? "ml-6" : ""} ${
                isAnswered ? "disabled:cursor-not-allowed" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <footer className="flex justify-between">
        <span></span>
        {index < numQuestions - 1 ? (
          <button
            onClick={() => {
              setIsAnswered(false);
              setClickIndex(null);
              dispatch({ type: "nextBtn" });
            }}
            className={`bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-stone-100 px-10 text-xl  py-3 cursor-pointer font-semibold rounded-full `}
          >
            Next
          </button>
        ) : (
          <NavLink
            to="/finishScreen"
            className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-stone-100 px-10 text-xl  py-3 cursor-pointer font-semibold rounded-full"
          >
            Finish
          </NavLink>
        )}
      </footer>
    </div>
  );
}

//  bg-[#ffa94d]  bg-[#1098ad]
