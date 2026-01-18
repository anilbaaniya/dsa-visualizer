import React from "react";

export default function HomePageAnimation() {
  return (
    <div className="flex gap-6 justify-center mt-10">
      <button className="animate-move-stack rounded-full border bg-stone-100 text-stone-600 border-stone-300 absolute top-30 left-100  px-8 py-4 font-bold shadow-lg ">
        Stack
      </button>

      <button className="animate-move-queue rounded-full border text-stone-600 border-stone-300 absolute top-40 left-145  px-8 py-4 font-bold shadow-lg ">
        Queue
      </button>

      <button className="animate-move-tree rounded-full  absolute text-stone-600 top-60 left-120 border bg-blue-50 border-stone-300 px-10 py-4 font-bold shadow-xl ">
        Tree
      </button>
    </div>
  );
}
