import { useMarkdowns } from "../hooks/useMarkdowns";

function Editor({ markdown, setMarkdown }) {
  const { markdownsQuery, saveMutation } = useMarkdowns();

  const handleSave = () => {
    if (!markdown.trim()) return alert("Write something first!");

    saveMutation.mutate({
      title: `Note ${new Date().toLocaleTimeString()}`,
      content: markdown,
    });

    // Save as downloadable file
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "markdown-note.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // load file
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".md")) {
      alert("Please upload a valid .md file!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => setMarkdown(event.target.result);
    reader.onerror = () => alert("❌ Error reading file.");
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 border border-gray-200 rounded-lg bg-white">
      {/* Header Bar */}
      <div className="sticky top-0 bg-blue-600 text-white font-semibold px-4 py-3 text-lg uppercase tracking-wide z-10 flex justify-between items-center">
        <span>Markdown</span>

        <div className="flex gap-2 items-center flex-wrap">
          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saveMutation.isPending}
            className={`px-3 py-1 text-sm font-medium rounded-md transition ${
              saveMutation.isPending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-white text-blue-600 hover:bg-blue-100"
            }`}
          >
            {saveMutation.isPending ? "Saving..." : "Save"}
          </button>

          {/* Load File */}
          <label className="cursor-pointer bg-white text-blue-600 px-3 py-1 text-sm rounded-md hover:bg-blue-100">
            Load File
            <input
              type="file"
              accept=".md"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          {/* History Dropdown */}
          <select
            onChange={(e) => setMarkdown(e.target.value)}
            className="bg-white text-blue-600 text-sm px-2 py-1 rounded-md"
            disabled={markdownsQuery.isLoading}
          >
            <option value="">
              {markdownsQuery.isLoading ? "Loading..." : "History"}
            </option>
            {markdownsQuery.data?.length > 0 ? (
              markdownsQuery.data.map((note) => (
                <option key={note.id} value={note.content}>
                  {note.title || "Untitled"} (
                  {new Date(note.createdAt).toLocaleTimeString()})
                </option>
              ))
            ) : (
              <option disabled>No saved notes</option>
            )}
          </select>
        </div>
      </div>

      {/* Editor Text Area */}
      <div className="flex-1">
        <textarea
          className="w-full h-full min-h-[40vh] md:h-[calc(100vh-56px)] resize-none outline-none p-4 bg-white text-gray-800 font-mono"
          onChange={(e) => setMarkdown(e.target.value)}
          value={markdown}
          placeholder="Write your markdown here..."
        ></textarea>
      </div>
    </div>
  );
}

export default Editor;
