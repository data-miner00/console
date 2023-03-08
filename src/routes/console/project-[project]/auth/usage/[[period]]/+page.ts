import type { Models } from '@aw-labs/appwrite-console';
import { sdk } from '$lib/stores/sdk';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
    const { period } = params;
    const response = await sdk.forProject.users.getUsage(period ?? '30d');
    return {
        count: response.usersCount as unknown as Models.Metric[],
        created: response.usersCreate as unknown as Models.Metric[],
        read: response.usersRead as unknown as Models.Metric[],
        updated: response.usersUpdate as unknown as Models.Metric[],
        deleted: response.usersDelete as unknown as Models.Metric[]
    };
};
