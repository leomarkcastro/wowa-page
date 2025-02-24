import { Files_Create, Files_Delete, Files_Get, Files_List, Files_Update } from '@/graphql/declarations/files';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const FilesDataProvider: DataProvider = {
    name: 'FilesDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: Files_List,
            variables: {
                input: {
                    data: {
                        page: {
                            page: args.pagination.page,
                            pageSize: args.pagination.perPage,
                            search: args.search,
                            sort: args.sorters?.[0]?.field ? {
                                field: args.sorters?.[0]?.field,
                                order: args.sorters?.[0]?.order,
                            } : undefined,
                            filter: args.filters?.map((filter) => ({
                                field: filter.field,
                                operation: filter.operator,
                                value: filter.value,
                            })),
                        }
                    }
                },
            },
            fetchPolicy: 'no-cache'
        });

        let retData = data.data.api_file_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((file) => file),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Files_Get,
            variables: {
                input: {
                    data: {
                        id: args.id
                    }
                },
            },
            fetchPolicy: 'no-cache'
        });

        return {
            data: data.data.api_file_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Files_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Files_List', 'Files_Get']
        });

        return {
            id: data.data.api_file_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Files_Update,
            variables: {
                input: {
                    data: {
                        data: [{
                            id: args.id,
                            data: args.variables
                        }]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Files_List', 'Files_Get']
        });

        return {
            id: data.data.api_file_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Files_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Files_List', 'Files_Get']
        });

        return {
            id: data.data.api_file_delete.ids[0]
        };
    },
};
