import React, { useState } from "react";
import toast from "react-hot-toast";
import { infixToPostfix } from "./postfix";

export default function PostfixConverter() {
  const [infix, setInfix] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState("");
  function handleConvert() {
    if (infix === "") {
      toast.error("First enter the infix expression");
    } else {
      setShowResult(true);
      const result = infixToPostfix(infix);
      setFinalResult(result);
      toast.success("Successfully converted!");
      //   setInfix("");
    }
  }
  function handleReset() {
    if (infix === "") {
      toast.error("Already in reset state");
    } else {
      toast.success("Successfully Reset!");
      setInfix("");
      setFinalResult("");
      setShowResult(false);
    }
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="w-200 flex flex-col gap-6 bg-white px-6 py-8 rounded-2xl">
        <div className="flex justify-between gap-2 ">
          <input
            type="text"
            value={infix}
            onChange={(e) => {
              setFinalResult("");
              setInfix(e.target.value);
            }}
            placeholder="Enter an infix expression ..."
            className="border border-stone-300 h-12 outline-none font-semibold grow px-8 py-2 rounded-2xl"
          />

          <button
            onClick={handleConvert}
            className="border text-lg cursor-pointer  border-stone-300 shadow-md shadow-black/20 px-10 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 font-semibold  text-stone-50 py-2"
          >
            Convert
          </button>
          <button
            onClick={handleReset}
            className="border text-lg  border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl  text-stone-200 bg-red-500 font-semibold py-2 cursor-pointer hover:bg-red-600 transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>
      <div className=" bg-white px-6 h-50 py-8 rounded-2xl flex flex-col gap-6">
        <p className="text-2xl font-semibold bg-gray-100 px-4 py-2 rounded-2xl">
          Result:{" "}
        </p>
        {showResult && (
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold">
              Infix Expression: <strong>{infix}</strong>{" "}
            </p>
            <p className="text-lg font-semibold">
              Postfix Expression: <strong>{finalResult}</strong>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
