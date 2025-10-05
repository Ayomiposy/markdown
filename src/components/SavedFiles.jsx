import { useMarkdowns } from "./hooks/useMarkdowns";

function SavedFiles({ setMarkdown }) {
  const { markdownsQuery, saveMutation } = useMarkdowns();

  if (markdownsQuery.isLoading) return <p>Loading saved files...</p>;

  return (
    <div className="bg-white border p-4 rounded-lg">
      <button
        onClick={() => saveMutation.mutate("# New Saved Note")}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Current
      </button>

      <h3 className="mt-4 font-semibold text-lg">Saved Files</h3>
      <ul className="list-disc pl-5">
        {markdownsQuery.data?.map((note) => (
          <li
            key={note.id}
            className="cursor-pointer hover:underline"
            onClick={() => setMarkdown(note.content)}
          >
            {new Date(note.createdAt).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedFiles;
