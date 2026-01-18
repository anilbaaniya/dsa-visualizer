import React from "react";
import OptionButton from "../../ui/OptionButton";
import { PiQueueLight } from "react-icons/pi";

export default function QueueOption() {
  return (
    <div className="   flex flex-col gap-6  pb-6 border border-stone-200 rounded-2xl ">
      <header className=" bg-stone-100  px-8 py-6 font-bold text-3xl rounded-t-2xl flex gap-3 items-center">
        <span>
          <PiQueueLight className="text-blue-500 " />
        </span>
        <span>Queue</span>
      </header>
      <div className="px-8  font-semibold text-xl">
        <p>Types of Queue</p>
        <div className="flex pt-6 gap-6">
          <OptionButton to="/linearQueue">Linear Queue</OptionButton>
          <OptionButton to="/circularQueue">Circular Queue</OptionButton>
          <OptionButton to="/deque">Deque</OptionButton>
        </div>
      </div>
    </div>
  );
}
