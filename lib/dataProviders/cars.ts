import { Car_Create, Car_Delete, Car_Get, Car_List, Car_Update } from '@/graphql/declarations/cars';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const CarsDataProvider: DataProvider = {
    name: 'CarsDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: Car_List,
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

        let retData = data.data.api_car_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((car) => car),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Car_Get,
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
            data: data.data.api_car_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Car_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Car_List', 'Car_Get']
        });

        return {
            id: data.data.api_car_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Car_Update,
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
            refetchQueries: ['Car_List', 'Car_Get']
        });

        return {
            id: data.data.api_car_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Car_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['Car_List', 'Car_Get']
        });

        return {
            id: data.data.api_car_delete.ids[0]
        };
    },
};
