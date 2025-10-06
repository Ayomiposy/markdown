import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const STORAGE_KEY = "markdown_files";

export function useMarkdowns() {
  const queryClient = useQueryClient();

  // 🔹 Fetch markdown history from localStorage
  const markdownsQuery = useQuery({
    queryKey: ["markdowns"],
    queryFn: () => {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return saved;
    },
  });

  // 🔹 Save markdown locally + pretend to send to API
  const saveMutation = useMutation({
    mutationFn: async (markdown) => {
      // simulate API or use axios.post('your_api_url', { markdown })
      const all = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const newNote = {
        id: Date.now(),
        title: `Note ${all.length + 1}`,
        content: markdown,
        createdAt: new Date().toISOString(),
      };
      const updated = [...all, newNote];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return newNote;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["markdowns"]);
    },
  });

  return { markdownsQuery, saveMutation };
}
