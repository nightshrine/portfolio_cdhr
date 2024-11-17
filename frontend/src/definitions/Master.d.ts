export interface Master {
    profile: Profile;
    projects: Project[];
    companies: Company[];
}

/** プロフィール */
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
