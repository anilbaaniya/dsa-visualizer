import React from "react";

export default function DequeTheory() {
  return (
    <div className="bg-white w-230 rounded-2xl px-8 py-10 flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          What is Deque?
        </p>
        <p className="mt-3 text-lg px-4">
          Deque is a linear data structure where insertion and deletion can
          happen from both ends (front and rear). It acts as a queue or stack
          depending on usage.
        </p>
      </div>

      <p className="text-xl font-bold bg-gray-100 px-4 py-2 rounded-xl">
        Deque Operations
      </p>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          frontInsert(element)
        </p>
        <p className="mt-3 text-lg px-4">
          It adds an element at the front of the deque.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          rearInsert(element)
        </p>
        <p className="mt-3 text-lg px-4">
          It adds an element at the rear of the deque.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          frontRemove
        </p>
        <p className="mt-3 text-lg px-4">
          It removes an element from the front of the deque.
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          rearRemove
        </p>
        <p className="mt-3 text-lg px-4">
          It removes the element from the rear of the deque.
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          frontPeek
        </p>
        <p className="mt-3 text-lg px-4">
          It returns the front element of the deque without removing it.
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          rearPeek
        </p>
        <p className="mt-3 text-lg px-4">
          It returns the rear element of the queue without removing it.
        </p>
      </div>
    </div>
  );
}
