import { Bindings } from '../definitions/bindings';
import db from '../middleware/db';
import { Master, Profile } from '../definitions/master';

/**
 * Master関連のサービス
 */
export class MasterService {
    /**
     * 初期マスタ情報を取得
     * @param env
     * @returns
     */
    public static async getInitMaster(env: Bindings): Promise<Master> {
        const prisma = db(env);
        const master: Master = {
            profile: await MasterService.getProfile(env),
            projects: await MasterService.getProjects(env),
            companies: await MasterService.getCompanies(env),
        };
        return master;
    }

    /**
     * プロフィール情報を取得
     * @param env
     * @returns
     */
    public static async getProfile(env: Bindings): Promise<Profile> {
        const prisma = db(env);
        const profile: Profile | null = await prisma.profile.findFirst();

        if (!profile) {
            throw new Error('Profile not found');
        }
        return profile;
    }

    /**
     * プロジェクト情報を取得
     * @param env
     * @returns
     */
    public static async getProjects(env: Bindings) {
        const prisma = db(env);
        const projects = await prisma.project.findMany({
            include: {
                references: true,
            },
        });
        return projects;
    }

    /**
     * 会社情報を取得
     * @param env
     * @returns
     */
    public static async getCompanies(env: Bindings) {
        const prisma = db(env);
        const companies = await prisma.company.findMany();
        return companies;
    }
}
