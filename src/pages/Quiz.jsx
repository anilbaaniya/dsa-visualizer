import { NavLink } from "react-router";
import { Typewriter } from "react-simple-typewriter";

export default function Quiz() {
  return (
    // <div className="bg-linear-to-b/longer from-white- to-gray-200 h-full p-8 flex flex-col items-center pt-30  gap-10">
    <div className="flex flex-col  gap-10 relative h-full px-25 pt-30 bg-[url('/quizImage.png')] bg-cover bg-top bg-no-repeat">
      {/* <div className="bg-gray-700 h-full p-8 flex flex-col items-center pt-30  gap-10"> */}
      <h2 className="text-4xl font-bold text-stone-900">
        <Typewriter
          words={["Welcome to the DSA Quiz"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </h2>
      <p className="text-2xl font-semibold text-gray-600">
        Select a topic to get started:
      </p>
      <div className="flex gap-4 text-xl font-semibold">
        <NavLink
          // onClick={() => setTopic("stack")}
          to="/quiz/stack"
          className="bg-blue-500 text-white px-10 py-3 cursor-pointer rounded-full hover:bg-blue-600 transition-all duration-300"
        >
          Stack
        </NavLink>
        <NavLink
          // onClick={() => setTopic("queue")}
          to="/quiz/queue"
          className="bg-green-500 text-white px-10 py-3 cursor-pointer rounded-full hover:bg-green-600 transition-all duration-300"
        >
          Queue
        </NavLink>
      </div>
    </div>
  );
}
