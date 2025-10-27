export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  languages_url: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubLanguage {
  [key: string]: number;
}

export interface ProjectWithLanguages extends GitHubRepo {
  languages: GitHubLanguage;
  techUsed: string;
}

const GITHUB_USERNAME = 'BhanuPrakash6640';
const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubRepos(): Promise<ProjectWithLanguages[]> {
  try {
    // Fetch repositories
    const reposResponse = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`);
    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos: GitHubRepo[] = await reposResponse.json();
    
    // Fetch languages for each repository
    const reposWithLanguages: ProjectWithLanguages[] = await Promise.all(
      repos.map(async (repo) => {
        try {
          const languagesResponse = await fetch(repo.languages_url);
          const languages: GitHubLanguage = languagesResponse.ok ? await languagesResponse.json() : {};
          
          // Create tech stack string from languages
          const techUsed = Object.keys(languages).join(', ');
          
          return {
            ...repo,
            languages,
            techUsed
          };
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
          return {
            ...repo,
            languages: {},
            techUsed: repo.language || 'Unknown'
          };
        }
      })
    );
    
    return reposWithLanguages;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}



