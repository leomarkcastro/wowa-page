import { Members_Aggregate, Members_Create, Members_Delete, Members_Get, Members_List, Members_Update, Members_GroupBy } from '@/graphql/declarations/members';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';
import { cleanUpObject } from '../services/cleanUpObject';

export const MembersDataProvider: DataProvider = {
    name: 'MembersDataProvider',
    getList: async (args) => {

        if (args.pagination.page > 1) {
        }

        const data = await apolloClient.query({
            query: Members_List,
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
        })

        let retData = data.data.api_member_list;

        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((user) => user),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },
    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Members_Get,
            variables: {
                input: {
                    data: {
                        id: args.id
                    }
                },
            },
            fetchPolicy: 'no-cache'
        })

        return {
            data: data.data.api_member_get.data
        };
    },
    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Members_Create,
            variables: {
                input: {
                    data: {
                        data: [
                            args.variables
                        ]
                    }
                }
            },
            fetchPolicy: 'no-cache'
        })

        return {
            id: data.data.api_member_create.ids[0]
        }
    },
    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Members_Update,
            variables: {
                input: {
                    data: {
                        data: [
                            {
                                id: args.id,
                                data: cleanUpObject(args.variables)
                            }
                        ]
                    }
                }
            },
            fetchPolicy: 'no-cache'
        })

        return {
            id: data.data.api_member_update.ids[0]
        }
    },
    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Members_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache'
        })

        return {
            id: data.data.api_member_delete.ids[0]
        }
    },
    aggregate: async (args) => {
        const data = await apolloClient.query({
            query: Members_Aggregate,
            variables: {
                input: {
                    data: {
                        countBy: args.countBy,
                        operation: args.operation,
                        page: {
                            filter: args.filters?.map((filter) => ({
                                field: filter.field,
                                operation: filter.operator,
                                value: filter.value,
                            })),
                        },
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });
        return data.data.api_member_aggregate;
    },
    groupBy: async (args) => {
        const data = await apolloClient.query({
            query: Members_GroupBy,
            variables: {
                input: {
                    data: {
                        countBy: args.countBy,
                        operation: args.operation,
                        groupBy: args.groupBy,
                        page: {
                            filter: args.filters?.map((filter) => ({
                                field: filter.field,
                                operation: filter.operator,
                                value: filter.value,
                            })),
                        },
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });
        return data.data.api_member_groupBy;
    }
};
