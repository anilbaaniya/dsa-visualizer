import React, { useEffect, useState } from "react";
import CircularQueue from "./circularQueue";
import toast from "react-hot-toast";
import StackElement from "../stack/StackElement";

const circularQueue = new CircularQueue();

export default function CircularQueueVisualization() {
  const [inputValue, setInputValue] = useState("");
  const [showPeekValue, setShowPeekValue] = useState(false);
  const [queueElements, setQueueElements] = useState(circularQueue.getItems());

  useEffect(() => {
    circularQueue.onChange(setQueueElements);
  }, []);

  function handleEnqueue() {
    const enqueue = circularQueue.enqueue(inputValue);
    if (inputValue !== "") {
      if (enqueue == 0) {
        toast.error("Queue overflow!");
      } else {
        toast.success(`${inputValue} is enqueued successfully!`);
        setInputValue("");
        setShowPeekValue(false);
      }
    } else {
      toast.error("First enter a value!");
    }
  }

  function handleDequeue() {
    const dequeue = circularQueue.dequeue();
    if (dequeue == 0) {
      toast.error("Queue underflow!");
    } else {
      toast.success(`${dequeue} is dequeued successfully!`);
      setShowPeekValue(false);
    }
  }

  function handlePeek() {
    const peek = circularQueue.peek();
    if (peek == 0) {
      toast.error("Queue is empty");
    } else {
      toast.success(`Peek element: ${peek}`);
      setShowPeekValue(true);
    }
  }

  function handleIsFull() {
    const full = circularQueue.isFull();
    if (full == 0) {
      toast.error("Queue is not full");
    } else {
      toast.success("Queue is full");
    }
  }

  function handleReset() {
    const reset = circularQueue.reset();
    if (reset == 0) {
      toast.error("Queue is already in reset state!");
    } else {
      toast.success("Queue reset successfully!");
      setShowPeekValue(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="w-200 flex flex-col gap-6 bg-white px-6 py-8 rounded-2xl">
        <div className="flex justify-between gap-2 ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter a value..."
            className="border border-stone-300 h-12 outline-none font-semibold grow px-8 py-2 rounded-2xl"
          />

          <button
            onClick={handleEnqueue}
            className="border text-lg cursor-pointer  border-stone-300 shadow-md shadow-black/20 px-10 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 font-semibold  text-stone-50 py-2"
          >
            Enqueue
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleDequeue}
            className="border font-semibold  text-lg border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl bg-blue-400 text-stone-200 py-2 cursor-pointer hover:bg-blue-500 transition-all duration-300"
          >
            Dequeue
          </button>

          <button
            onClick={handlePeek}
            className="border font-semibold text-lg  border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl  text-blue-800 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300"
          >
            Peek
          </button>
          <button
            onClick={handleIsFull}
            className="border font-semibold text-lg  border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl  text-stone-200 py-2 cursor-pointer bg-green-500 hover:bg-green-600 transition-all duration-300"
          >
            IsFull
          </button>

          <button
            onClick={handleReset}
            className="border text-lg  border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl  text-stone-200 bg-red-500 font-semibold py-2 cursor-pointer hover:bg-red-600 transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      <div className=" bg-white px-6 h-80 py-8 rounded-2xl flex flex-col gap-8">
        <p className="text-2xl font-bold">Circular Queue Visualization</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-1">
            {queueElements.map((item, index) => (
              <StackElement item={item} key={index} />
            ))}
          </div>
          {circularQueue.front == -1 && (
            <p className="text-3xl font-semibold">Queue is Empty!</p>
          )}
          {showPeekValue && (
            <p className="text-3xl font-semibold">
              Front Element = {circularQueue.peek()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
