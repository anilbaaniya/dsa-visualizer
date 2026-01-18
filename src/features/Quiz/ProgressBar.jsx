import React from "react";
import { useQuiz } from "./QuizContext";

export default function ProgressBar() {
  const { numQuestions, index, points } = useQuiz();
  return (
    <div className="flex flex-col gap-3">
      <progress
        value={index + 1}
        max={numQuestions}
        className="col-span-2 h-5 w-full rounded-full overflow-hidden custom-progress"
      ></progress>
      <div className="flex justify-between px-3">
        <span className="font-semibold text-xl">
          Question {index + 1}/{numQuestions}
        </span>
        <span className="font-semibold text-xl">
          {points}/{numQuestions * 10}
        </span>
      </div>
    </div>
  );
}
