import React from "react";
import { useQuiz } from "../features/Quiz/QuizContext";
import { NavLink } from "react-router";

export default function QuizFinishScreen() {
  const { numQuestions, points, dispatch } = useQuiz();
  return (
    <div className=" pt-30 flex flex-col items-center gap-15  bg-linear-to-b/longer from-white- to-gray-300 h-full">
      <p className="bg-[#1098ad]  px-12  shadow-lg/20 shadow-blue-400 py-3 rounded-full text-2xl font-semibold text-stone-100">
        You scored <strong>{points}</strong> out of{" "}
        <strong> {numQuestions * 10}</strong>
      </p>
      <NavLink
        onClick={() => dispatch({ type: "restart" })}
        to="/quiz"
        className="border border-stone-400 px-6 py-2 rounded-xl text-xl font-semibold shadow-lg/10 shadow-black  hover:bg-linear-to-b/longer from-white- to-gray-300 transition-all duration-300 "
      >
        ← Go Back
      </NavLink>
    </div>
  );
}
