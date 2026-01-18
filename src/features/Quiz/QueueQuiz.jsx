import React from "react";
import ProgressBar from "./ProgressBar";
import Question from "./Question";

export default function QueueQuiz() {
  return (
    <div className=" w-180 py-10 mx-auto flex flex-col gap-8 bg-gray-700 text-white px-10 my-10 rounded-3xl">
      <ProgressBar />
      <Question />
    </div>
  );
}
