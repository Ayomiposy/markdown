import { marked } from "marked";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";

function Preview({ markdown }) {
  const textMarked = DOMPurify.sanitize(marked.parse(markdown));
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex flex-col w-full md:w-1/2 border border-gray-200 rounded-lg bg-white overflow-hidden">
      <div className="sticky top-0 bg-blue-600 text-white font-semibold px-4 py-3 text-lg uppercase tracking-wide z-10 flex justify-between">
        Preview <span>{time}</span>
      </div>
      <div
        className="flex-1 overflow-y-auto p-6 bg-white prose prose-blue max-w-none min-h-[40vh] md:h-[calc(100vh-56px)]"
        dangerouslySetInnerHTML={{ __html: textMarked }}
      ></div>
    </div>
  );
}

export default Preview;
