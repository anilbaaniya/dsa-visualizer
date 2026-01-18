import React from "react";

export default function PostfixTheory() {
  return (
    <div className="bg-white w-200 rounded-2xl px-8 py-10 flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          What is Postfix Expression?
        </p>
        <p className="mt-3 text-lg px-4">
          A <strong>postfix expression </strong> (also called{" "}
          <strong>Reverse Polish Notation</strong>) is an arithmetic expression
          in which operator comes after the operands.
          <br />
          Example: AB+
        </p>
      </div>
    </div>
  );
}
