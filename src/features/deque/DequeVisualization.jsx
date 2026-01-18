import React, { useEffect, useState } from "react";
import Deque from "./deque";
import toast from "react-hot-toast";
import StackElement from "../stack/StackElement";

const deque = new Deque();

export default function DequeVisualization() {
  const [inputValue, setInputValue] = useState("");
  const [showPeekValue, setShowPeekValue] = useState(false);
  const [peek, setPeek] = useState("");
  const [dequeElements, setDequeElements] = useState(deque.getItems());

  useEffect(() => {
    deque.onChange(setDequeElements);
  }, []);

  function handleEnqueueFront() {
    const frontInsert = deque.frontInsert(inputValue);
    if (inputValue !== "") {
      if (frontInsert == null) {
        toast.error("Deque overflow!");
      } else {
        toast.success(`${inputValue} is inserted at front of deque`);
        setInputValue("");
        setShowPeekValue(false);
      }
    } else {
      toast.error("First enter a value");
    }
  }
  function handleEnqueueRear() {
    const rearInsert = deque.rearInsert(inputValue);
    if (inputValue !== "") {
      if (rearInsert == null) {
        toast.error("Deque overflow!");
      } else {
        toast.success(`${inputValue} is inserted at rear of deque`);
        setInputValue("");
        setShowPeekValue(false);
      }
    } else {
      toast.error("First enter a value");
    }
  }

  function handleDequeueFront() {
    const frontRemoved = deque.frontRemove();
    if (frontRemoved == null) {
      toast.error("Deque underflow!");
    } else {
      toast.success(`${frontRemoved} is removed from front of deque`);
      setShowPeekValue(false);
    }
  }

  function handleDequeueRear() {
    const rearRemoved = deque.rearRemove();
    if (rearRemoved == null) {
      toast.error("Deque underflow!");
    } else {
      toast.success(`${rearRemoved} is removed from rear of deque`);
      setShowPeekValue(false);
    }
  }

  function handlePeekFront() {
    const peekFront = deque.peekFront();
    if (peekFront == null) {
      toast.error("Deque is empty!");
    } else {
      toast.success(`Front element: ${peekFront}`);
      setPeek("Front");
      setShowPeekValue(true);
    }
  }

  function handlePeekRear() {
    const peekRear = deque.peekRear();
    if (peekRear == null) {
      toast.error("Deque is empty!");
    } else {
      toast.success(`Front element: ${peekRear}`);
      setPeek("Rear");
      setShowPeekValue(true);
    }
  }

  function handleReset() {
    const reset = deque.reset();
    if (reset == null) {
      toast.error("Deque is already in reset state!");
    } else {
      setDequeElements(deque.getItems());
      setPeek("");
      setShowPeekValue(false);
      toast.success("Deque reset successfully!");
    }
  }

  return (
    <div className="flex flex-col gap-6 w-230">
      <div className=" flex flex-col gap-6 bg-white px-6 py-8 rounded-2xl">
        <div className="flex justify-between gap-2 ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Enter a value..."
            className="border border-stone-300 h-12 outline-none font-semibold grow px-8 py-2 rounded-2xl"
          />

          <button
            onClick={handleEnqueueFront}
            className="border text-md cursor-pointer  border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 font-semibold  text-stone-50 py-1"
          >
            Enqueue Front
          </button>

          <button
            onClick={handleEnqueueRear}
            className="border text-md cursor-pointer  border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 font-semibold  text-stone-50 py-1"
          >
            Enqueue Rear
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleDequeueFront}
            className="border font-semibold  text-md border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl bg-blue-400 text-stone-200 py-1 cursor-pointer hover:bg-blue-500 transition-all duration-300"
          >
            Dequeue Front
          </button>
          <button
            onClick={handleDequeueRear}
            className="border font-semibold  text-md border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl bg-blue-400 text-stone-200 py-2 cursor-pointer hover:bg-blue-500 transition-all duration-300"
          >
            Dequeue Rear
          </button>

          <button
            onClick={handlePeekFront}
            className="border font-semibold text-md  border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl  text-blue-800 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300"
          >
            Peek Front
          </button>
          <button
            onClick={handlePeekRear}
            className="border font-semibold text-md  border-stone-300 shadow-md shadow-black/20 px-4 rounded-xl  text-blue-800 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300"
          >
            Peek Rear
          </button>

          <button
            onClick={handleReset}
            className="border text-md  border-stone-300 shadow-md shadow-black/20 px-8 rounded-xl  text-stone-200 bg-red-500 font-semibold py-2 cursor-pointer hover:bg-red-600 transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </div>

      <div className=" bg-white px-6 h-80 py-8 rounded-2xl flex flex-col gap-8">
        <p className="text-2xl font-bold">Deque Visualization</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-1">
            {dequeElements.map((item, index) => (
              <StackElement item={item} key={index} />
            ))}
          </div>
          {deque.isEmpty() && (
            <p className="text-3xl font-semibold">Deque is Empty!</p>
          )}
          {showPeekValue && (
            <p className="text-3xl font-semibold">
              {peek} Element ={" "}
              {peek == "Front" ? deque.peekFront() : deque.peekRear()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
