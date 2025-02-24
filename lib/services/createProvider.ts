import { DataProvider } from '@/lib/services/dataProvider';
import { TanstackDataProvider } from './tanstackDataProvider';

export function createProvider(
    args: {
        dataProvider: DataProvider;
        name: string;
    }
) {
    const dataProvider = new TanstackDataProvider(
        args.name,
        args.dataProvider
    );

    return {
        // Queries
        useList: (params) => dataProvider.useGetList(params),
        useOne: (id) => dataProvider.useGetOne({ id }),

        // Mutations
        useCreate: () => dataProvider.useCreate(),
        useUpdate: () => dataProvider.useUpdate(),
        useDelete: () => dataProvider.useDeleteOne(),

        // Cache invalidation
        invalidateAll: () => dataProvider.invalidateQueries(),
        invalidateOne: (id) => dataProvider.invalidateQuery('getOne', { id })
    };
}
