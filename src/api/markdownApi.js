export const saveMarkdown = async (markdown) => {
  const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
  const newNote = {
    id: Date.now(),
    title: markdown.slice(0, 20) || "Untitled", // use first 20 chars as title
    content: markdown,
    createdAt: new Date().toISOString(),
  };
  savedNotes.unshift(newNote); // add to top
  localStorage.setItem("notes", JSON.stringify(savedNotes.slice(0, 10))); // store last 10
  return newNote;
};

export const fetchMarkdowns = async () => {
  await new Promise((resolve) => setTimeout(resolve, 400)); // simulate network delay
  return JSON.parse(localStorage.getItem("notes") || "[]");
};
