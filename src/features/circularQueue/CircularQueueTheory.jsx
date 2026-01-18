import React from "react";

export default function CircularQueueTheory() {
  return (
    <div className="bg-white w-200 rounded-2xl px-8 py-10 flex flex-col gap-8">
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          What is Circular Queue?
        </p>
        <p className="mt-3 text-lg px-4">
          Circular Queue is a linear data structure that follows the FIFO (First
          In, First Out) principle where the last position is connected back to
          the first position, forming a circle. This allows efficient reuse of
          memory space.
        </p>
      </div>

      <p className="text-xl font-bold bg-gray-100 px-4 py-2 rounded-xl">
        Circular Queue Operations
      </p>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Enqueue Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It inserts an element at the rear of the queue. If the rear reaches
          the end, it wraps around to the beginning.
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          Dequeue Operation
        </p>
        <p className="mt-3 text-lg px-4">
          It removes an element from the front of the queue and moves the front
          forward circularly.
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
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          isFull
        </p>
        <p className="mt-3 text-lg px-4">
          It checks if the queue is full (front == (rear + 1) % size ).
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-xl">
          IsEmpty
        </p>
        <p className="mt-3 text-lg px-4">
          It checks if the queue is empty ( front == -1 ).
        </p>
      </div>
    </div>
  );
}
