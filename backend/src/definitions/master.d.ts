export interface Master {
    profile: Profile;
    projects: Project[];
    companies: Company[];
}

export interface Profile {
    id: number;
    name: string;
    university: string;
    career: string;
    hobbies: string;
    qiita_url: string;
    github_url: string;
    future_goal: string;
}

export interface Project {
    id: number;
    name: string;
    summary: string;
    technologies: string;
    result: string;
    references: ProjectReference[];
}


export interface ProjectReference {
    id: number;
    project_id: number;
    url: string;
    display_name: string;
}


export interface Company {
    id: number;
    name: string;
    url: string;
    period: string;
    summary: string;
    developments: string;
    technologies: string;
}