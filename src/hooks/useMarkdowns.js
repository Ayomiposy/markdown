import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMarkdowns, saveMarkdown } from "../api/markdownApi";

export const useMarkdowns = () => {
  const queryClient = useQueryClient();

  const markdownsQuery = useQuery({
    queryKey: ["markdowns"],
    queryFn: fetchMarkdowns,
  });

  const saveMutation = useMutation({
    mutationFn: saveMarkdown,
    onSuccess: () => {
      queryClient.invalidateQueries(["markdowns"]);
      alert("✅ Markdown saved successfully!");
    },
    onError: (err) => {
      console.error("❌ Failed to save:", err);
      alert("❌ Failed to save markdown!");
    },
  });

  return { markdownsQuery, saveMutation };
};
