export interface Master {
    profile: ProfileContent[];
    histories: History[];
    projects: Project[];
    companies: Company[];
}

export interface ProfileContent {
    id: number;
    title: string;
    type: string;
    content: string;
}

export interface History {
    id: number;
    title: string;
    start_date: string;
    url: string | null;
    display_name: string | null;
    summary: string;
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
