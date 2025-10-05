import { useState } from "react";
import Editor from "./components/editorscreen";
import Preview from "./components/previewscreen";

function App() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");
  return (
    <main className="flex flex-col md:flex-row h-screen overflow-hidden bg-gray-50">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </main>
  );
}

export default App;
