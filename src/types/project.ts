export interface Project {
    id: string;
    title: string;
    description?: string;
    techStack: string[];
    demoURL?: string;
    markdownPath?: string;
}