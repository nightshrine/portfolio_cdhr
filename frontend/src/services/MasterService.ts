import { Master } from '@/definitions/Master';
import { INIT_MASTER_API } from '../constants/ApiConstants';
import { ApiService } from './ApiService';

/**
 * マスタ関連サービス
 */
export class MasterService {
    /**
     * メニューマスタ初期化
     */
    public static async init(): Promise<Master> {
        // マスタ初期化APIを呼び出す
        const masters = await ApiService.callGetApi<Master>(INIT_MASTER_API);
        return masters;
    }
}
