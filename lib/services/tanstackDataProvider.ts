import { useMutation, useQuery, useQueryClient, QueryKey } from '@tanstack/react-query';
import { DataProvider, Pagination, Sorter, Filter, Meta } from './dataProvider';

export class TanstackDataProvider<TData, TError> {
    private queryKeyPrefix: string;
    private dataProvider: DataProvider;
    private queryClient;

    constructor(queryKeyPrefix: string, dataProvider: DataProvider) {
        this.queryKeyPrefix = queryKeyPrefix;
        this.dataProvider = dataProvider;
        this.queryClient = useQueryClient();
    }

    private getQueryKey(operation: string, params?: any): QueryKey {
        return [this.queryKeyPrefix, operation, params];
    }

    useGetList(params: {
        resource?: string;
        pagination: Pagination;
        search: string;
        sorters: Sorter[];
        filters: Filter[];
        meta?: Meta;
    }) {
        return useQuery({
            queryKey: this.getQueryKey('getList', params),
            queryFn: () => {
                console.log('fetchig');
                return this.dataProvider.getList(params)
            }
        });
    }

    useGetOne(params: { resource?: string; id: string; meta?: Meta }) {
        return useQuery({
            queryKey: this.getQueryKey('getOne', params),
            queryFn: () => { return this.dataProvider.getOne(params) }
        });
    }

    useCreate() {
        return useMutation({
            mutationFn: (params: { resource?: string; variables: any; meta?: Meta }) =>
                this.dataProvider.create(params),
            onSuccess: () => {
                this.queryClient.invalidateQueries({ queryKey: [this.queryKeyPrefix] });
            },

        });
    }

    useUpdate() {
        return useMutation({
            mutationFn: (params: { resource?: string; id: string; variables: any; meta?: Meta }) =>
                this.dataProvider.update(params),
            onSuccess: (_, variables) => {
                this.queryClient.invalidateQueries({
                    queryKey: [this.queryKeyPrefix, 'getOne', { id: variables.id }]
                });
                this.queryClient.invalidateQueries({
                    queryKey: [this.queryKeyPrefix, 'getList']
                });
            }
        });
    }

    useDeleteOne() {
        return useMutation({
            mutationFn: (params: { resource?: string; id: string; variables?: any; meta?: Meta }) =>
                this.dataProvider.deleteOne(params),
            onSuccess: () => {
                this.queryClient.invalidateQueries({ queryKey: [this.queryKeyPrefix] });
            }
        });
    }


    invalidateQueries() {
        return this.queryClient.invalidateQueries({ queryKey: [this.queryKeyPrefix] });
    }

    invalidateQuery(operation: string, params?: any) {
        return this.queryClient.invalidateQueries({
            queryKey: this.getQueryKey(operation, params)
        });
    }
}
