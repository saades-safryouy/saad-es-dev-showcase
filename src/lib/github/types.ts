/** Narrow subset of the GitHub REST API repository object we actually use. */
export interface GitHubRepository {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  pushed_at: string;
}

/** Normalized shape consumed by UI components. */
export interface GithubProject {
  name: string;
  description: string | null;
  url: string;
  demo: string | null;
  language: string | null;
  topics: string[];
  tech: string[];
  stars: number;
  updatedAt: string;
  featured: boolean;
}