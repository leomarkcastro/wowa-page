import { Changelog_Create, Changelog_Delete, Changelog_Get, Changelog_List, Changelog_Update } from '@/graphql/declarations/changelogs';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const ChangelogsDataProvider: DataProvider = {
    name: 'ChangelogsDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: Changelog_List,
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

        let retData = data.data.api_changelog_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((changelog) => changelog),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Changelog_Get,
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
            data: data.data.api_changelog_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Changelog_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Changelog_List', 'Changelog_Get']
        });

        return {
            id: data.data.api_changelog_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Changelog_Update,
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
            refetchQueries: ['Changelog_List', 'Changelog_Get']
        });

        return {
            id: data.data.api_changelog_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Changelog_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Changelog_List', 'Changelog_Get']
        });

        return {
            id: data.data.api_changelog_delete.ids[0]
        };
    },
};
