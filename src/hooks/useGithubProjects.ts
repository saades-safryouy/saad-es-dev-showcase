import { useQuery } from "@tanstack/react-query";
import { fetchGithubProjects } from "@/lib/github/projects";
import { githubUsername } from "@/lib/github/config";
import type { GithubProject } from "@/lib/github/types";

export function useGithubProjects() {
  return useQuery<GithubProject[], Error>({
    queryKey: ["github-projects", githubUsername],
    queryFn: fetchGithubProjects,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 10 * 60 * 1000,
    retry: 1,
  });
}