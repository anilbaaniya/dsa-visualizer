import React from "react";
import CircularQueueTheory from "../features/circularQueue/CircularQueueTheory";
import CircularQueueVisualization from "../features/circularQueue/CircularQueueVisualization";
import CircularQueueCode from "../features/circularQueue/CircularQueueCode";

export default function CircularQueue() {
  return (
    <div className="py-14 bg-gray-100 flex flex-col items-center gap-8">
      <div className="text-center font-bold text-4xl  text-blue-900 tracking-wide border-b w-[90%] py-4 shadow-md shadow-black/30 border-stone-300">
        Circular Queue
      </div>
      <CircularQueueTheory />
      <p className="text-3xl font-semibold">Perform the Operations</p>
      <CircularQueueVisualization />
      <CircularQueueCode />
    </div>
  );
}
