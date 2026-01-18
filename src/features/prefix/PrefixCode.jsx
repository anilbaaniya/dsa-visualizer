import React, { useState } from "react";
import { FaCode, FaCopy } from "react-icons/fa";
import PrefixDisplayCode, {
  cppPrefixCode,
  jsPrefixCode,
} from "./PrefixDisplayCode";
import toast from "react-hot-toast";

export default function PrefixCode() {
  const [language, setLanguage] = useState("javascript");
  const [copied, setCopied] = useState(false);
  const jsCodeToCopy = jsPrefixCode;
  const cppCodeToCopy = cppPrefixCode;

  async function handleCopyBtn() {
    try {
      await navigator.clipboard.writeText(
        language == "javascript" ? jsCodeToCopy : cppCodeToCopy
      );
      setCopied(true);
      toast.success("Copied!");
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <div>
      <header className="bg-white w-200 ">
        <div className="flex justify-between bg-linear-to-b/longer from-white- to-gray-100 px-8 py-4 ">
          <div className="flex items-center justify-center gap-2">
            <FaCode className="text-blue-400 text-2xl " />
            <span className="text-xl font-medium">
              Infix To Prefix Implementation
            </span>
          </div>

          <button
            onClick={handleCopyBtn}
            className="flex items-center justify-center gap-2 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer"
          >
            {copied ? (
              <span className="font-bold">Copied!</span>
            ) : (
              <>
                <FaCopy />
                <span className="font-medium ">Copy Code</span>
              </>
            )}
          </button>
        </div>

        <div className="px-8 pt-7 pb-4 flex gap-4">
          <button
            onClick={() => setLanguage("javascript")}
            className={`px-3 py-1 rounded-lg cursor-pointer text-lg ${
              language == "javascript"
                ? "bg-blue-500 text-stone-100"
                : " bg-gray-200"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setLanguage("cpp")}
            className={`px-3 py-1  rounded-lg cursor-pointer text-lg  ${
              language == "cpp" ? "bg-blue-500 text-stone-100" : " bg-gray-200"
            }`}
          >
            C++
          </button>
        </div>

        <PrefixDisplayCode Language={language} />
      </header>
    </div>
  );
}
