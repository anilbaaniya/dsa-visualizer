import React from "react";

export default function StackTheory() {
  return (
    <div className="bg-white w-200 rounded-2xl px-8 py-10 flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          What is stack?
        </p>
        <p className="mt-3 text-lg px-4">
          Stack is a linear data structure that follows the LIFO (Last In, First
          Out) principle, which means the element inserted last is the first one
          to be removed.
        </p>
      </div>

      <p className="text-xl font-bold bg-gray-100 px-4 py-2 rounded-xl">
        Stack Operations
      </p>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Push Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It Adds an element to the top of the stack.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Pop Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It removes an element from the top of the stack.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Peek Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It returns the top element of the stack without removing it.
        </p>
      </div>
    </div>
  );
}
