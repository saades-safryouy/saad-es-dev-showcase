import type { GitHubRepository, GithubProject } from "./types";
import { githubUsername, featuredRepositories } from "./config";

function toGithubProject(repo: GitHubRepository, featured: boolean): GithubProject {
  const tech = [repo.language, ...repo.topics].filter((v): v is string => Boolean(v));
  return {
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    demo: repo.homepage,
    language: repo.language,
    topics: repo.topics,
    tech,
    stars: repo.stargazers_count,
    updatedAt: repo.pushed_at,
    featured,
  };
}

export async function fetchGithubProjects(): Promise<GithubProject[]> {
  const url = `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated&type=owner`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-app",
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message ?? `GitHub API error: ${response.status}`);
  }

  const repos = (await response.json()) as GitHubRepository[];

  const eligible = repos.filter((r) => !r.fork && !r.archived);

  // Strict allowlist: keep only repositories whose names appear in the configured allowlist.
  const allowlist = featuredRepositories;
  const selected = eligible
    .filter((r) => allowlist.includes(r.name))
    .sort((a, b) => allowlist.indexOf(a.name) - allowlist.indexOf(b.name));

  // Remove any repository named "portfolio" even if it appears in the allowlist.
  const cleaned = selected.filter((r) => r.name.toLowerCase() !== "portfolio");

  // The first repo after cleaning becomes the featured (hero) card.
  return cleaned.map((repo, index) =>
    toGithubProject(repo, index === 0),
  );
}