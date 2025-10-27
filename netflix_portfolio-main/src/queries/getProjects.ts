// queries/getProjects.ts
import { Project } from '../types';
import { fetchGitHubRepos, ProjectWithLanguages } from '../services/githubService';

export async function getProjects(): Promise<Project[]> {
  try {
    const githubRepos = await fetchGitHubRepos();
    
    // Convert GitHub repos to Project format
    const projects: Project[] = githubRepos.map((repo: ProjectWithLanguages) => ({
      title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || 'A project showcasing modern web development practices.',
      techUsed: repo.techUsed || 'JavaScript',
      image: { 
        url: `https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(repo.name)}` 
      }
    }));
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}
