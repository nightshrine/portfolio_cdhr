export interface Master {
    profile: Profile;
    histories: History[];
    projects: Project[];
    companies: Company[];
}

/** プロフィールコンテンツ */
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

/** プロジェクト */
export interface Project {
    id: number;
    name: string;
    summary: string;
    technologies: string;
    result: string;
    references: ProjectReference[];
}

/** プロジェクト参照 */
export interface ProjectReference {
    id: number;
    project_id: number;
    url: string;
    display_name: string;
}

/** 会社 */
export interface Company {
    id: number;
    name: string;
    url: string;
    period: string;
    summary: string;
    developments: string;
    technologies: string;
}
