import React from "react";

export default function LinearQueueTheory() {
  return (
    <div className="bg-white w-200 rounded-2xl px-8 py-10 flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          What is Linear Queue?
        </p>
        <p className="mt-3 text-lg px-4">
          Linear Queue is a linear data structure that follows the FIFO (First
          In, First Out) principle, which means the element inserted first is
          the first one to be removed.
        </p>
      </div>

      <p className="text-xl font-bold bg-gray-100 px-4 py-2 rounded-xl">
        Linear Queue Operations
      </p>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Enqueue Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It inserts an element at the rear of the queue.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Dequeue Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It removes an element from the front of the queue.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Peek Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It returns the front element of the queue without removing it.
        </p>
      </div>
    </div>
  );
}
