import { DeepPartial } from "@apollo/client/utilities";

export type Pagination = {
  page: number;
  perPage: number;
};

export type Sorter = {
  field: string;
  order: 'asc' | 'desc';
};

export type Filter = {
  field: string;
  operator: string;
  value: any;
};

export type Meta = {
  [key: string]: any;
};

export interface DataProvider<
  TFetcher extends (...args: any[]) => Promise<any> = (
    ...args: any[]
  ) => Promise<any>,
  TDataMany = Awaited<ReturnType<TFetcher>>,
  TDataOne = TDataMany extends Array<infer T> ? T : TDataMany,
  TVariables = Parameters<TFetcher>[0],
> {
  name: string;
  // required methods
  getList: (params: {
    resource?: string;
    pagination: Pagination;
    search: string;
    sorters: Sorter[];
    filters: Filter[];
    meta?: Meta;
  }) => Promise<{
    data: TDataMany[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  }>;
  create: (params: {
    resource?: string;
    variables: TVariables;
    meta?: Meta;
  }) => Promise<{ id: string }>;
  update: (params: {
    resource?: string;
    id: string;
    variables: TVariables;
    meta?: Meta;
  }) => Promise<{ id: string }>;
  deleteOne: (params: {
    resource?: string;
    id: string;
    variables?: TVariables;
    meta?: Meta;
  }) => Promise<{ id: string }>;
  getOne: (params: {
    resource?: string;
    id: string;
    meta?: Meta;
  }) => Promise<{ data: TDataOne }>;
  // optional methods
  getMany?: (params: {
    resource?: string;
    ids: string[];
    meta?: Meta;
  }) => Promise<{ data: TDataMany[] }>;
  createMany?: (params: {
    resource?: string;
    variables: TVariables;
    meta?: Meta;
  }) => Promise<{ data: TDataMany[] }>;
  deleteMany?: (params: {
    resource?: string;
    ids: string[];
    variables?: TVariables;
    meta?: Meta;
  }) => Promise<{ data: TDataMany[] }>;
  updateMany?: (params: {
    resource?: string;
    ids: string[];
    variables: TVariables;
    meta?: Meta;
  }) => Promise<{ data: TDataMany[] }>;
  aggregate?: (params: {
    filters: Filter[];
    countBy: string[];
    operation: string;
    resource?: string;
    meta?: Meta;
  }) => Promise<DeepPartial<{
    breakdown: {
      countBy: string;
      count: number;
    }[];
  }>>;
  groupBy?: (params: {
    filters: Filter[];
    countBy: string[];
    groupBy: string[];
    operation: string;
    resource?: string;
    meta?: Meta;
  }) => Promise<DeepPartial<{
    breakdown: {
      uniqueIdentifier: string;
      counts: {
        countBy: string;
        count: number;
      }[]
    }[];
  }>>;
  custom?: (params: {
    url: string;
    method: string;
    filters: Filter[];
    sorters: Sorter[];
    payload: any;
    query: any;
    headers: any;
    meta: Meta;
  }) => Promise<{ data: TDataOne }>;
}