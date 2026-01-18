import { useEffect, useState } from "react";
import OptionButton from "../../ui/OptionButton";
import Stack from "./stackOperation";
import StackElement from "./StackElement";
import toast from "react-hot-toast";

const stack = new Stack();
export default function StackVisualization() {
  const [stackElements, setStackElements] = useState(stack.getItems());
  const [inputValue, setInputValue] = useState("");

  const [showPeekValue, setShowPeekValue] = useState(false);

  // Automatically update state whenever stack changes
  useEffect(() => {
    stack.onChange(setStackElements);
  }, []);

  const handlePush = () => {
    if (inputValue !== "") {
      const pushed = stack.push(inputValue);
      setInputValue(""); // clear input after push
      if (pushed === 0) {
        toast.error("Stack overflow!");
      } else {
        setShowPeekValue(false);
        toast.success(`${inputValue} is pushed successfully!`);
      }
    } else {
      toast.error("First enter a value!");
    }
  };

  const handlePop = () => {
    const popped = stack.pop();
    if (popped === 0) {
      toast.error("Stack underflow!");
    } else {
      setShowPeekValue(false);
      toast.success(`${popped} is popped out!`);
    }
  };

  const handlePeek = () => {
    const top = stack.peek();
    if (top == 0) {
      toast.error("Stack is empty!");
    } else {
      toast.success(`Top element: ${top}`);
      setShowPeekValue(true);
    }
  };

  const handleReset = () => {
    const reset = stack.reset();
    if (reset == 0) {
      toast.error("Stack is already in a reset state");
    } else {
      setShowPeekValue(false);
      toast.success("Stack reset successfully!");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-200 flex flex-col gap-6 bg-white px-6 py-8 rounded-2xl">
        <div className="flex justify-between gap-2 ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a value..."
            className="border border-stone-300 h-12 outline-none font-semibold grow px-8 py-2 rounded-2xl"
          />

          <button
            onClick={handlePush}
            className="border text-lg cursor-pointer  border-stone-300 shadow-md shadow-black/20 px-10 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 font-semibold  text-stone-50 py-2"
          >
            Push
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={handlePop}
            className="border font-semibold  text-lg border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl bg-blue-400 text-stone-200 py-2 cursor-pointer hover:bg-blue-500 transition-all duration-300"
          >
            Pop
          </button>

          <button
            onClick={handlePeek}
            className="border font-semibold text-lg  border-stone-300 shadow-md shadow-black/20 px-16 rounded-xl  text-blue-800 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300"
          >
            Peek
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
        <p className="text-2xl font-bold">Stack Visualization</p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-1">
            {stackElements.map((item, index) => (
              <StackElement item={item} key={index} />
            ))}
          </div>
          {stack.top == -1 && (
            <p className="text-3xl font-semibold">Stack is Empty!</p>
          )}
          {showPeekValue && (
            <p className="text-3xl font-semibold">
              Top Element = {stack.peek()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
