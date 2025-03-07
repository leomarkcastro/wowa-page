/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Api_Auction_AggregateOutput = {
  __typename?: 'Api_Auction_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Auction_AggregateOutputBreakdown>>>;
};

export type Api_Auction_AggregateOutputBreakdown = {
  __typename?: 'Api_Auction_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Auction_CreateOutput = {
  __typename?: 'Api_Auction_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Auction_DeleteOutput = {
  __typename?: 'Api_Auction_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Auction_GetOutput = {
  __typename?: 'Api_Auction_getOutput';
  data?: Maybe<Api_Auction_GetOutputData>;
};

export type Api_Auction_GetOutputData = {
  __typename?: 'Api_Auction_getOutputData';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  auctionID?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  eventDateEnd?: Maybe<Scalars['String']['output']>;
  eventDateStart?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Auction_GetOutputDataPhotos>>>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type Api_Auction_GetOutputDataPhotos = {
  __typename?: 'Api_Auction_getOutputDataPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Auction_GroupByOutput = {
  __typename?: 'Api_Auction_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Auction_GroupByOutputBreakdown>>>;
};

export type Api_Auction_GroupByOutputBreakdown = {
  __typename?: 'Api_Auction_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Auction_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Auction_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Auction_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Auction_ListOutput = {
  __typename?: 'Api_Auction_listOutput';
  data?: Maybe<Array<Maybe<Api_Auction_ListOutputData>>>;
  page?: Maybe<Api_Auction_ListOutputPage>;
};

export type Api_Auction_ListOutputData = {
  __typename?: 'Api_Auction_listOutputData';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  auctionID?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  eventDateEnd?: Maybe<Scalars['String']['output']>;
  eventDateStart?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Auction_ListOutputDataPhotos>>>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type Api_Auction_ListOutputDataPhotos = {
  __typename?: 'Api_Auction_listOutputDataPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Auction_ListOutputPage = {
  __typename?: 'Api_Auction_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Auction_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Auction_ListOutputPageRange = {
  __typename?: 'Api_Auction_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Auction_UpdateOutput = {
  __typename?: 'Api_Auction_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Car_AggregateOutput = {
  __typename?: 'Api_Car_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Car_AggregateOutputBreakdown>>>;
};

export type Api_Car_AggregateOutputBreakdown = {
  __typename?: 'Api_Car_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_CreateOutput = {
  __typename?: 'Api_Car_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Car_DeleteOutput = {
  __typename?: 'Api_Car_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Car_GetOutput = {
  __typename?: 'Api_Car_getOutput';
  data?: Maybe<Api_Car_GetOutputData>;
};

export type Api_Car_GetOutputData = {
  __typename?: 'Api_Car_getOutputData';
  additionalNote?: Maybe<Scalars['String']['output']>;
  auction?: Maybe<Api_Car_GetOutputDataAuction>;
  auctionId?: Maybe<Scalars['String']['output']>;
  bodyStyle?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  contactApprovedBy?: Maybe<Api_Car_GetOutputDataContactApprovedBy>;
  contactApprovedById?: Maybe<Scalars['String']['output']>;
  contactConsignor?: Maybe<Api_Car_GetOutputDataContactConsignor>;
  contactConsignorId?: Maybe<Scalars['String']['output']>;
  contactSpecialist?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerNet?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  engineNumber?: Maybe<Scalars['String']['output']>;
  engineSize?: Maybe<Scalars['String']['output']>;
  entryFee?: Maybe<Scalars['Float']['output']>;
  entryFeeCollectedBy?: Maybe<Api_Car_GetOutputDataEntryFeeCollectedBy>;
  entryFeePaidAt?: Maybe<Scalars['String']['output']>;
  entryFeePaymentMethod?: Maybe<Scalars['String']['output']>;
  entryFeeStatus?: Maybe<Scalars['String']['output']>;
  exteriorColor?: Maybe<Scalars['String']['output']>;
  exteriorDetailNote?: Maybe<Scalars['String']['output']>;
  exteriorFlags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  factoryName?: Maybe<Scalars['String']['output']>;
  featuresAndOptionsNote?: Maybe<Scalars['String']['output']>;
  frameNote?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interiorColor?: Maybe<Scalars['String']['output']>;
  interiorCondition?: Maybe<Scalars['String']['output']>;
  interiorSurfaceMaterial?: Maybe<Scalars['String']['output']>;
  isClearTitle?: Maybe<Scalars['Boolean']['output']>;
  isConfirmedSeller?: Maybe<Scalars['Boolean']['output']>;
  isInDamageOrAccident?: Maybe<Scalars['Boolean']['output']>;
  isNumbersMatching?: Maybe<Scalars['Boolean']['output']>;
  isPaymentProcessed?: Maybe<Scalars['Boolean']['output']>;
  isRestored?: Maybe<Scalars['Boolean']['output']>;
  isSellWithoutReserve?: Maybe<Scalars['Boolean']['output']>;
  isTitleReceived?: Maybe<Scalars['Boolean']['output']>;
  isTransportationDelivered?: Maybe<Scalars['Boolean']['output']>;
  isVehicleCollected?: Maybe<Scalars['Boolean']['output']>;
  lotId?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  marketValueHigh?: Maybe<Scalars['Float']['output']>;
  marketValueLow?: Maybe<Scalars['Float']['output']>;
  marketingPhotos?: Maybe<Array<Maybe<Api_Car_GetOutputDataMarketingPhotos>>>;
  marketingPhotosIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mechanicalSuspensionNote?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Scalars['Float']['output']>;
  mileageType?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  notablePoints?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  overallNote?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Car_GetOutputDataPhotos>>>;
  reservePrice?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tires?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  wheels?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type Api_Car_GetOutputDataAuction = {
  __typename?: 'Api_Car_getOutputDataAuction';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  auctionID?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  eventDateEnd?: Maybe<Scalars['String']['output']>;
  eventDateStart?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Car_GetOutputDataAuctionPhotos>>>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_GetOutputDataAuctionPhotos = {
  __typename?: 'Api_Car_getOutputDataAuctionPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_GetOutputDataContactApprovedBy = {
  __typename?: 'Api_Car_getOutputDataContactApprovedBy';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_GetOutputDataContactConsignor = {
  __typename?: 'Api_Car_getOutputDataContactConsignor';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_GetOutputDataEntryFeeCollectedBy = {
  __typename?: 'Api_Car_getOutputDataEntryFeeCollectedBy';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_GetOutputDataMarketingPhotos = {
  __typename?: 'Api_Car_getOutputDataMarketingPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_GetOutputDataPhotos = {
  __typename?: 'Api_Car_getOutputDataPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_GroupByOutput = {
  __typename?: 'Api_Car_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Car_GroupByOutputBreakdown>>>;
};

export type Api_Car_GroupByOutputBreakdown = {
  __typename?: 'Api_Car_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Car_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Car_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_ListOutput = {
  __typename?: 'Api_Car_listOutput';
  data?: Maybe<Array<Maybe<Api_Car_ListOutputData>>>;
  page?: Maybe<Api_Car_ListOutputPage>;
};

export type Api_Car_ListOutputData = {
  __typename?: 'Api_Car_listOutputData';
  additionalNote?: Maybe<Scalars['String']['output']>;
  auction?: Maybe<Api_Car_ListOutputDataAuction>;
  auctionId?: Maybe<Scalars['String']['output']>;
  bodyStyle?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  contactApprovedBy?: Maybe<Api_Car_ListOutputDataContactApprovedBy>;
  contactApprovedById?: Maybe<Scalars['String']['output']>;
  contactConsignor?: Maybe<Api_Car_ListOutputDataContactConsignor>;
  contactConsignorId?: Maybe<Scalars['String']['output']>;
  contactSpecialist?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerNet?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  engineNumber?: Maybe<Scalars['String']['output']>;
  engineSize?: Maybe<Scalars['String']['output']>;
  entryFee?: Maybe<Scalars['Float']['output']>;
  entryFeeCollectedBy?: Maybe<Api_Car_ListOutputDataEntryFeeCollectedBy>;
  entryFeePaidAt?: Maybe<Scalars['String']['output']>;
  entryFeePaymentMethod?: Maybe<Scalars['String']['output']>;
  entryFeeStatus?: Maybe<Scalars['String']['output']>;
  exteriorColor?: Maybe<Scalars['String']['output']>;
  exteriorDetailNote?: Maybe<Scalars['String']['output']>;
  exteriorFlags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  factoryName?: Maybe<Scalars['String']['output']>;
  featuresAndOptionsNote?: Maybe<Scalars['String']['output']>;
  frameNote?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  interiorColor?: Maybe<Scalars['String']['output']>;
  interiorCondition?: Maybe<Scalars['String']['output']>;
  interiorSurfaceMaterial?: Maybe<Scalars['String']['output']>;
  isClearTitle?: Maybe<Scalars['Boolean']['output']>;
  isConfirmedSeller?: Maybe<Scalars['Boolean']['output']>;
  isInDamageOrAccident?: Maybe<Scalars['Boolean']['output']>;
  isNumbersMatching?: Maybe<Scalars['Boolean']['output']>;
  isPaymentProcessed?: Maybe<Scalars['Boolean']['output']>;
  isRestored?: Maybe<Scalars['Boolean']['output']>;
  isSellWithoutReserve?: Maybe<Scalars['Boolean']['output']>;
  isTitleReceived?: Maybe<Scalars['Boolean']['output']>;
  isTransportationDelivered?: Maybe<Scalars['Boolean']['output']>;
  isVehicleCollected?: Maybe<Scalars['Boolean']['output']>;
  lotId?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  marketValueHigh?: Maybe<Scalars['Float']['output']>;
  marketValueLow?: Maybe<Scalars['Float']['output']>;
  marketingPhotos?: Maybe<Array<Maybe<Api_Car_ListOutputDataMarketingPhotos>>>;
  marketingPhotosIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mechanicalSuspensionNote?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Scalars['Float']['output']>;
  mileageType?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  notablePoints?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  overallNote?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Car_ListOutputDataPhotos>>>;
  reservePrice?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tires?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  wheels?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type Api_Car_ListOutputDataAuction = {
  __typename?: 'Api_Car_listOutputDataAuction';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  auctionID?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['String']['output']>;
  eventDateEnd?: Maybe<Scalars['String']['output']>;
  eventDateStart?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photoIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  photos?: Maybe<Array<Maybe<Api_Car_ListOutputDataAuctionPhotos>>>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_ListOutputDataAuctionPhotos = {
  __typename?: 'Api_Car_listOutputDataAuctionPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_ListOutputDataContactApprovedBy = {
  __typename?: 'Api_Car_listOutputDataContactApprovedBy';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_ListOutputDataContactConsignor = {
  __typename?: 'Api_Car_listOutputDataContactConsignor';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_ListOutputDataEntryFeeCollectedBy = {
  __typename?: 'Api_Car_listOutputDataEntryFeeCollectedBy';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Car_ListOutputDataMarketingPhotos = {
  __typename?: 'Api_Car_listOutputDataMarketingPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_ListOutputDataPhotos = {
  __typename?: 'Api_Car_listOutputDataPhotos';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_Car_ListOutputPage = {
  __typename?: 'Api_Car_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Car_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Car_ListOutputPageRange = {
  __typename?: 'Api_Car_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Car_UpdateOutput = {
  __typename?: 'Api_Car_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Changelog_AggregateOutput = {
  __typename?: 'Api_Changelog_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Changelog_AggregateOutputBreakdown>>>;
};

export type Api_Changelog_AggregateOutputBreakdown = {
  __typename?: 'Api_Changelog_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Changelog_CreateOutput = {
  __typename?: 'Api_Changelog_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Changelog_DeleteOutput = {
  __typename?: 'Api_Changelog_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Changelog_GetOutput = {
  __typename?: 'Api_Changelog_getOutput';
  data?: Maybe<Api_Changelog_GetOutputData>;
};

export type Api_Changelog_GetOutputData = {
  __typename?: 'Api_Changelog_getOutputData';
  actor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  dataID?: Maybe<Scalars['String']['output']>;
  dataType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
};

export type Api_Changelog_GroupByOutput = {
  __typename?: 'Api_Changelog_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Changelog_GroupByOutputBreakdown>>>;
};

export type Api_Changelog_GroupByOutputBreakdown = {
  __typename?: 'Api_Changelog_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Changelog_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Changelog_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Changelog_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Changelog_ListOutput = {
  __typename?: 'Api_Changelog_listOutput';
  data?: Maybe<Array<Maybe<Api_Changelog_ListOutputData>>>;
  page?: Maybe<Api_Changelog_ListOutputPage>;
};

export type Api_Changelog_ListOutputData = {
  __typename?: 'Api_Changelog_listOutputData';
  actor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  dataID?: Maybe<Scalars['String']['output']>;
  dataType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
};

export type Api_Changelog_ListOutputPage = {
  __typename?: 'Api_Changelog_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Changelog_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Changelog_ListOutputPageRange = {
  __typename?: 'Api_Changelog_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Changelog_UpdateOutput = {
  __typename?: 'Api_Changelog_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Comment_AggregateOutput = {
  __typename?: 'Api_Comment_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Comment_AggregateOutputBreakdown>>>;
};

export type Api_Comment_AggregateOutputBreakdown = {
  __typename?: 'Api_Comment_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Comment_CreateOutput = {
  __typename?: 'Api_Comment_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Comment_DeleteOutput = {
  __typename?: 'Api_Comment_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Comment_GetOutput = {
  __typename?: 'Api_Comment_getOutput';
  data?: Maybe<Api_Comment_GetOutputData>;
};

export type Api_Comment_GetOutputData = {
  __typename?: 'Api_Comment_getOutputData';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  fileIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  files?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  locationID?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
};

export type Api_Comment_GroupByOutput = {
  __typename?: 'Api_Comment_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Comment_GroupByOutputBreakdown>>>;
};

export type Api_Comment_GroupByOutputBreakdown = {
  __typename?: 'Api_Comment_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Comment_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Comment_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Comment_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Comment_ListOutput = {
  __typename?: 'Api_Comment_listOutput';
  data?: Maybe<Array<Maybe<Api_Comment_ListOutputData>>>;
  page?: Maybe<Api_Comment_ListOutputPage>;
};

export type Api_Comment_ListOutputData = {
  __typename?: 'Api_Comment_listOutputData';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  fileIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  files?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
  locationID?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
};

export type Api_Comment_ListOutputPage = {
  __typename?: 'Api_Comment_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Comment_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Comment_ListOutputPageRange = {
  __typename?: 'Api_Comment_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Comment_UpdateOutput = {
  __typename?: 'Api_Comment_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_CreateOutput = {
  __typename?: 'Api_File_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_DeleteOutput = {
  __typename?: 'Api_File_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_File_GetOutput = {
  __typename?: 'Api_File_getOutput';
  data?: Maybe<Api_File_GetOutputData>;
};

export type Api_File_GetOutputData = {
  __typename?: 'Api_File_getOutputData';
  assignedTo: Scalars['String']['output'];
  category: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  metadata: Scalars['String']['output'];
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  note: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Api_File_ListOutput = {
  __typename?: 'Api_File_listOutput';
  data?: Maybe<Array<Maybe<Api_File_ListOutputData>>>;
  page?: Maybe<Api_File_ListOutputPage>;
};

export type Api_File_ListOutputData = {
  __typename?: 'Api_File_listOutputData';
  assignedTo?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  mime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Api_File_ListOutputPage = {
  __typename?: 'Api_File_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_File_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_File_ListOutputPageRange = {
  __typename?: 'Api_File_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_File_UpdateOutput = {
  __typename?: 'Api_File_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_AggregateOutput = {
  __typename?: 'Api_Member_aggregateOutput';
  breakdown?: Maybe<Array<Maybe<Api_Member_AggregateOutputBreakdown>>>;
};

export type Api_Member_AggregateOutputBreakdown = {
  __typename?: 'Api_Member_aggregateOutputBreakdown';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_CreateOutput = {
  __typename?: 'Api_Member_createOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_DeleteOutput = {
  __typename?: 'Api_Member_deleteOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Member_GetOutput = {
  __typename?: 'Api_Member_getOutput';
  data?: Maybe<Api_Member_GetOutputData>;
};

export type Api_Member_GetOutputData = {
  __typename?: 'Api_Member_getOutputData';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_GroupByOutput = {
  __typename?: 'Api_Member_groupByOutput';
  breakdown?: Maybe<Array<Maybe<Api_Member_GroupByOutputBreakdown>>>;
};

export type Api_Member_GroupByOutputBreakdown = {
  __typename?: 'Api_Member_groupByOutputBreakdown';
  counts: Array<Maybe<Api_Member_GroupByOutputBreakdownCounts>>;
  uniqueIdentifier?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_GroupByOutputBreakdownCounts = {
  __typename?: 'Api_Member_groupByOutputBreakdownCounts';
  count?: Maybe<Scalars['Float']['output']>;
  countBy?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_ListOutput = {
  __typename?: 'Api_Member_listOutput';
  data?: Maybe<Array<Maybe<Api_Member_ListOutputData>>>;
  page?: Maybe<Api_Member_ListOutputPage>;
};

export type Api_Member_ListOutputData = {
  __typename?: 'Api_Member_listOutputData';
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Api_Member_ListOutputPage = {
  __typename?: 'Api_Member_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Member_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Member_ListOutputPageRange = {
  __typename?: 'Api_Member_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Member_UpdateOutput = {
  __typename?: 'Api_Member_updateOutput';
  count?: Maybe<Scalars['Float']['output']>;
  ids?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Api_Notification_ListOutput = {
  __typename?: 'Api_Notification_listOutput';
  data?: Maybe<Array<Maybe<Api_Notification_ListOutputData>>>;
  page?: Maybe<Api_Notification_ListOutputPage>;
};

export type Api_Notification_ListOutputData = {
  __typename?: 'Api_Notification_listOutputData';
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isRead: Scalars['String']['output'];
  message: Scalars['String']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Api_Notification_ListOutputPage = {
  __typename?: 'Api_Notification_listOutputPage';
  page?: Maybe<Scalars['Float']['output']>;
  pageSize?: Maybe<Scalars['Float']['output']>;
  range?: Maybe<Api_Notification_ListOutputPageRange>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type Api_Notification_ListOutputPageRange = {
  __typename?: 'Api_Notification_listOutputPageRange';
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type Api_Auction_AggregateInput = {
  data: Api_Auction_AggregateInputData;
};

export type Api_Auction_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Auction_AggregateInputDataPage>;
};

export type Api_Auction_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Auction_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Auction_AggregateInputDataPageSort>;
};

export type Api_Auction_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Auction_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Auction_CreateInput = {
  data: Api_Auction_CreateInputData;
};

export type Api_Auction_CreateInputData = {
  data: Array<InputMaybe<Api_Auction_CreateInputDataData>>;
};

export type Api_Auction_CreateInputDataData = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  auctionID?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  eventDateEnd?: InputMaybe<Scalars['String']['input']>;
  eventDateStart?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photoIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Auction_DeleteInput = {
  data: Api_Auction_DeleteInputData;
};

export type Api_Auction_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Auction_GetInput = {
  data: Api_Auction_GetInputData;
};

export type Api_Auction_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Auction_GroupByInput = {
  data: Api_Auction_GroupByInputData;
};

export type Api_Auction_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Auction_GroupByInputDataPage>;
};

export type Api_Auction_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Auction_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Auction_GroupByInputDataPageSort>;
};

export type Api_Auction_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Auction_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Auction_ListInput = {
  data: Api_Auction_ListInputData;
};

export type Api_Auction_ListInputData = {
  page?: InputMaybe<Api_Auction_ListInputDataPage>;
};

export type Api_Auction_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Auction_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Auction_ListInputDataPageSort>;
};

export type Api_Auction_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Auction_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Auction_UpdateInput = {
  data: Api_Auction_UpdateInputData;
};

export type Api_Auction_UpdateInputData = {
  data: Array<InputMaybe<Api_Auction_UpdateInputDataData>>;
};

export type Api_Auction_UpdateInputDataData = {
  data: Api_Auction_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Auction_UpdateInputDataDataData = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  auctionID?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  eventDateEnd?: InputMaybe<Scalars['String']['input']>;
  eventDateStart?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photoIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updateID: Scalars['String']['input'];
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Car_AggregateInput = {
  data: Api_Car_AggregateInputData;
};

export type Api_Car_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Car_AggregateInputDataPage>;
};

export type Api_Car_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Car_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Car_AggregateInputDataPageSort>;
};

export type Api_Car_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Car_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Car_CreateInput = {
  data: Api_Car_CreateInputData;
};

export type Api_Car_CreateInputData = {
  data: Array<InputMaybe<Api_Car_CreateInputDataData>>;
};

export type Api_Car_CreateInputDataData = {
  additionalNote?: InputMaybe<Scalars['String']['input']>;
  auctionId?: InputMaybe<Scalars['String']['input']>;
  bodyStyle?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  contactApprovedById?: InputMaybe<Scalars['String']['input']>;
  contactConsignorId?: InputMaybe<Scalars['String']['input']>;
  contactSpecialist?: InputMaybe<Scalars['String']['input']>;
  customerNet?: InputMaybe<Scalars['Float']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  engineNumber?: InputMaybe<Scalars['String']['input']>;
  engineSize?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  entryFeeCollectedBy?: InputMaybe<Api_Car_CreateInputDataDataEntryFeeCollectedBy>;
  entryFeePaidAt?: InputMaybe<Scalars['String']['input']>;
  entryFeePaymentMethod?: InputMaybe<Scalars['String']['input']>;
  entryFeeStatus?: InputMaybe<Scalars['String']['input']>;
  exteriorColor?: InputMaybe<Scalars['String']['input']>;
  exteriorDetailNote?: InputMaybe<Scalars['String']['input']>;
  exteriorFlags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factoryName?: InputMaybe<Scalars['String']['input']>;
  featuresAndOptionsNote?: InputMaybe<Scalars['String']['input']>;
  frameNote?: InputMaybe<Scalars['String']['input']>;
  interiorColor?: InputMaybe<Scalars['String']['input']>;
  interiorCondition?: InputMaybe<Scalars['String']['input']>;
  interiorSurfaceMaterial?: InputMaybe<Scalars['String']['input']>;
  isClearTitle?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirmedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  isInDamageOrAccident?: InputMaybe<Scalars['Boolean']['input']>;
  isNumbersMatching?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  isRestored?: InputMaybe<Scalars['Boolean']['input']>;
  isSellWithoutReserve?: InputMaybe<Scalars['Boolean']['input']>;
  isTitleReceived?: InputMaybe<Scalars['Boolean']['input']>;
  isTransportationDelivered?: InputMaybe<Scalars['Boolean']['input']>;
  isVehicleCollected?: InputMaybe<Scalars['Boolean']['input']>;
  lotId?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  marketValueHigh?: InputMaybe<Scalars['Float']['input']>;
  marketValueLow?: InputMaybe<Scalars['Float']['input']>;
  marketingPhotosIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mechanicalSuspensionNote?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Float']['input']>;
  mileageType?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  notablePoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  overallNote?: InputMaybe<Scalars['String']['input']>;
  photoIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reservePrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tires?: InputMaybe<Scalars['String']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_Car_CreateInputDataDataEntryFeeCollectedBy = {
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Car_DeleteInput = {
  data: Api_Car_DeleteInputData;
};

export type Api_Car_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Api_Car_GetInput = {
  data: Api_Car_GetInputData;
};

export type Api_Car_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Car_GroupByInput = {
  data: Api_Car_GroupByInputData;
};

export type Api_Car_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Car_GroupByInputDataPage>;
};

export type Api_Car_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Car_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Car_GroupByInputDataPageSort>;
};

export type Api_Car_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Car_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Car_ListInput = {
  data: Api_Car_ListInputData;
};

export type Api_Car_ListInputData = {
  page?: InputMaybe<Api_Car_ListInputDataPage>;
};

export type Api_Car_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Car_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Car_ListInputDataPageSort>;
};

export type Api_Car_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Car_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Car_UpdateInput = {
  data: Api_Car_UpdateInputData;
};

export type Api_Car_UpdateInputData = {
  data: Array<InputMaybe<Api_Car_UpdateInputDataData>>;
};

export type Api_Car_UpdateInputDataData = {
  data: Api_Car_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Car_UpdateInputDataDataData = {
  additionalNote?: InputMaybe<Scalars['String']['input']>;
  auctionId?: InputMaybe<Scalars['String']['input']>;
  bodyStyle?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  contactApprovedById?: InputMaybe<Scalars['String']['input']>;
  contactConsignorId?: InputMaybe<Scalars['String']['input']>;
  contactSpecialist?: InputMaybe<Scalars['String']['input']>;
  customerNet?: InputMaybe<Scalars['Float']['input']>;
  deletedAt?: InputMaybe<Scalars['String']['input']>;
  engineNumber?: InputMaybe<Scalars['String']['input']>;
  engineSize?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  entryFeeCollectedBy?: InputMaybe<Api_Car_UpdateInputDataDataDataEntryFeeCollectedBy>;
  entryFeePaidAt?: InputMaybe<Scalars['String']['input']>;
  entryFeePaymentMethod?: InputMaybe<Scalars['String']['input']>;
  entryFeeStatus?: InputMaybe<Scalars['String']['input']>;
  exteriorColor?: InputMaybe<Scalars['String']['input']>;
  exteriorDetailNote?: InputMaybe<Scalars['String']['input']>;
  exteriorFlags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  factoryName?: InputMaybe<Scalars['String']['input']>;
  featuresAndOptionsNote?: InputMaybe<Scalars['String']['input']>;
  frameNote?: InputMaybe<Scalars['String']['input']>;
  interiorColor?: InputMaybe<Scalars['String']['input']>;
  interiorCondition?: InputMaybe<Scalars['String']['input']>;
  interiorSurfaceMaterial?: InputMaybe<Scalars['String']['input']>;
  isClearTitle?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirmedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  isInDamageOrAccident?: InputMaybe<Scalars['Boolean']['input']>;
  isNumbersMatching?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  isRestored?: InputMaybe<Scalars['Boolean']['input']>;
  isSellWithoutReserve?: InputMaybe<Scalars['Boolean']['input']>;
  isTitleReceived?: InputMaybe<Scalars['Boolean']['input']>;
  isTransportationDelivered?: InputMaybe<Scalars['Boolean']['input']>;
  isVehicleCollected?: InputMaybe<Scalars['Boolean']['input']>;
  lotId?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  marketValueHigh?: InputMaybe<Scalars['Float']['input']>;
  marketValueLow?: InputMaybe<Scalars['Float']['input']>;
  marketingPhotosIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mechanicalSuspensionNote?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Float']['input']>;
  mileageType?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  notablePoints?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  overallNote?: InputMaybe<Scalars['String']['input']>;
  photoIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reservePrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tires?: InputMaybe<Scalars['String']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
  updateID: Scalars['String']['input'];
  vin?: InputMaybe<Scalars['String']['input']>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Float']['input']>;
};

export type Api_Car_UpdateInputDataDataDataEntryFeeCollectedBy = {
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Changelog_AggregateInput = {
  data: Api_Changelog_AggregateInputData;
};

export type Api_Changelog_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Changelog_AggregateInputDataPage>;
};

export type Api_Changelog_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Changelog_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Changelog_AggregateInputDataPageSort>;
};

export type Api_Changelog_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Changelog_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Changelog_CreateInput = {
  data: Api_Changelog_CreateInputData;
};

export type Api_Changelog_CreateInputData = {
  data: Array<InputMaybe<Api_Changelog_CreateInputDataData>>;
};

export type Api_Changelog_CreateInputDataData = {
  actor?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataID?: InputMaybe<Scalars['String']['input']>;
  dataType?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Changelog_DeleteInput = {
  data: Api_Changelog_DeleteInputData;
};

export type Api_Changelog_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Api_Changelog_GetInput = {
  data: Api_Changelog_GetInputData;
};

export type Api_Changelog_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Changelog_GroupByInput = {
  data: Api_Changelog_GroupByInputData;
};

export type Api_Changelog_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Changelog_GroupByInputDataPage>;
};

export type Api_Changelog_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Changelog_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Changelog_GroupByInputDataPageSort>;
};

export type Api_Changelog_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Changelog_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Changelog_ListInput = {
  data: Api_Changelog_ListInputData;
};

export type Api_Changelog_ListInputData = {
  page?: InputMaybe<Api_Changelog_ListInputDataPage>;
};

export type Api_Changelog_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Changelog_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Changelog_ListInputDataPageSort>;
};

export type Api_Changelog_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Changelog_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Changelog_UpdateInput = {
  data: Api_Changelog_UpdateInputData;
};

export type Api_Changelog_UpdateInputData = {
  data: Array<InputMaybe<Api_Changelog_UpdateInputDataData>>;
};

export type Api_Changelog_UpdateInputDataData = {
  data: Api_Changelog_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Changelog_UpdateInputDataDataData = {
  actor?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataID?: InputMaybe<Scalars['String']['input']>;
  dataType?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Comment_AggregateInput = {
  data: Api_Comment_AggregateInputData;
};

export type Api_Comment_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Comment_AggregateInputDataPage>;
};

export type Api_Comment_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Comment_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Comment_AggregateInputDataPageSort>;
};

export type Api_Comment_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Comment_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Comment_CreateInput = {
  data: Api_Comment_CreateInputData;
};

export type Api_Comment_CreateInputData = {
  data: Array<InputMaybe<Api_Comment_CreateInputDataData>>;
};

export type Api_Comment_CreateInputDataData = {
  body?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Comment_DeleteInput = {
  data: Api_Comment_DeleteInputData;
};

export type Api_Comment_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
  forceDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Api_Comment_GetInput = {
  data: Api_Comment_GetInputData;
};

export type Api_Comment_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Comment_GroupByInput = {
  data: Api_Comment_GroupByInputData;
};

export type Api_Comment_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Comment_GroupByInputDataPage>;
};

export type Api_Comment_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Comment_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Comment_GroupByInputDataPageSort>;
};

export type Api_Comment_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Comment_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Comment_ListInput = {
  data: Api_Comment_ListInputData;
};

export type Api_Comment_ListInputData = {
  page?: InputMaybe<Api_Comment_ListInputDataPage>;
};

export type Api_Comment_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Comment_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Comment_ListInputDataPageSort>;
};

export type Api_Comment_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Comment_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Comment_UpdateInput = {
  data: Api_Comment_UpdateInputData;
};

export type Api_Comment_UpdateInputData = {
  data: Array<InputMaybe<Api_Comment_UpdateInputDataData>>;
};

export type Api_Comment_UpdateInputDataData = {
  data: Api_Comment_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Comment_UpdateInputDataDataData = {
  body?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type Api_File_CreateInput = {
  data: Api_File_CreateInputData;
};

export type Api_File_CreateInputData = {
  data: Array<InputMaybe<Api_File_CreateInputDataData>>;
};

export type Api_File_CreateInputDataData = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Api_File_DeleteInput = {
  data: Api_File_DeleteInputData;
};

export type Api_File_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_File_GetInput = {
  data: Api_File_GetInputData;
};

export type Api_File_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_File_ListInput = {
  data: Api_File_ListInputData;
};

export type Api_File_ListInputData = {
  page?: InputMaybe<Api_File_ListInputDataPage>;
};

export type Api_File_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_File_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_File_ListInputDataPageSort>;
};

export type Api_File_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_File_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_File_UpdateInput = {
  data: Api_File_UpdateInputData;
};

export type Api_File_UpdateInputData = {
  data: Array<InputMaybe<Api_File_UpdateInputDataData>>;
};

export type Api_File_UpdateInputDataData = {
  data: Api_File_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_File_UpdateInputDataDataData = {
  category?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Member_AggregateInput = {
  data: Api_Member_AggregateInputData;
};

export type Api_Member_AggregateInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Member_AggregateInputDataPage>;
};

export type Api_Member_AggregateInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_AggregateInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_AggregateInputDataPageSort>;
};

export type Api_Member_AggregateInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_AggregateInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_CreateInput = {
  data: Api_Member_CreateInputData;
};

export type Api_Member_CreateInputData = {
  data: Array<InputMaybe<Api_Member_CreateInputDataData>>;
};

export type Api_Member_CreateInputDataData = {
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Member_DeleteInput = {
  data: Api_Member_DeleteInputData;
};

export type Api_Member_DeleteInputData = {
  data: Array<InputMaybe<Scalars['String']['input']>>;
};

export type Api_Member_GetInput = {
  data: Api_Member_GetInputData;
};

export type Api_Member_GetInputData = {
  id: Scalars['String']['input'];
};

export type Api_Member_GroupByInput = {
  data: Api_Member_GroupByInputData;
};

export type Api_Member_GroupByInputData = {
  countBy: Array<InputMaybe<Scalars['String']['input']>>;
  groupBy: Array<InputMaybe<Scalars['String']['input']>>;
  operation: Scalars['String']['input'];
  page?: InputMaybe<Api_Member_GroupByInputDataPage>;
};

export type Api_Member_GroupByInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_GroupByInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_GroupByInputDataPageSort>;
};

export type Api_Member_GroupByInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_GroupByInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_ListInput = {
  data: Api_Member_ListInputData;
};

export type Api_Member_ListInputData = {
  page?: InputMaybe<Api_Member_ListInputDataPage>;
};

export type Api_Member_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Member_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Member_ListInputDataPageSort>;
};

export type Api_Member_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Member_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Api_Member_UpdateInput = {
  data: Api_Member_UpdateInputData;
};

export type Api_Member_UpdateInputData = {
  data: Array<InputMaybe<Api_Member_UpdateInputDataData>>;
};

export type Api_Member_UpdateInputDataData = {
  data: Api_Member_UpdateInputDataDataData;
  id: Scalars['String']['input'];
};

export type Api_Member_UpdateInputDataDataData = {
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
};

export type Api_Notification_ListInput = {
  data: Api_Notification_ListInputData;
};

export type Api_Notification_ListInputData = {
  page?: InputMaybe<Api_Notification_ListInputDataPage>;
  userId: Scalars['String']['input'];
};

export type Api_Notification_ListInputDataPage = {
  distinct?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filter?: InputMaybe<Array<InputMaybe<Api_Notification_ListInputDataPageFilter>>>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Api_Notification_ListInputDataPageSort>;
};

export type Api_Notification_ListInputDataPageFilter = {
  field: Scalars['String']['input'];
  operation: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Api_Notification_ListInputDataPageSort = {
  field: Scalars['String']['input'];
  order: Scalars['String']['input'];
};

export type Auction = {
  __typename?: 'Auction';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  auctionID?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  cars?: Maybe<Array<Car>>;
  carsCount?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  eventDateEnd?: Maybe<Scalars['DateTime']['output']>;
  eventDateStart?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lastUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Array<File>>;
  photosCount?: Maybe<Scalars['Int']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  updateID?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};


export type AuctionCarsArgs = {
  cursor?: InputMaybe<CarWhereUniqueInput>;
  orderBy?: Array<CarOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CarWhereInput;
};


export type AuctionCarsCountArgs = {
  where?: CarWhereInput;
};


export type AuctionPhotosArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type AuctionPhotosCountArgs = {
  where?: FileWhereInput;
};

export type AuctionCreateInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  auctionID?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  cars?: InputMaybe<CarRelateToManyForCreateInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateStart?: InputMaybe<Scalars['DateTime']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<FileRelateToManyForCreateInput>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  updateID?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type AuctionOrderByInput = {
  addressLine1?: InputMaybe<OrderDirection>;
  addressLine2?: InputMaybe<OrderDirection>;
  auctionID?: InputMaybe<OrderDirection>;
  body?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  country?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  deletedAt?: InputMaybe<OrderDirection>;
  eventDateEnd?: InputMaybe<OrderDirection>;
  eventDateStart?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastUpdatedAt?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  summary?: InputMaybe<OrderDirection>;
  updateID?: InputMaybe<OrderDirection>;
  zip?: InputMaybe<OrderDirection>;
};

export type AuctionRelateToOneForCreateInput = {
  connect?: InputMaybe<AuctionWhereUniqueInput>;
  create?: InputMaybe<AuctionCreateInput>;
};

export type AuctionRelateToOneForUpdateInput = {
  connect?: InputMaybe<AuctionWhereUniqueInput>;
  create?: InputMaybe<AuctionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuctionUpdateArgs = {
  data: AuctionUpdateInput;
  where: AuctionWhereUniqueInput;
};

export type AuctionUpdateInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  auctionID?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  cars?: InputMaybe<CarRelateToManyForUpdateInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  eventDateStart?: InputMaybe<Scalars['DateTime']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<FileRelateToManyForUpdateInput>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  updateID?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type AuctionWhereInput = {
  AND?: InputMaybe<Array<AuctionWhereInput>>;
  NOT?: InputMaybe<Array<AuctionWhereInput>>;
  OR?: InputMaybe<Array<AuctionWhereInput>>;
  addressLine1?: InputMaybe<StringFilter>;
  addressLine2?: InputMaybe<StringFilter>;
  auctionID?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  cars?: InputMaybe<CarManyRelationFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  eventDateEnd?: InputMaybe<DateTimeNullableFilter>;
  eventDateStart?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  lastUpdatedAt?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  photos?: InputMaybe<FileManyRelationFilter>;
  state?: InputMaybe<StringFilter>;
  summary?: InputMaybe<StringFilter>;
  updateID?: InputMaybe<StringFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type AuctionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Car = {
  __typename?: 'Car';
  additionalNote?: Maybe<Scalars['String']['output']>;
  auction?: Maybe<Auction>;
  bodyStyle?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  commissionRate?: Maybe<Scalars['Float']['output']>;
  contactApprovedBy?: Maybe<User>;
  contactConsignor?: Maybe<User>;
  contactSpecialist?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customerNet?: Maybe<Scalars['Float']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  engineNumber?: Maybe<Scalars['String']['output']>;
  engineSize?: Maybe<Scalars['String']['output']>;
  entryFee?: Maybe<Scalars['Float']['output']>;
  entryFeeCollectedBy?: Maybe<User>;
  entryFeePaidAt?: Maybe<Scalars['DateTime']['output']>;
  entryFeePaymentMethod?: Maybe<Scalars['String']['output']>;
  entryFeeStatus?: Maybe<Scalars['String']['output']>;
  exteriorColor?: Maybe<Scalars['String']['output']>;
  exteriorDetailNote?: Maybe<Scalars['String']['output']>;
  exteriorFlags?: Maybe<Scalars['JSON']['output']>;
  factoryName?: Maybe<Scalars['String']['output']>;
  featuresAndOptionsNote?: Maybe<Scalars['String']['output']>;
  frameNote?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interiorColor?: Maybe<Scalars['String']['output']>;
  interiorCondition?: Maybe<Scalars['String']['output']>;
  interiorSurfaceMaterial?: Maybe<Scalars['String']['output']>;
  isClearTitle?: Maybe<Scalars['Boolean']['output']>;
  isConfirmedSeller?: Maybe<Scalars['Boolean']['output']>;
  isInDamageOrAccident?: Maybe<Scalars['Boolean']['output']>;
  isNumbersMatching?: Maybe<Scalars['Boolean']['output']>;
  isPaymentProcessed?: Maybe<Scalars['Boolean']['output']>;
  isRestored?: Maybe<Scalars['Boolean']['output']>;
  isSellWithoutReserve?: Maybe<Scalars['Boolean']['output']>;
  isTitleReceived?: Maybe<Scalars['Boolean']['output']>;
  isTransportationDelivered?: Maybe<Scalars['Boolean']['output']>;
  isVehicleCollected?: Maybe<Scalars['Boolean']['output']>;
  lastUpdatedAt?: Maybe<Scalars['DateTime']['output']>;
  lotId?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  marketValueHigh?: Maybe<Scalars['Float']['output']>;
  marketValueLow?: Maybe<Scalars['Float']['output']>;
  marketingPhotos?: Maybe<Array<File>>;
  marketingPhotosCount?: Maybe<Scalars['Int']['output']>;
  mechanicalSuspensionNote?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Scalars['Float']['output']>;
  mileageType?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  notablePoints?: Maybe<Scalars['JSON']['output']>;
  overallNote?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Array<File>>;
  photosCount?: Maybe<Scalars['Int']['output']>;
  reservePrice?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tires?: Maybe<Scalars['String']['output']>;
  transmission?: Maybe<Scalars['String']['output']>;
  updateID?: Maybe<Scalars['String']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  wheels?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};


export type CarMarketingPhotosArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type CarMarketingPhotosCountArgs = {
  where?: FileWhereInput;
};


export type CarPhotosArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type CarPhotosCountArgs = {
  where?: FileWhereInput;
};

export type CarCreateInput = {
  additionalNote?: InputMaybe<Scalars['String']['input']>;
  auction?: InputMaybe<AuctionRelateToOneForCreateInput>;
  bodyStyle?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  contactApprovedBy?: InputMaybe<UserRelateToOneForCreateInput>;
  contactConsignor?: InputMaybe<UserRelateToOneForCreateInput>;
  contactSpecialist?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerNet?: InputMaybe<Scalars['Float']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  engineNumber?: InputMaybe<Scalars['String']['input']>;
  engineSize?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  entryFeeCollectedBy?: InputMaybe<UserRelateToOneForCreateInput>;
  entryFeePaidAt?: InputMaybe<Scalars['DateTime']['input']>;
  entryFeePaymentMethod?: InputMaybe<Scalars['String']['input']>;
  entryFeeStatus?: InputMaybe<Scalars['String']['input']>;
  exteriorColor?: InputMaybe<Scalars['String']['input']>;
  exteriorDetailNote?: InputMaybe<Scalars['String']['input']>;
  exteriorFlags?: InputMaybe<Scalars['JSON']['input']>;
  factoryName?: InputMaybe<Scalars['String']['input']>;
  featuresAndOptionsNote?: InputMaybe<Scalars['String']['input']>;
  frameNote?: InputMaybe<Scalars['String']['input']>;
  interiorColor?: InputMaybe<Scalars['String']['input']>;
  interiorCondition?: InputMaybe<Scalars['String']['input']>;
  interiorSurfaceMaterial?: InputMaybe<Scalars['String']['input']>;
  isClearTitle?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirmedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  isInDamageOrAccident?: InputMaybe<Scalars['Boolean']['input']>;
  isNumbersMatching?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  isRestored?: InputMaybe<Scalars['Boolean']['input']>;
  isSellWithoutReserve?: InputMaybe<Scalars['Boolean']['input']>;
  isTitleReceived?: InputMaybe<Scalars['Boolean']['input']>;
  isTransportationDelivered?: InputMaybe<Scalars['Boolean']['input']>;
  isVehicleCollected?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lotId?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  marketValueHigh?: InputMaybe<Scalars['Float']['input']>;
  marketValueLow?: InputMaybe<Scalars['Float']['input']>;
  marketingPhotos?: InputMaybe<FileRelateToManyForCreateInput>;
  mechanicalSuspensionNote?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Float']['input']>;
  mileageType?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  notablePoints?: InputMaybe<Scalars['JSON']['input']>;
  overallNote?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<FileRelateToManyForCreateInput>;
  reservePrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tires?: InputMaybe<Scalars['String']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
  updateID?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CarManyRelationFilter = {
  every?: InputMaybe<CarWhereInput>;
  none?: InputMaybe<CarWhereInput>;
  some?: InputMaybe<CarWhereInput>;
};

export type CarOrderByInput = {
  additionalNote?: InputMaybe<OrderDirection>;
  bodyStyle?: InputMaybe<OrderDirection>;
  comments?: InputMaybe<OrderDirection>;
  commissionRate?: InputMaybe<OrderDirection>;
  contactSpecialist?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  customerNet?: InputMaybe<OrderDirection>;
  deletedAt?: InputMaybe<OrderDirection>;
  engineNumber?: InputMaybe<OrderDirection>;
  engineSize?: InputMaybe<OrderDirection>;
  entryFee?: InputMaybe<OrderDirection>;
  entryFeePaidAt?: InputMaybe<OrderDirection>;
  entryFeePaymentMethod?: InputMaybe<OrderDirection>;
  entryFeeStatus?: InputMaybe<OrderDirection>;
  exteriorColor?: InputMaybe<OrderDirection>;
  exteriorDetailNote?: InputMaybe<OrderDirection>;
  factoryName?: InputMaybe<OrderDirection>;
  featuresAndOptionsNote?: InputMaybe<OrderDirection>;
  frameNote?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  interiorColor?: InputMaybe<OrderDirection>;
  interiorCondition?: InputMaybe<OrderDirection>;
  interiorSurfaceMaterial?: InputMaybe<OrderDirection>;
  isClearTitle?: InputMaybe<OrderDirection>;
  isConfirmedSeller?: InputMaybe<OrderDirection>;
  isInDamageOrAccident?: InputMaybe<OrderDirection>;
  isNumbersMatching?: InputMaybe<OrderDirection>;
  isPaymentProcessed?: InputMaybe<OrderDirection>;
  isRestored?: InputMaybe<OrderDirection>;
  isSellWithoutReserve?: InputMaybe<OrderDirection>;
  isTitleReceived?: InputMaybe<OrderDirection>;
  isTransportationDelivered?: InputMaybe<OrderDirection>;
  isVehicleCollected?: InputMaybe<OrderDirection>;
  lastUpdatedAt?: InputMaybe<OrderDirection>;
  lotId?: InputMaybe<OrderDirection>;
  make?: InputMaybe<OrderDirection>;
  marketValueHigh?: InputMaybe<OrderDirection>;
  marketValueLow?: InputMaybe<OrderDirection>;
  mechanicalSuspensionNote?: InputMaybe<OrderDirection>;
  mileage?: InputMaybe<OrderDirection>;
  mileageType?: InputMaybe<OrderDirection>;
  model?: InputMaybe<OrderDirection>;
  overallNote?: InputMaybe<OrderDirection>;
  reservePrice?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  tires?: InputMaybe<OrderDirection>;
  transmission?: InputMaybe<OrderDirection>;
  updateID?: InputMaybe<OrderDirection>;
  vin?: InputMaybe<OrderDirection>;
  wheels?: InputMaybe<OrderDirection>;
  year?: InputMaybe<OrderDirection>;
};

export type CarRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CarWhereUniqueInput>>;
  create?: InputMaybe<Array<CarCreateInput>>;
};

export type CarRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CarWhereUniqueInput>>;
  create?: InputMaybe<Array<CarCreateInput>>;
  disconnect?: InputMaybe<Array<CarWhereUniqueInput>>;
  set?: InputMaybe<Array<CarWhereUniqueInput>>;
};

export type CarUpdateArgs = {
  data: CarUpdateInput;
  where: CarWhereUniqueInput;
};

export type CarUpdateInput = {
  additionalNote?: InputMaybe<Scalars['String']['input']>;
  auction?: InputMaybe<AuctionRelateToOneForUpdateInput>;
  bodyStyle?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  commissionRate?: InputMaybe<Scalars['Float']['input']>;
  contactApprovedBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  contactConsignor?: InputMaybe<UserRelateToOneForUpdateInput>;
  contactSpecialist?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerNet?: InputMaybe<Scalars['Float']['input']>;
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  engineNumber?: InputMaybe<Scalars['String']['input']>;
  engineSize?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  entryFeeCollectedBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  entryFeePaidAt?: InputMaybe<Scalars['DateTime']['input']>;
  entryFeePaymentMethod?: InputMaybe<Scalars['String']['input']>;
  entryFeeStatus?: InputMaybe<Scalars['String']['input']>;
  exteriorColor?: InputMaybe<Scalars['String']['input']>;
  exteriorDetailNote?: InputMaybe<Scalars['String']['input']>;
  exteriorFlags?: InputMaybe<Scalars['JSON']['input']>;
  factoryName?: InputMaybe<Scalars['String']['input']>;
  featuresAndOptionsNote?: InputMaybe<Scalars['String']['input']>;
  frameNote?: InputMaybe<Scalars['String']['input']>;
  interiorColor?: InputMaybe<Scalars['String']['input']>;
  interiorCondition?: InputMaybe<Scalars['String']['input']>;
  interiorSurfaceMaterial?: InputMaybe<Scalars['String']['input']>;
  isClearTitle?: InputMaybe<Scalars['Boolean']['input']>;
  isConfirmedSeller?: InputMaybe<Scalars['Boolean']['input']>;
  isInDamageOrAccident?: InputMaybe<Scalars['Boolean']['input']>;
  isNumbersMatching?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentProcessed?: InputMaybe<Scalars['Boolean']['input']>;
  isRestored?: InputMaybe<Scalars['Boolean']['input']>;
  isSellWithoutReserve?: InputMaybe<Scalars['Boolean']['input']>;
  isTitleReceived?: InputMaybe<Scalars['Boolean']['input']>;
  isTransportationDelivered?: InputMaybe<Scalars['Boolean']['input']>;
  isVehicleCollected?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  lotId?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  marketValueHigh?: InputMaybe<Scalars['Float']['input']>;
  marketValueLow?: InputMaybe<Scalars['Float']['input']>;
  marketingPhotos?: InputMaybe<FileRelateToManyForUpdateInput>;
  mechanicalSuspensionNote?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Float']['input']>;
  mileageType?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  notablePoints?: InputMaybe<Scalars['JSON']['input']>;
  overallNote?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<FileRelateToManyForUpdateInput>;
  reservePrice?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tires?: InputMaybe<Scalars['String']['input']>;
  transmission?: InputMaybe<Scalars['String']['input']>;
  updateID?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  wheels?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CarWhereInput = {
  AND?: InputMaybe<Array<CarWhereInput>>;
  NOT?: InputMaybe<Array<CarWhereInput>>;
  OR?: InputMaybe<Array<CarWhereInput>>;
  additionalNote?: InputMaybe<StringFilter>;
  auction?: InputMaybe<AuctionWhereInput>;
  bodyStyle?: InputMaybe<StringFilter>;
  comments?: InputMaybe<StringFilter>;
  commissionRate?: InputMaybe<FloatNullableFilter>;
  contactApprovedBy?: InputMaybe<UserWhereInput>;
  contactConsignor?: InputMaybe<UserWhereInput>;
  contactSpecialist?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  customerNet?: InputMaybe<FloatNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  engineNumber?: InputMaybe<StringFilter>;
  engineSize?: InputMaybe<StringFilter>;
  entryFee?: InputMaybe<FloatNullableFilter>;
  entryFeeCollectedBy?: InputMaybe<UserWhereInput>;
  entryFeePaidAt?: InputMaybe<DateTimeNullableFilter>;
  entryFeePaymentMethod?: InputMaybe<StringFilter>;
  entryFeeStatus?: InputMaybe<StringFilter>;
  exteriorColor?: InputMaybe<StringFilter>;
  exteriorDetailNote?: InputMaybe<StringFilter>;
  factoryName?: InputMaybe<StringFilter>;
  featuresAndOptionsNote?: InputMaybe<StringFilter>;
  frameNote?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  interiorColor?: InputMaybe<StringFilter>;
  interiorCondition?: InputMaybe<StringFilter>;
  interiorSurfaceMaterial?: InputMaybe<StringFilter>;
  isClearTitle?: InputMaybe<BooleanFilter>;
  isConfirmedSeller?: InputMaybe<BooleanFilter>;
  isInDamageOrAccident?: InputMaybe<BooleanFilter>;
  isNumbersMatching?: InputMaybe<BooleanFilter>;
  isPaymentProcessed?: InputMaybe<BooleanFilter>;
  isRestored?: InputMaybe<BooleanFilter>;
  isSellWithoutReserve?: InputMaybe<BooleanFilter>;
  isTitleReceived?: InputMaybe<BooleanFilter>;
  isTransportationDelivered?: InputMaybe<BooleanFilter>;
  isVehicleCollected?: InputMaybe<BooleanFilter>;
  lastUpdatedAt?: InputMaybe<DateTimeNullableFilter>;
  lotId?: InputMaybe<StringFilter>;
  make?: InputMaybe<StringFilter>;
  marketValueHigh?: InputMaybe<FloatNullableFilter>;
  marketValueLow?: InputMaybe<FloatNullableFilter>;
  marketingPhotos?: InputMaybe<FileManyRelationFilter>;
  mechanicalSuspensionNote?: InputMaybe<StringFilter>;
  mileage?: InputMaybe<FloatNullableFilter>;
  mileageType?: InputMaybe<StringFilter>;
  model?: InputMaybe<StringFilter>;
  overallNote?: InputMaybe<StringFilter>;
  photos?: InputMaybe<FileManyRelationFilter>;
  reservePrice?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<StringFilter>;
  tires?: InputMaybe<StringFilter>;
  transmission?: InputMaybe<StringFilter>;
  updateID?: InputMaybe<StringFilter>;
  vin?: InputMaybe<StringFilter>;
  wheels?: InputMaybe<StringFilter>;
  year?: InputMaybe<IntNullableFilter>;
};

export type CarWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ChangeLog = {
  __typename?: 'ChangeLog';
  actor?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  dataID?: Maybe<Scalars['String']['output']>;
  dataType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
};

export type ChangeLogCreateInput = {
  actor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataID?: InputMaybe<Scalars['String']['input']>;
  dataType?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeLogOrderByInput = {
  actor?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  data?: InputMaybe<OrderDirection>;
  dataID?: InputMaybe<OrderDirection>;
  dataType?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
};

export type ChangeLogUpdateArgs = {
  data: ChangeLogUpdateInput;
  where: ChangeLogWhereUniqueInput;
};

export type ChangeLogUpdateInput = {
  actor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  dataID?: InputMaybe<Scalars['String']['input']>;
  dataType?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
};

export type ChangeLogWhereInput = {
  AND?: InputMaybe<Array<ChangeLogWhereInput>>;
  NOT?: InputMaybe<Array<ChangeLogWhereInput>>;
  OR?: InputMaybe<Array<ChangeLogWhereInput>>;
  actor?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<StringFilter>;
  dataID?: InputMaybe<StringFilter>;
  dataType?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
};

export type ChangeLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ClientItemAuthenticationWithPasswordFailure = {
  __typename?: 'ClientItemAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type ClientItemAuthenticationWithPasswordResult = ClientItemAuthenticationWithPasswordFailure | ClientItemAuthenticationWithPasswordSuccess;

export type ClientItemAuthenticationWithPasswordSuccess = {
  __typename?: 'ClientItemAuthenticationWithPasswordSuccess';
  item: User;
  refreshToken?: Maybe<Scalars['String']['output']>;
  sessionToken: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<Array<File>>;
  filesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  locationID?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
};


export type CommentFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type CommentFilesCountArgs = {
  where?: FileWhereInput;
};

export type CommentCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<FileRelateToManyForCreateInput>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type CommentOrderByInput = {
  body?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  locationID?: InputMaybe<OrderDirection>;
  sender?: InputMaybe<OrderDirection>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  files?: InputMaybe<FileRelateToManyForUpdateInput>;
  locationID?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  files?: InputMaybe<FileManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  locationID?: InputMaybe<StringFilter>;
  sender?: InputMaybe<StringFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type File = {
  __typename?: 'File';
  assignedTo?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  mime?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type FileCreateInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FileManyRelationFilter = {
  every?: InputMaybe<FileWhereInput>;
  none?: InputMaybe<FileWhereInput>;
  some?: InputMaybe<FileWhereInput>;
};

export type FileOrderByInput = {
  assignedTo?: InputMaybe<OrderDirection>;
  category?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  mime?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  path?: InputMaybe<OrderDirection>;
  size?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
};

export type FileRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  create?: InputMaybe<Array<FileCreateInput>>;
};

export type FileRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<FileWhereUniqueInput>>;
  create?: InputMaybe<Array<FileCreateInput>>;
  disconnect?: InputMaybe<Array<FileWhereUniqueInput>>;
  set?: InputMaybe<Array<FileWhereUniqueInput>>;
};

export type FileUpdateArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};

export type FileUpdateInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type FileUploadOutput = {
  __typename?: 'FileUploadOutput';
  files: Array<Maybe<FileUploadOutputFiles>>;
};

export type FileUploadOutputFiles = {
  __typename?: 'FileUploadOutputFiles';
  filename: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type FileUploadUrlOutput = {
  __typename?: 'FileUploadURLOutput';
  files: Array<Maybe<FileUploadUrlOutputFiles>>;
};

export type FileUploadUrlOutputFiles = {
  __typename?: 'FileUploadURLOutputFiles';
  fileName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  uploadURL?: Maybe<Scalars['String']['output']>;
  viewURL?: Maybe<Scalars['String']['output']>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  assignedTo?: InputMaybe<StringFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  metadata?: InputMaybe<StringFilter>;
  mime?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  size?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type File_UploadInput = {
  files: Array<InputMaybe<File_UploadInputFiles>>;
  saveToDB?: InputMaybe<Scalars['Boolean']['input']>;
};

export type File_UploadInputFiles = {
  b64: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
};

export type File_UploadUrlInput = {
  files: Array<InputMaybe<File_UploadUrlInputFiles>>;
  saveToDB?: InputMaybe<Scalars['Boolean']['input']>;
};

export type File_UploadUrlInputFiles = {
  filename: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Group = {
  __typename?: 'Group';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  groupLogo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  members?: Maybe<Array<GroupMember>>;
  membersCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type GroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};

export type GroupCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupLogo?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupGetResult = {
  __typename?: 'GroupGetResult';
  data?: Maybe<Group>;
};

export type GroupMember = {
  __typename?: 'GroupMember';
  access?: Maybe<Scalars['Int']['output']>;
  flags?: Maybe<Array<GroupMemberFlag>>;
  flagsCount?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Group>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
};


export type GroupMemberFlagsArgs = {
  cursor?: InputMaybe<GroupMemberFlagWhereUniqueInput>;
  orderBy?: Array<GroupMemberFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberFlagWhereInput;
};


export type GroupMemberFlagsCountArgs = {
  where?: GroupMemberFlagWhereInput;
};

export type GroupMemberCreateInput = {
  access?: InputMaybe<Scalars['Int']['input']>;
  flags?: InputMaybe<GroupMemberFlagRelateToManyForCreateInput>;
  group?: InputMaybe<GroupRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type GroupMemberFlag = {
  __typename?: 'GroupMemberFlag';
  flag?: Maybe<Scalars['String']['output']>;
  groupMember?: Maybe<GroupMember>;
  id: Scalars['ID']['output'];
};

export type GroupMemberFlagCreateInput = {
  flag?: InputMaybe<Scalars['String']['input']>;
  groupMember?: InputMaybe<GroupMemberRelateToOneForCreateInput>;
};

export type GroupMemberFlagManyRelationFilter = {
  every?: InputMaybe<GroupMemberFlagWhereInput>;
  none?: InputMaybe<GroupMemberFlagWhereInput>;
  some?: InputMaybe<GroupMemberFlagWhereInput>;
};

export type GroupMemberFlagOrderByInput = {
  flag?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GroupMemberFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberFlagCreateInput>>;
};

export type GroupMemberFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberFlagCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberFlagWhereUniqueInput>>;
};

export type GroupMemberFlagUpdateArgs = {
  data: GroupMemberFlagUpdateInput;
  where: GroupMemberFlagWhereUniqueInput;
};

export type GroupMemberFlagUpdateInput = {
  flag?: InputMaybe<Scalars['String']['input']>;
  groupMember?: InputMaybe<GroupMemberRelateToOneForUpdateInput>;
};

export type GroupMemberFlagWhereInput = {
  AND?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberFlagWhereInput>>;
  flag?: InputMaybe<StringFilter>;
  groupMember?: InputMaybe<GroupMemberWhereInput>;
  id?: InputMaybe<IdFilter>;
};

export type GroupMemberFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupMemberManyRelationFilter = {
  every?: InputMaybe<GroupMemberWhereInput>;
  none?: InputMaybe<GroupMemberWhereInput>;
  some?: InputMaybe<GroupMemberWhereInput>;
};

export type GroupMemberOrderByInput = {
  access?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type GroupMemberRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
};

export type GroupMemberRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  create?: InputMaybe<Array<GroupMemberCreateInput>>;
  disconnect?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupMemberWhereUniqueInput>>;
};

export type GroupMemberRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupMemberWhereUniqueInput>;
  create?: InputMaybe<GroupMemberCreateInput>;
};

export type GroupMemberRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupMemberWhereUniqueInput>;
  create?: InputMaybe<GroupMemberCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupMemberUpdateArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};

export type GroupMemberUpdateInput = {
  access?: InputMaybe<Scalars['Int']['input']>;
  flags?: InputMaybe<GroupMemberFlagRelateToManyForUpdateInput>;
  group?: InputMaybe<GroupRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type GroupMemberWhereInput = {
  AND?: InputMaybe<Array<GroupMemberWhereInput>>;
  NOT?: InputMaybe<Array<GroupMemberWhereInput>>;
  OR?: InputMaybe<Array<GroupMemberWhereInput>>;
  access?: InputMaybe<IntNullableFilter>;
  flags?: InputMaybe<GroupMemberFlagManyRelationFilter>;
  group?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type GroupMemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GroupOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  groupLogo?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type GroupRelateToOneForCreateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupRelateToOneForUpdateInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupUpdateArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  groupLogo?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  groupLogo?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  members?: InputMaybe<GroupMemberManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Group_GetInput = {
  groupID?: InputMaybe<Scalars['String']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiGraphQl = {
  __typename?: 'KeystoneAdminUIGraphQL';
  names: KeystoneAdminUiGraphQlNames;
};

export type KeystoneAdminUiGraphQlNames = {
  __typename?: 'KeystoneAdminUIGraphQLNames';
  createInputName: Scalars['String']['output'];
  createManyMutationName: Scalars['String']['output'];
  createMutationName: Scalars['String']['output'];
  deleteManyMutationName: Scalars['String']['output'];
  deleteMutationName: Scalars['String']['output'];
  itemQueryName: Scalars['String']['output'];
  listOrderName: Scalars['String']['output'];
  listQueryCountName: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  outputTypeName: Scalars['String']['output'];
  relateToManyForCreateInputName: Scalars['String']['output'];
  relateToManyForUpdateInputName: Scalars['String']['output'];
  relateToOneForCreateInputName: Scalars['String']['output'];
  relateToOneForUpdateInputName: Scalars['String']['output'];
  updateInputName: Scalars['String']['output'];
  updateManyInputName: Scalars['String']['output'];
  updateManyMutationName: Scalars['String']['output'];
  updateMutationName: Scalars['String']['output'];
  whereInputName: Scalars['String']['output'];
  whereUniqueInputName: Scalars['String']['output'];
};

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  graphql: KeystoneAdminUiGraphQl;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type MailSendLog = {
  __typename?: 'MailSendLog';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  readAt?: Maybe<Scalars['DateTime']['output']>;
  sentAt?: Maybe<Scalars['DateTime']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type MailSendLogCreateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailSendLogOrderByInput = {
  body?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  readAt?: InputMaybe<OrderDirection>;
  sentAt?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  to?: InputMaybe<OrderDirection>;
};

export type MailSendLogUpdateArgs = {
  data: MailSendLogUpdateInput;
  where: MailSendLogWhereUniqueInput;
};

export type MailSendLogUpdateInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  readAt?: InputMaybe<Scalars['DateTime']['input']>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailSendLogWhereInput = {
  AND?: InputMaybe<Array<MailSendLogWhereInput>>;
  NOT?: InputMaybe<Array<MailSendLogWhereInput>>;
  OR?: InputMaybe<Array<MailSendLogWhereInput>>;
  body?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  sentAt?: InputMaybe<DateTimeNullableFilter>;
  subject?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
};

export type MailSendLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MailTrackHistory = {
  __typename?: 'MailTrackHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  mailTrackReferenceID?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
};

export type MailTrackHistoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mailTrackReferenceID?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailTrackHistoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  mailTrackReferenceID?: InputMaybe<OrderDirection>;
  subject?: InputMaybe<OrderDirection>;
  to?: InputMaybe<OrderDirection>;
};

export type MailTrackHistoryUpdateArgs = {
  data: MailTrackHistoryUpdateInput;
  where: MailTrackHistoryWhereUniqueInput;
};

export type MailTrackHistoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  mailTrackReferenceID?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type MailTrackHistoryWhereInput = {
  AND?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  NOT?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  OR?: InputMaybe<Array<MailTrackHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  mailTrackReferenceID?: InputMaybe<StringFilter>;
  subject?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
};

export type MailTrackHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  api_auction_create?: Maybe<Api_Auction_CreateOutput>;
  api_auction_delete?: Maybe<Api_Auction_DeleteOutput>;
  api_auction_update?: Maybe<Api_Auction_UpdateOutput>;
  api_car_create?: Maybe<Api_Car_CreateOutput>;
  api_car_delete?: Maybe<Api_Car_DeleteOutput>;
  api_car_update?: Maybe<Api_Car_UpdateOutput>;
  api_changelog_create?: Maybe<Api_Changelog_CreateOutput>;
  api_changelog_delete?: Maybe<Api_Changelog_DeleteOutput>;
  api_changelog_update?: Maybe<Api_Changelog_UpdateOutput>;
  api_comment_create?: Maybe<Api_Comment_CreateOutput>;
  api_comment_delete?: Maybe<Api_Comment_DeleteOutput>;
  api_comment_update?: Maybe<Api_Comment_UpdateOutput>;
  api_file_create?: Maybe<Api_File_CreateOutput>;
  api_file_delete?: Maybe<Api_File_DeleteOutput>;
  api_file_update?: Maybe<Api_File_UpdateOutput>;
  api_member_create?: Maybe<Api_Member_CreateOutput>;
  api_member_delete?: Maybe<Api_Member_DeleteOutput>;
  api_member_update?: Maybe<Api_Member_UpdateOutput>;
  authclient_changePassword?: Maybe<Scalars['Boolean']['output']>;
  authclient_login?: Maybe<ClientItemAuthenticationWithPasswordResult>;
  authclient_register?: Maybe<Scalars['Boolean']['output']>;
  authclient_requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  authclient_resetPassword?: Maybe<Scalars['Boolean']['output']>;
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAuction?: Maybe<Auction>;
  createAuctions?: Maybe<Array<Maybe<Auction>>>;
  createCar?: Maybe<Car>;
  createCars?: Maybe<Array<Maybe<Car>>>;
  createChangeLog?: Maybe<ChangeLog>;
  createChangeLogs?: Maybe<Array<Maybe<ChangeLog>>>;
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createFile?: Maybe<File>;
  createFiles?: Maybe<Array<Maybe<File>>>;
  createGroup?: Maybe<Group>;
  createGroupMember?: Maybe<GroupMember>;
  createGroupMemberFlag?: Maybe<GroupMemberFlag>;
  createGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  createGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  createGroups?: Maybe<Array<Maybe<Group>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createMailSendLog?: Maybe<MailSendLog>;
  createMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  createMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  createMailTrackHistory?: Maybe<MailTrackHistory>;
  createNotification?: Maybe<Notification>;
  createNotifications?: Maybe<Array<Maybe<Notification>>>;
  createServerError?: Maybe<ServerError>;
  createServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  createServerLog?: Maybe<ServerLog>;
  createServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  createUser?: Maybe<User>;
  createUserActionHistories?: Maybe<Array<Maybe<UserActionHistory>>>;
  createUserActionHistory?: Maybe<UserActionHistory>;
  createUserFlag?: Maybe<UserFlag>;
  createUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  createUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  createUserLoginHistory?: Maybe<UserLoginHistory>;
  createUserSystemFlag?: Maybe<UserSystemFlag>;
  createUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAuction?: Maybe<Auction>;
  deleteAuctions?: Maybe<Array<Maybe<Auction>>>;
  deleteCar?: Maybe<Car>;
  deleteCars?: Maybe<Array<Maybe<Car>>>;
  deleteChangeLog?: Maybe<ChangeLog>;
  deleteChangeLogs?: Maybe<Array<Maybe<ChangeLog>>>;
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deleteFile?: Maybe<File>;
  deleteFiles?: Maybe<Array<Maybe<File>>>;
  deleteGroup?: Maybe<Group>;
  deleteGroupMember?: Maybe<GroupMember>;
  deleteGroupMemberFlag?: Maybe<GroupMemberFlag>;
  deleteGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  deleteGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  deleteGroups?: Maybe<Array<Maybe<Group>>>;
  deleteMailSendLog?: Maybe<MailSendLog>;
  deleteMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  deleteMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  deleteMailTrackHistory?: Maybe<MailTrackHistory>;
  deleteNotification?: Maybe<Notification>;
  deleteNotifications?: Maybe<Array<Maybe<Notification>>>;
  deleteServerError?: Maybe<ServerError>;
  deleteServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  deleteServerLog?: Maybe<ServerLog>;
  deleteServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  deleteUser?: Maybe<User>;
  deleteUserActionHistories?: Maybe<Array<Maybe<UserActionHistory>>>;
  deleteUserActionHistory?: Maybe<UserActionHistory>;
  deleteUserFlag?: Maybe<UserFlag>;
  deleteUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  deleteUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  deleteUserLoginHistory?: Maybe<UserLoginHistory>;
  deleteUserSystemFlag?: Maybe<UserSystemFlag>;
  deleteUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  file_upload?: Maybe<FileUploadOutput>;
  file_uploadURL?: Maybe<FileUploadUrlOutput>;
  updateAuction?: Maybe<Auction>;
  updateAuctions?: Maybe<Array<Maybe<Auction>>>;
  updateCar?: Maybe<Car>;
  updateCars?: Maybe<Array<Maybe<Car>>>;
  updateChangeLog?: Maybe<ChangeLog>;
  updateChangeLogs?: Maybe<Array<Maybe<ChangeLog>>>;
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updateFile?: Maybe<File>;
  updateFiles?: Maybe<Array<Maybe<File>>>;
  updateGroup?: Maybe<Group>;
  updateGroupMember?: Maybe<GroupMember>;
  updateGroupMemberFlag?: Maybe<GroupMemberFlag>;
  updateGroupMemberFlags?: Maybe<Array<Maybe<GroupMemberFlag>>>;
  updateGroupMembers?: Maybe<Array<Maybe<GroupMember>>>;
  updateGroups?: Maybe<Array<Maybe<Group>>>;
  updateMailSendLog?: Maybe<MailSendLog>;
  updateMailSendLogs?: Maybe<Array<Maybe<MailSendLog>>>;
  updateMailTrackHistories?: Maybe<Array<Maybe<MailTrackHistory>>>;
  updateMailTrackHistory?: Maybe<MailTrackHistory>;
  updateNotification?: Maybe<Notification>;
  updateNotifications?: Maybe<Array<Maybe<Notification>>>;
  updateServerError?: Maybe<ServerError>;
  updateServerErrors?: Maybe<Array<Maybe<ServerError>>>;
  updateServerLog?: Maybe<ServerLog>;
  updateServerLogs?: Maybe<Array<Maybe<ServerLog>>>;
  updateUser?: Maybe<User>;
  updateUserActionHistories?: Maybe<Array<Maybe<UserActionHistory>>>;
  updateUserActionHistory?: Maybe<UserActionHistory>;
  updateUserFlag?: Maybe<UserFlag>;
  updateUserFlags?: Maybe<Array<Maybe<UserFlag>>>;
  updateUserLoginHistories?: Maybe<Array<Maybe<UserLoginHistory>>>;
  updateUserLoginHistory?: Maybe<UserLoginHistory>;
  updateUserSystemFlag?: Maybe<UserSystemFlag>;
  updateUserSystemFlags?: Maybe<Array<Maybe<UserSystemFlag>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  user_setFlag?: Maybe<Array<Maybe<UserFlag>>>;
};


export type MutationApi_Auction_CreateArgs = {
  input: Api_Auction_CreateInput;
};


export type MutationApi_Auction_DeleteArgs = {
  input: Api_Auction_DeleteInput;
};


export type MutationApi_Auction_UpdateArgs = {
  input: Api_Auction_UpdateInput;
};


export type MutationApi_Car_CreateArgs = {
  input: Api_Car_CreateInput;
};


export type MutationApi_Car_DeleteArgs = {
  input: Api_Car_DeleteInput;
};


export type MutationApi_Car_UpdateArgs = {
  input: Api_Car_UpdateInput;
};


export type MutationApi_Changelog_CreateArgs = {
  input: Api_Changelog_CreateInput;
};


export type MutationApi_Changelog_DeleteArgs = {
  input: Api_Changelog_DeleteInput;
};


export type MutationApi_Changelog_UpdateArgs = {
  input: Api_Changelog_UpdateInput;
};


export type MutationApi_Comment_CreateArgs = {
  input: Api_Comment_CreateInput;
};


export type MutationApi_Comment_DeleteArgs = {
  input: Api_Comment_DeleteInput;
};


export type MutationApi_Comment_UpdateArgs = {
  input: Api_Comment_UpdateInput;
};


export type MutationApi_File_CreateArgs = {
  input: Api_File_CreateInput;
};


export type MutationApi_File_DeleteArgs = {
  input: Api_File_DeleteInput;
};


export type MutationApi_File_UpdateArgs = {
  input: Api_File_UpdateInput;
};


export type MutationApi_Member_CreateArgs = {
  input: Api_Member_CreateInput;
};


export type MutationApi_Member_DeleteArgs = {
  input: Api_Member_DeleteInput;
};


export type MutationApi_Member_UpdateArgs = {
  input: Api_Member_UpdateInput;
};


export type MutationAuthclient_ChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationAuthclient_LoginArgs = {
  email: Scalars['String']['input'];
  loginType?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  refreshToken?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationAuthclient_RegisterArgs = {
  address_line1?: InputMaybe<Scalars['String']['input']>;
  address_line2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  postal_code?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAuthclient_RequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationAuthclient_ResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuthenticateUserWithPasswordArgs = {
  adminPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationCreateAuctionArgs = {
  data: AuctionCreateInput;
};


export type MutationCreateAuctionsArgs = {
  data: Array<AuctionCreateInput>;
};


export type MutationCreateCarArgs = {
  data: CarCreateInput;
};


export type MutationCreateCarsArgs = {
  data: Array<CarCreateInput>;
};


export type MutationCreateChangeLogArgs = {
  data: ChangeLogCreateInput;
};


export type MutationCreateChangeLogsArgs = {
  data: Array<ChangeLogCreateInput>;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateFilesArgs = {
  data: Array<FileCreateInput>;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateGroupMemberArgs = {
  data: GroupMemberCreateInput;
};


export type MutationCreateGroupMemberFlagArgs = {
  data: GroupMemberFlagCreateInput;
};


export type MutationCreateGroupMemberFlagsArgs = {
  data: Array<GroupMemberFlagCreateInput>;
};


export type MutationCreateGroupMembersArgs = {
  data: Array<GroupMemberCreateInput>;
};


export type MutationCreateGroupsArgs = {
  data: Array<GroupCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateMailSendLogArgs = {
  data: MailSendLogCreateInput;
};


export type MutationCreateMailSendLogsArgs = {
  data: Array<MailSendLogCreateInput>;
};


export type MutationCreateMailTrackHistoriesArgs = {
  data: Array<MailTrackHistoryCreateInput>;
};


export type MutationCreateMailTrackHistoryArgs = {
  data: MailTrackHistoryCreateInput;
};


export type MutationCreateNotificationArgs = {
  data: NotificationCreateInput;
};


export type MutationCreateNotificationsArgs = {
  data: Array<NotificationCreateInput>;
};


export type MutationCreateServerErrorArgs = {
  data: ServerErrorCreateInput;
};


export type MutationCreateServerErrorsArgs = {
  data: Array<ServerErrorCreateInput>;
};


export type MutationCreateServerLogArgs = {
  data: ServerLogCreateInput;
};


export type MutationCreateServerLogsArgs = {
  data: Array<ServerLogCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserActionHistoriesArgs = {
  data: Array<UserActionHistoryCreateInput>;
};


export type MutationCreateUserActionHistoryArgs = {
  data: UserActionHistoryCreateInput;
};


export type MutationCreateUserFlagArgs = {
  data: UserFlagCreateInput;
};


export type MutationCreateUserFlagsArgs = {
  data: Array<UserFlagCreateInput>;
};


export type MutationCreateUserLoginHistoriesArgs = {
  data: Array<UserLoginHistoryCreateInput>;
};


export type MutationCreateUserLoginHistoryArgs = {
  data: UserLoginHistoryCreateInput;
};


export type MutationCreateUserSystemFlagArgs = {
  data: UserSystemFlagCreateInput;
};


export type MutationCreateUserSystemFlagsArgs = {
  data: Array<UserSystemFlagCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAuctionArgs = {
  where: AuctionWhereUniqueInput;
};


export type MutationDeleteAuctionsArgs = {
  where: Array<AuctionWhereUniqueInput>;
};


export type MutationDeleteCarArgs = {
  where: CarWhereUniqueInput;
};


export type MutationDeleteCarsArgs = {
  where: Array<CarWhereUniqueInput>;
};


export type MutationDeleteChangeLogArgs = {
  where: ChangeLogWhereUniqueInput;
};


export type MutationDeleteChangeLogsArgs = {
  where: Array<ChangeLogWhereUniqueInput>;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteFilesArgs = {
  where: Array<FileWhereUniqueInput>;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};


export type MutationDeleteGroupMemberFlagArgs = {
  where: GroupMemberFlagWhereUniqueInput;
};


export type MutationDeleteGroupMemberFlagsArgs = {
  where: Array<GroupMemberFlagWhereUniqueInput>;
};


export type MutationDeleteGroupMembersArgs = {
  where: Array<GroupMemberWhereUniqueInput>;
};


export type MutationDeleteGroupsArgs = {
  where: Array<GroupWhereUniqueInput>;
};


export type MutationDeleteMailSendLogArgs = {
  where: MailSendLogWhereUniqueInput;
};


export type MutationDeleteMailSendLogsArgs = {
  where: Array<MailSendLogWhereUniqueInput>;
};


export type MutationDeleteMailTrackHistoriesArgs = {
  where: Array<MailTrackHistoryWhereUniqueInput>;
};


export type MutationDeleteMailTrackHistoryArgs = {
  where: MailTrackHistoryWhereUniqueInput;
};


export type MutationDeleteNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type MutationDeleteNotificationsArgs = {
  where: Array<NotificationWhereUniqueInput>;
};


export type MutationDeleteServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};


export type MutationDeleteServerErrorsArgs = {
  where: Array<ServerErrorWhereUniqueInput>;
};


export type MutationDeleteServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};


export type MutationDeleteServerLogsArgs = {
  where: Array<ServerLogWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserActionHistoriesArgs = {
  where: Array<UserActionHistoryWhereUniqueInput>;
};


export type MutationDeleteUserActionHistoryArgs = {
  where: UserActionHistoryWhereUniqueInput;
};


export type MutationDeleteUserFlagArgs = {
  where: UserFlagWhereUniqueInput;
};


export type MutationDeleteUserFlagsArgs = {
  where: Array<UserFlagWhereUniqueInput>;
};


export type MutationDeleteUserLoginHistoriesArgs = {
  where: Array<UserLoginHistoryWhereUniqueInput>;
};


export type MutationDeleteUserLoginHistoryArgs = {
  where: UserLoginHistoryWhereUniqueInput;
};


export type MutationDeleteUserSystemFlagArgs = {
  where: UserSystemFlagWhereUniqueInput;
};


export type MutationDeleteUserSystemFlagsArgs = {
  where: Array<UserSystemFlagWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationFile_UploadArgs = {
  input: File_UploadInput;
};


export type MutationFile_UploadUrlArgs = {
  input: File_UploadUrlInput;
};


export type MutationUpdateAuctionArgs = {
  data: AuctionUpdateInput;
  where: AuctionWhereUniqueInput;
};


export type MutationUpdateAuctionsArgs = {
  data: Array<AuctionUpdateArgs>;
};


export type MutationUpdateCarArgs = {
  data: CarUpdateInput;
  where: CarWhereUniqueInput;
};


export type MutationUpdateCarsArgs = {
  data: Array<CarUpdateArgs>;
};


export type MutationUpdateChangeLogArgs = {
  data: ChangeLogUpdateInput;
  where: ChangeLogWhereUniqueInput;
};


export type MutationUpdateChangeLogsArgs = {
  data: Array<ChangeLogUpdateArgs>;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateFilesArgs = {
  data: Array<FileUpdateArgs>;
};


export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateGroupMemberArgs = {
  data: GroupMemberUpdateInput;
  where: GroupMemberWhereUniqueInput;
};


export type MutationUpdateGroupMemberFlagArgs = {
  data: GroupMemberFlagUpdateInput;
  where: GroupMemberFlagWhereUniqueInput;
};


export type MutationUpdateGroupMemberFlagsArgs = {
  data: Array<GroupMemberFlagUpdateArgs>;
};


export type MutationUpdateGroupMembersArgs = {
  data: Array<GroupMemberUpdateArgs>;
};


export type MutationUpdateGroupsArgs = {
  data: Array<GroupUpdateArgs>;
};


export type MutationUpdateMailSendLogArgs = {
  data: MailSendLogUpdateInput;
  where: MailSendLogWhereUniqueInput;
};


export type MutationUpdateMailSendLogsArgs = {
  data: Array<MailSendLogUpdateArgs>;
};


export type MutationUpdateMailTrackHistoriesArgs = {
  data: Array<MailTrackHistoryUpdateArgs>;
};


export type MutationUpdateMailTrackHistoryArgs = {
  data: MailTrackHistoryUpdateInput;
  where: MailTrackHistoryWhereUniqueInput;
};


export type MutationUpdateNotificationArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};


export type MutationUpdateNotificationsArgs = {
  data: Array<NotificationUpdateArgs>;
};


export type MutationUpdateServerErrorArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};


export type MutationUpdateServerErrorsArgs = {
  data: Array<ServerErrorUpdateArgs>;
};


export type MutationUpdateServerLogArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};


export type MutationUpdateServerLogsArgs = {
  data: Array<ServerLogUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserActionHistoriesArgs = {
  data: Array<UserActionHistoryUpdateArgs>;
};


export type MutationUpdateUserActionHistoryArgs = {
  data: UserActionHistoryUpdateInput;
  where: UserActionHistoryWhereUniqueInput;
};


export type MutationUpdateUserFlagArgs = {
  data: UserFlagUpdateInput;
  where: UserFlagWhereUniqueInput;
};


export type MutationUpdateUserFlagsArgs = {
  data: Array<UserFlagUpdateArgs>;
};


export type MutationUpdateUserLoginHistoriesArgs = {
  data: Array<UserLoginHistoryUpdateArgs>;
};


export type MutationUpdateUserLoginHistoryArgs = {
  data: UserLoginHistoryUpdateInput;
  where: UserLoginHistoryWhereUniqueInput;
};


export type MutationUpdateUserSystemFlagArgs = {
  data: UserSystemFlagUpdateInput;
  where: UserSystemFlagWhereUniqueInput;
};


export type MutationUpdateUserSystemFlagsArgs = {
  data: Array<UserSystemFlagUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationUser_SetFlagArgs = {
  input: User_SetFlagInput;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isRead?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type NotificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isRead?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type NotificationManyRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isRead?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type NotificationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
};

export type NotificationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  create?: InputMaybe<Array<NotificationCreateInput>>;
  disconnect?: InputMaybe<Array<NotificationWhereUniqueInput>>;
  set?: InputMaybe<Array<NotificationWhereUniqueInput>>;
};

export type NotificationUpdateArgs = {
  data: NotificationUpdateInput;
  where: NotificationWhereUniqueInput;
};

export type NotificationUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  isRead?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  isRead?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type NotificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  ErrorTest?: Maybe<Scalars['String']['output']>;
  api_auction_aggregate?: Maybe<Api_Auction_AggregateOutput>;
  api_auction_get?: Maybe<Api_Auction_GetOutput>;
  api_auction_groupBy?: Maybe<Api_Auction_GroupByOutput>;
  api_auction_list?: Maybe<Api_Auction_ListOutput>;
  api_car_aggregate?: Maybe<Api_Car_AggregateOutput>;
  api_car_get?: Maybe<Api_Car_GetOutput>;
  api_car_groupBy?: Maybe<Api_Car_GroupByOutput>;
  api_car_list?: Maybe<Api_Car_ListOutput>;
  api_changelog_aggregate?: Maybe<Api_Changelog_AggregateOutput>;
  api_changelog_get?: Maybe<Api_Changelog_GetOutput>;
  api_changelog_groupBy?: Maybe<Api_Changelog_GroupByOutput>;
  api_changelog_list?: Maybe<Api_Changelog_ListOutput>;
  api_comment_aggregate?: Maybe<Api_Comment_AggregateOutput>;
  api_comment_get?: Maybe<Api_Comment_GetOutput>;
  api_comment_groupBy?: Maybe<Api_Comment_GroupByOutput>;
  api_comment_list?: Maybe<Api_Comment_ListOutput>;
  api_file_get?: Maybe<Api_File_GetOutput>;
  api_file_list?: Maybe<Api_File_ListOutput>;
  api_member_aggregate?: Maybe<Api_Member_AggregateOutput>;
  api_member_get?: Maybe<Api_Member_GetOutput>;
  api_member_groupBy?: Maybe<Api_Member_GroupByOutput>;
  api_member_list?: Maybe<Api_Member_ListOutput>;
  api_notification_list?: Maybe<Api_Notification_ListOutput>;
  auction?: Maybe<Auction>;
  auctions?: Maybe<Array<Auction>>;
  auctionsCount?: Maybe<Scalars['Int']['output']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  car?: Maybe<Car>;
  cars?: Maybe<Array<Car>>;
  carsCount?: Maybe<Scalars['Int']['output']>;
  changeLog?: Maybe<ChangeLog>;
  changeLogs?: Maybe<Array<ChangeLog>>;
  changeLogsCount?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<File>;
  files?: Maybe<Array<File>>;
  filesCount?: Maybe<Scalars['Int']['output']>;
  group?: Maybe<Group>;
  groupMember?: Maybe<GroupMember>;
  groupMemberFlag?: Maybe<GroupMemberFlag>;
  groupMemberFlags?: Maybe<Array<GroupMemberFlag>>;
  groupMemberFlagsCount?: Maybe<Scalars['Int']['output']>;
  groupMembers?: Maybe<Array<GroupMember>>;
  groupMembersCount?: Maybe<Scalars['Int']['output']>;
  group_get?: Maybe<GroupGetResult>;
  groups?: Maybe<Array<Group>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  keystone: KeystoneMeta;
  mailSendLog?: Maybe<MailSendLog>;
  mailSendLogs?: Maybe<Array<MailSendLog>>;
  mailSendLogsCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistories?: Maybe<Array<MailTrackHistory>>;
  mailTrackHistoriesCount?: Maybe<Scalars['Int']['output']>;
  mailTrackHistory?: Maybe<MailTrackHistory>;
  notification?: Maybe<Notification>;
  notifications?: Maybe<Array<Notification>>;
  notificationsCount?: Maybe<Scalars['Int']['output']>;
  serverError?: Maybe<ServerError>;
  serverErrors?: Maybe<Array<ServerError>>;
  serverErrorsCount?: Maybe<Scalars['Int']['output']>;
  serverLog?: Maybe<ServerLog>;
  serverLogs?: Maybe<Array<ServerLog>>;
  serverLogsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userActionHistories?: Maybe<Array<UserActionHistory>>;
  userActionHistoriesCount?: Maybe<Scalars['Int']['output']>;
  userActionHistory?: Maybe<UserActionHistory>;
  userFlag?: Maybe<UserFlag>;
  userFlags?: Maybe<Array<UserFlag>>;
  userFlagsCount?: Maybe<Scalars['Int']['output']>;
  userLoginHistories?: Maybe<Array<UserLoginHistory>>;
  userLoginHistoriesCount?: Maybe<Scalars['Int']['output']>;
  userLoginHistory?: Maybe<UserLoginHistory>;
  userSystemFlag?: Maybe<UserSystemFlag>;
  userSystemFlags?: Maybe<Array<UserSystemFlag>>;
  userSystemFlagsCount?: Maybe<Scalars['Int']['output']>;
  user_getRoles?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryApi_Auction_AggregateArgs = {
  input: Api_Auction_AggregateInput;
};


export type QueryApi_Auction_GetArgs = {
  input: Api_Auction_GetInput;
};


export type QueryApi_Auction_GroupByArgs = {
  input: Api_Auction_GroupByInput;
};


export type QueryApi_Auction_ListArgs = {
  input: Api_Auction_ListInput;
};


export type QueryApi_Car_AggregateArgs = {
  input: Api_Car_AggregateInput;
};


export type QueryApi_Car_GetArgs = {
  input: Api_Car_GetInput;
};


export type QueryApi_Car_GroupByArgs = {
  input: Api_Car_GroupByInput;
};


export type QueryApi_Car_ListArgs = {
  input: Api_Car_ListInput;
};


export type QueryApi_Changelog_AggregateArgs = {
  input: Api_Changelog_AggregateInput;
};


export type QueryApi_Changelog_GetArgs = {
  input: Api_Changelog_GetInput;
};


export type QueryApi_Changelog_GroupByArgs = {
  input: Api_Changelog_GroupByInput;
};


export type QueryApi_Changelog_ListArgs = {
  input: Api_Changelog_ListInput;
};


export type QueryApi_Comment_AggregateArgs = {
  input: Api_Comment_AggregateInput;
};


export type QueryApi_Comment_GetArgs = {
  input: Api_Comment_GetInput;
};


export type QueryApi_Comment_GroupByArgs = {
  input: Api_Comment_GroupByInput;
};


export type QueryApi_Comment_ListArgs = {
  input: Api_Comment_ListInput;
};


export type QueryApi_File_GetArgs = {
  input: Api_File_GetInput;
};


export type QueryApi_File_ListArgs = {
  input: Api_File_ListInput;
};


export type QueryApi_Member_AggregateArgs = {
  input: Api_Member_AggregateInput;
};


export type QueryApi_Member_GetArgs = {
  input: Api_Member_GetInput;
};


export type QueryApi_Member_GroupByArgs = {
  input: Api_Member_GroupByInput;
};


export type QueryApi_Member_ListArgs = {
  input: Api_Member_ListInput;
};


export type QueryApi_Notification_ListArgs = {
  input: Api_Notification_ListInput;
};


export type QueryAuctionArgs = {
  where: AuctionWhereUniqueInput;
};


export type QueryAuctionsArgs = {
  cursor?: InputMaybe<AuctionWhereUniqueInput>;
  orderBy?: Array<AuctionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: AuctionWhereInput;
};


export type QueryAuctionsCountArgs = {
  where?: AuctionWhereInput;
};


export type QueryCarArgs = {
  where: CarWhereUniqueInput;
};


export type QueryCarsArgs = {
  cursor?: InputMaybe<CarWhereUniqueInput>;
  orderBy?: Array<CarOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CarWhereInput;
};


export type QueryCarsCountArgs = {
  where?: CarWhereInput;
};


export type QueryChangeLogArgs = {
  where: ChangeLogWhereUniqueInput;
};


export type QueryChangeLogsArgs = {
  cursor?: InputMaybe<ChangeLogWhereUniqueInput>;
  orderBy?: Array<ChangeLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChangeLogWhereInput;
};


export type QueryChangeLogsCountArgs = {
  where?: ChangeLogWhereInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CommentWhereInput;
};


export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: Array<FileOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: FileWhereInput;
};


export type QueryFilesCountArgs = {
  where?: FileWhereInput;
};


export type QueryGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryGroupMemberArgs = {
  where: GroupMemberWhereUniqueInput;
};


export type QueryGroupMemberFlagArgs = {
  where: GroupMemberFlagWhereUniqueInput;
};


export type QueryGroupMemberFlagsArgs = {
  cursor?: InputMaybe<GroupMemberFlagWhereUniqueInput>;
  orderBy?: Array<GroupMemberFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberFlagWhereInput;
};


export type QueryGroupMemberFlagsCountArgs = {
  where?: GroupMemberFlagWhereInput;
};


export type QueryGroupMembersArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type QueryGroupMembersCountArgs = {
  where?: GroupMemberWhereInput;
};


export type QueryGroup_GetArgs = {
  input: Group_GetInput;
};


export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: Array<GroupOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupWhereInput;
};


export type QueryGroupsCountArgs = {
  where?: GroupWhereInput;
};


export type QueryMailSendLogArgs = {
  where: MailSendLogWhereUniqueInput;
};


export type QueryMailSendLogsArgs = {
  cursor?: InputMaybe<MailSendLogWhereUniqueInput>;
  orderBy?: Array<MailSendLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MailSendLogWhereInput;
};


export type QueryMailSendLogsCountArgs = {
  where?: MailSendLogWhereInput;
};


export type QueryMailTrackHistoriesArgs = {
  cursor?: InputMaybe<MailTrackHistoryWhereUniqueInput>;
  orderBy?: Array<MailTrackHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: MailTrackHistoryWhereInput;
};


export type QueryMailTrackHistoriesCountArgs = {
  where?: MailTrackHistoryWhereInput;
};


export type QueryMailTrackHistoryArgs = {
  where: MailTrackHistoryWhereUniqueInput;
};


export type QueryNotificationArgs = {
  where: NotificationWhereUniqueInput;
};


export type QueryNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: NotificationWhereInput;
};


export type QueryNotificationsCountArgs = {
  where?: NotificationWhereInput;
};


export type QueryServerErrorArgs = {
  where: ServerErrorWhereUniqueInput;
};


export type QueryServerErrorsArgs = {
  cursor?: InputMaybe<ServerErrorWhereUniqueInput>;
  orderBy?: Array<ServerErrorOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerErrorWhereInput;
};


export type QueryServerErrorsCountArgs = {
  where?: ServerErrorWhereInput;
};


export type QueryServerLogArgs = {
  where: ServerLogWhereUniqueInput;
};


export type QueryServerLogsArgs = {
  cursor?: InputMaybe<ServerLogWhereUniqueInput>;
  orderBy?: Array<ServerLogOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ServerLogWhereInput;
};


export type QueryServerLogsCountArgs = {
  where?: ServerLogWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserActionHistoriesArgs = {
  cursor?: InputMaybe<UserActionHistoryWhereUniqueInput>;
  orderBy?: Array<UserActionHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserActionHistoryWhereInput;
};


export type QueryUserActionHistoriesCountArgs = {
  where?: UserActionHistoryWhereInput;
};


export type QueryUserActionHistoryArgs = {
  where: UserActionHistoryWhereUniqueInput;
};


export type QueryUserFlagArgs = {
  where: UserFlagWhereUniqueInput;
};


export type QueryUserFlagsArgs = {
  cursor?: InputMaybe<UserFlagWhereUniqueInput>;
  orderBy?: Array<UserFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserFlagWhereInput;
};


export type QueryUserFlagsCountArgs = {
  where?: UserFlagWhereInput;
};


export type QueryUserLoginHistoriesArgs = {
  cursor?: InputMaybe<UserLoginHistoryWhereUniqueInput>;
  orderBy?: Array<UserLoginHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserLoginHistoryWhereInput;
};


export type QueryUserLoginHistoriesCountArgs = {
  where?: UserLoginHistoryWhereInput;
};


export type QueryUserLoginHistoryArgs = {
  where: UserLoginHistoryWhereUniqueInput;
};


export type QueryUserSystemFlagArgs = {
  where: UserSystemFlagWhereUniqueInput;
};


export type QueryUserSystemFlagsArgs = {
  cursor?: InputMaybe<UserSystemFlagWhereUniqueInput>;
  orderBy?: Array<UserSystemFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserSystemFlagWhereInput;
};


export type QueryUserSystemFlagsCountArgs = {
  where?: UserSystemFlagWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type ServerError = {
  __typename?: 'ServerError';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerErrorCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerErrorOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerErrorUpdateArgs = {
  data: ServerErrorUpdateInput;
  where: ServerErrorWhereUniqueInput;
};

export type ServerErrorUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerErrorWhereInput = {
  AND?: InputMaybe<Array<ServerErrorWhereInput>>;
  NOT?: InputMaybe<Array<ServerErrorWhereInput>>;
  OR?: InputMaybe<Array<ServerErrorWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerErrorWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ServerLog = {
  __typename?: 'ServerLog';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  elapsed?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  graphql?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['String']['output']>;
};

export type ServerLogCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerLogOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  elapsed?: InputMaybe<OrderDirection>;
  errorMessage?: InputMaybe<OrderDirection>;
  graphql?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  method?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
  url?: InputMaybe<OrderDirection>;
  userID?: InputMaybe<OrderDirection>;
};

export type ServerLogUpdateArgs = {
  data: ServerLogUpdateInput;
  where: ServerLogWhereUniqueInput;
};

export type ServerLogUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  elapsed?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['String']['input']>;
};

export type ServerLogWhereInput = {
  AND?: InputMaybe<Array<ServerLogWhereInput>>;
  NOT?: InputMaybe<Array<ServerLogWhereInput>>;
  OR?: InputMaybe<Array<ServerLogWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  elapsed?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  graphql?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  method?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  userID?: InputMaybe<StringFilter>;
};

export type ServerLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  ping_time?: Maybe<Time>;
};

export type Time = {
  __typename?: 'Time';
  data?: Maybe<Scalars['String']['output']>;
  iso?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  actionHistory?: Maybe<Array<UserActionHistory>>;
  actionHistoryCount?: Maybe<Scalars['Int']['output']>;
  actorType?: Maybe<Scalars['String']['output']>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  adminPassword?: Maybe<PasswordState>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyContact?: Maybe<Scalars['String']['output']>;
  consignedCars?: Maybe<Array<Car>>;
  consignedCarsCount?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  faxNumber?: Maybe<Scalars['String']['output']>;
  flags?: Maybe<Array<UserFlag>>;
  flagsCount?: Maybe<Scalars['Int']['output']>;
  groups?: Maybe<Array<GroupMember>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  homeNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  loginHistory?: Maybe<Array<UserLoginHistory>>;
  loginHistoryCount?: Maybe<Scalars['Int']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Array<Notification>>;
  notificationsCount?: Maybe<Scalars['Int']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UserRoleType>;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  systemFlags?: Maybe<Array<UserSystemFlag>>;
  systemFlagsCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserActionHistoryArgs = {
  cursor?: InputMaybe<UserActionHistoryWhereUniqueInput>;
  orderBy?: Array<UserActionHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserActionHistoryWhereInput;
};


export type UserActionHistoryCountArgs = {
  where?: UserActionHistoryWhereInput;
};


export type UserConsignedCarsArgs = {
  cursor?: InputMaybe<CarWhereUniqueInput>;
  orderBy?: Array<CarOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CarWhereInput;
};


export type UserConsignedCarsCountArgs = {
  where?: CarWhereInput;
};


export type UserFlagsArgs = {
  cursor?: InputMaybe<UserFlagWhereUniqueInput>;
  orderBy?: Array<UserFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserFlagWhereInput;
};


export type UserFlagsCountArgs = {
  where?: UserFlagWhereInput;
};


export type UserGroupsArgs = {
  cursor?: InputMaybe<GroupMemberWhereUniqueInput>;
  orderBy?: Array<GroupMemberOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: GroupMemberWhereInput;
};


export type UserGroupsCountArgs = {
  where?: GroupMemberWhereInput;
};


export type UserLoginHistoryArgs = {
  cursor?: InputMaybe<UserLoginHistoryWhereUniqueInput>;
  orderBy?: Array<UserLoginHistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserLoginHistoryWhereInput;
};


export type UserLoginHistoryCountArgs = {
  where?: UserLoginHistoryWhereInput;
};


export type UserNotificationsArgs = {
  cursor?: InputMaybe<NotificationWhereUniqueInput>;
  orderBy?: Array<NotificationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: NotificationWhereInput;
};


export type UserNotificationsCountArgs = {
  where?: NotificationWhereInput;
};


export type UserSystemFlagsArgs = {
  cursor?: InputMaybe<UserSystemFlagWhereUniqueInput>;
  orderBy?: Array<UserSystemFlagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserSystemFlagWhereInput;
};


export type UserSystemFlagsCountArgs = {
  where?: UserSystemFlagWhereInput;
};

export type UserActionHistory = {
  __typename?: 'UserActionHistory';
  action?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserActionHistoryCreateInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type UserActionHistoryManyRelationFilter = {
  every?: InputMaybe<UserActionHistoryWhereInput>;
  none?: InputMaybe<UserActionHistoryWhereInput>;
  some?: InputMaybe<UserActionHistoryWhereInput>;
};

export type UserActionHistoryOrderByInput = {
  action?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  message?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type UserActionHistoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserActionHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserActionHistoryCreateInput>>;
};

export type UserActionHistoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserActionHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserActionHistoryCreateInput>>;
  disconnect?: InputMaybe<Array<UserActionHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserActionHistoryWhereUniqueInput>>;
};

export type UserActionHistoryUpdateArgs = {
  data: UserActionHistoryUpdateInput;
  where: UserActionHistoryWhereUniqueInput;
};

export type UserActionHistoryUpdateInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type UserActionHistoryWhereInput = {
  AND?: InputMaybe<Array<UserActionHistoryWhereInput>>;
  NOT?: InputMaybe<Array<UserActionHistoryWhereInput>>;
  OR?: InputMaybe<Array<UserActionHistoryWhereInput>>;
  action?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  message?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type UserActionHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  actionHistory?: InputMaybe<UserActionHistoryRelateToManyForCreateInput>;
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  consignedCars?: InputMaybe<CarRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<UserFlagRelateToManyForCreateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForCreateInput>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginHistory?: InputMaybe<UserLoginHistoryRelateToManyForCreateInput>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<NotificationRelateToManyForCreateInput>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoleType>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserFlag = {
  __typename?: 'UserFlag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserFlagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagManyRelationFilter = {
  every?: InputMaybe<UserFlagWhereInput>;
  none?: InputMaybe<UserFlagWhereInput>;
  some?: InputMaybe<UserFlagWhereInput>;
};

export type UserFlagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  key?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type UserFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserFlagCreateInput>>;
};

export type UserFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserFlagCreateInput>>;
  disconnect?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFlagWhereUniqueInput>>;
};

export type UserFlagUpdateArgs = {
  data: UserFlagUpdateInput;
  where: UserFlagWhereUniqueInput;
};

export type UserFlagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserFlagWhereInput = {
  AND?: InputMaybe<Array<UserFlagWhereInput>>;
  NOT?: InputMaybe<Array<UserFlagWhereInput>>;
  OR?: InputMaybe<Array<UserFlagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<StringFilter>;
};

export type UserFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserLoginHistory = {
  __typename?: 'UserLoginHistory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

export type UserLoginHistoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginHistoryManyRelationFilter = {
  every?: InputMaybe<UserLoginHistoryWhereInput>;
  none?: InputMaybe<UserLoginHistoryWhereInput>;
  some?: InputMaybe<UserLoginHistoryWhereInput>;
};

export type UserLoginHistoryOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  ipAddress?: InputMaybe<OrderDirection>;
  userAgent?: InputMaybe<OrderDirection>;
};

export type UserLoginHistoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserLoginHistoryCreateInput>>;
};

export type UserLoginHistoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<UserLoginHistoryCreateInput>>;
  disconnect?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<UserLoginHistoryWhereUniqueInput>>;
};

export type UserLoginHistoryUpdateArgs = {
  data: UserLoginHistoryUpdateInput;
  where: UserLoginHistoryWhereUniqueInput;
};

export type UserLoginHistoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginHistoryWhereInput = {
  AND?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  NOT?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  OR?: InputMaybe<Array<UserLoginHistoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  ipAddress?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  userAgent?: InputMaybe<StringFilter>;
};

export type UserLoginHistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserOrderByInput = {
  actorType?: InputMaybe<OrderDirection>;
  addressLine1?: InputMaybe<OrderDirection>;
  addressLine2?: InputMaybe<OrderDirection>;
  city?: InputMaybe<OrderDirection>;
  company?: InputMaybe<OrderDirection>;
  companyContact?: InputMaybe<OrderDirection>;
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  faxNumber?: InputMaybe<OrderDirection>;
  homeNumber?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isActive?: InputMaybe<OrderDirection>;
  lastLogin?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  middleName?: InputMaybe<OrderDirection>;
  mobileNumber?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  postalCode?: InputMaybe<OrderDirection>;
  prefix?: InputMaybe<OrderDirection>;
  role?: InputMaybe<OrderDirection>;
  secondaryEmail?: InputMaybe<OrderDirection>;
  state?: InputMaybe<OrderDirection>;
  suffix?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserRoleType {
  Admin = 'admin',
  Dev = 'dev',
  User = 'user'
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  not?: InputMaybe<UserRoleTypeNullableFilter>;
  notIn?: InputMaybe<Array<UserRoleType>>;
};

export type UserSystemFlag = {
  __typename?: 'UserSystemFlag';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  value?: Maybe<Scalars['String']['output']>;
};

export type UserSystemFlagCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserSystemFlagManyRelationFilter = {
  every?: InputMaybe<UserSystemFlagWhereInput>;
  none?: InputMaybe<UserSystemFlagWhereInput>;
  some?: InputMaybe<UserSystemFlagWhereInput>;
};

export type UserSystemFlagOrderByInput = {
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  key?: InputMaybe<OrderDirection>;
  metadata?: InputMaybe<OrderDirection>;
  value?: InputMaybe<OrderDirection>;
};

export type UserSystemFlagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSystemFlagCreateInput>>;
};

export type UserSystemFlagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  create?: InputMaybe<Array<UserSystemFlagCreateInput>>;
  disconnect?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
  set?: InputMaybe<Array<UserSystemFlagWhereUniqueInput>>;
};

export type UserSystemFlagUpdateArgs = {
  data: UserSystemFlagUpdateInput;
  where: UserSystemFlagWhereUniqueInput;
};

export type UserSystemFlagUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UserSystemFlagWhereInput = {
  AND?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  NOT?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  OR?: InputMaybe<Array<UserSystemFlagWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  key?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<StringFilter>;
};

export type UserSystemFlagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  actionHistory?: InputMaybe<UserActionHistoryRelateToManyForUpdateInput>;
  actorType?: InputMaybe<Scalars['String']['input']>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  adminPassword?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyContact?: InputMaybe<Scalars['String']['input']>;
  consignedCars?: InputMaybe<CarRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  faxNumber?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<UserFlagRelateToManyForUpdateInput>;
  groups?: InputMaybe<GroupMemberRelateToManyForUpdateInput>;
  homeNumber?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['String']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  loginHistory?: InputMaybe<UserLoginHistoryRelateToManyForUpdateInput>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<NotificationRelateToManyForUpdateInput>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserRoleType>;
  secondaryEmail?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  systemFlags?: InputMaybe<UserSystemFlagRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  actionHistory?: InputMaybe<UserActionHistoryManyRelationFilter>;
  actorType?: InputMaybe<StringFilter>;
  addressLine1?: InputMaybe<StringFilter>;
  addressLine2?: InputMaybe<StringFilter>;
  adminPassword?: InputMaybe<PasswordFilter>;
  city?: InputMaybe<StringFilter>;
  company?: InputMaybe<StringFilter>;
  companyContact?: InputMaybe<StringFilter>;
  consignedCars?: InputMaybe<CarManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  faxNumber?: InputMaybe<StringFilter>;
  flags?: InputMaybe<UserFlagManyRelationFilter>;
  groups?: InputMaybe<GroupMemberManyRelationFilter>;
  homeNumber?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<StringFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  loginHistory?: InputMaybe<UserLoginHistoryManyRelationFilter>;
  middleName?: InputMaybe<StringFilter>;
  mobileNumber?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  notifications?: InputMaybe<NotificationManyRelationFilter>;
  postalCode?: InputMaybe<StringFilter>;
  prefix?: InputMaybe<StringFilter>;
  role?: InputMaybe<UserRoleTypeNullableFilter>;
  secondaryEmail?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  suffix?: InputMaybe<StringFilter>;
  systemFlags?: InputMaybe<UserSystemFlagManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User_SetFlagInput = {
  data: Array<InputMaybe<User_SetFlagInputData>>;
};

export type User_SetFlagInputData = {
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type Auction_ListQueryVariables = Exact<{
  input: Api_Auction_ListInput;
}>;


export type Auction_ListQuery = { __typename?: 'Query', api_auction_list?: { __typename?: 'Api_Auction_listOutput', data?: Array<{ __typename?: 'Api_Auction_listOutputData', id?: string | null, auctionID?: string | null, name?: string | null, addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, zip?: string | null, country?: string | null, summary?: string | null, body?: string | null, tags?: Array<string | null> | null, eventDateStart?: string | null, eventDateEnd?: string | null, photoIds?: Array<string | null> | null, createdAt?: string | null, deletedAt?: string | null, photos?: Array<{ __typename?: 'Api_Auction_listOutputDataPhotos', id: string, assignedTo: string, name: string, url: string, mime: string, size: string, metadata: string, createdAt: string, path: string, category: string, note: string } | null> | null } | null> | null, page?: { __typename?: 'Api_Auction_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Auction_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Auction_AggregateQueryVariables = Exact<{
  input: Api_Auction_AggregateInput;
}>;


export type Auction_AggregateQuery = { __typename?: 'Query', api_auction_aggregate?: { __typename?: 'Api_Auction_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Auction_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type Auction_GroupByQueryVariables = Exact<{
  input: Api_Auction_GroupByInput;
}>;


export type Auction_GroupByQuery = { __typename?: 'Query', api_auction_groupBy?: { __typename?: 'Api_Auction_groupByOutput', breakdown?: Array<{ __typename?: 'Api_Auction_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Auction_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Auction_GetQueryVariables = Exact<{
  input: Api_Auction_GetInput;
}>;


export type Auction_GetQuery = { __typename?: 'Query', api_auction_get?: { __typename?: 'Api_Auction_getOutput', data?: { __typename?: 'Api_Auction_getOutputData', id?: string | null, auctionID?: string | null, name?: string | null, addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, zip?: string | null, country?: string | null, summary?: string | null, body?: string | null, tags?: Array<string | null> | null, eventDateStart?: string | null, eventDateEnd?: string | null, photoIds?: Array<string | null> | null, createdAt?: string | null, deletedAt?: string | null, photos?: Array<{ __typename?: 'Api_Auction_getOutputDataPhotos', id: string, assignedTo: string, name: string, url: string, mime: string, size: string, metadata: string, createdAt: string, path: string, category: string, note: string } | null> | null } | null } | null };

export type Auction_CreateMutationVariables = Exact<{
  input: Api_Auction_CreateInput;
}>;


export type Auction_CreateMutation = { __typename?: 'Mutation', api_auction_create?: { __typename?: 'Api_Auction_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Auction_UpdateMutationVariables = Exact<{
  input: Api_Auction_UpdateInput;
}>;


export type Auction_UpdateMutation = { __typename?: 'Mutation', api_auction_update?: { __typename?: 'Api_Auction_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Auction_DeleteMutationVariables = Exact<{
  input: Api_Auction_DeleteInput;
}>;


export type Auction_DeleteMutation = { __typename?: 'Mutation', api_auction_delete?: { __typename?: 'Api_Auction_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Authclient_LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Authclient_LoginMutation = { __typename?: 'Mutation', authclient_login?: { __typename?: 'ClientItemAuthenticationWithPasswordFailure', message: string } | { __typename?: 'ClientItemAuthenticationWithPasswordSuccess', sessionToken: string } | null };

export type Authclient_RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
}>;


export type Authclient_RegisterMutation = { __typename?: 'Mutation', authclient_register?: boolean | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, name?: string | null, middleName?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, createdAt?: any | null, lastLogin?: any | null } | null };

export type Authclient_ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type Authclient_ChangePasswordMutation = { __typename?: 'Mutation', authclient_changePassword?: boolean | null };

export type Authclient_RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type Authclient_RequestPasswordResetMutation = { __typename?: 'Mutation', authclient_requestPasswordReset?: boolean | null };

export type Authclient_ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type Authclient_ResetPasswordMutation = { __typename?: 'Mutation', authclient_resetPassword?: boolean | null };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name?: string | null, lastName?: string | null, displayName?: string | null, email?: string | null, role?: UserRoleType | null, lastLogin?: any | null } | null };

export type Car_ListQueryVariables = Exact<{
  input: Api_Car_ListInput;
}>;


export type Car_ListQuery = { __typename?: 'Query', api_car_list?: { __typename?: 'Api_Car_listOutput', data?: Array<{ __typename?: 'Api_Car_listOutputData', id?: string | null, lotId?: string | null, vin?: string | null, year?: number | null, make?: string | null, model?: string | null, transmission?: string | null, engineSize?: string | null, engineNumber?: string | null, bodyStyle?: string | null, mileage?: number | null, mileageType?: string | null, isNumbersMatching?: boolean | null, isRestored?: boolean | null, isInDamageOrAccident?: boolean | null, exteriorColor?: string | null, factoryName?: string | null, tires?: string | null, wheels?: string | null, exteriorFlags?: Array<string | null> | null, exteriorDetailNote?: string | null, interiorColor?: string | null, interiorSurfaceMaterial?: string | null, interiorCondition?: string | null, mechanicalSuspensionNote?: string | null, frameNote?: string | null, featuresAndOptionsNote?: string | null, notablePoints?: Array<string | null> | null, reservePrice?: number | null, marketValueHigh?: number | null, marketValueLow?: number | null, isSellWithoutReserve?: boolean | null, photoIds?: Array<string | null> | null, isConfirmedSeller?: boolean | null, auctionId?: string | null, createdAt?: string | null, isTitleReceived?: boolean | null, isPaymentProcessed?: boolean | null, isVehicleCollected?: boolean | null, isTransportationDelivered?: boolean | null, comments?: string | null, status?: string | null, contactSpecialist?: string | null, contactApprovedById?: string | null, contactConsignorId?: string | null, deletedAt?: string | null, contactApprovedBy?: { __typename?: 'Api_Car_listOutputDataContactApprovedBy', actorType?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, company?: string | null } | null, contactConsignor?: { __typename?: 'Api_Car_listOutputDataContactConsignor', actorType?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, company?: string | null } | null, auction?: { __typename?: 'Api_Car_listOutputDataAuction', summary?: string | null, name?: string | null, auctionID?: string | null, eventDateStart?: string | null, eventDateEnd?: string | null } | null, photos?: Array<{ __typename?: 'Api_Car_listOutputDataPhotos', id: string, name: string, url: string, mime: string } | null> | null } | null> | null, page?: { __typename?: 'Api_Car_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Car_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Car_AggregateQueryVariables = Exact<{
  input: Api_Car_AggregateInput;
}>;


export type Car_AggregateQuery = { __typename?: 'Query', api_car_aggregate?: { __typename?: 'Api_Car_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Car_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type Car_GroupByQueryVariables = Exact<{
  input: Api_Car_GroupByInput;
}>;


export type Car_GroupByQuery = { __typename?: 'Query', api_car_groupBy?: { __typename?: 'Api_Car_groupByOutput', breakdown?: Array<{ __typename?: 'Api_Car_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Car_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Car_GetQueryVariables = Exact<{
  input: Api_Car_GetInput;
}>;


export type Car_GetQuery = { __typename?: 'Query', api_car_get?: { __typename?: 'Api_Car_getOutput', data?: { __typename?: 'Api_Car_getOutputData', id?: string | null, lotId?: string | null, vin?: string | null, year?: number | null, make?: string | null, model?: string | null, transmission?: string | null, engineSize?: string | null, engineNumber?: string | null, bodyStyle?: string | null, mileage?: number | null, mileageType?: string | null, isNumbersMatching?: boolean | null, isRestored?: boolean | null, isInDamageOrAccident?: boolean | null, exteriorColor?: string | null, factoryName?: string | null, tires?: string | null, wheels?: string | null, exteriorFlags?: Array<string | null> | null, exteriorDetailNote?: string | null, interiorColor?: string | null, interiorSurfaceMaterial?: string | null, interiorCondition?: string | null, mechanicalSuspensionNote?: string | null, frameNote?: string | null, featuresAndOptionsNote?: string | null, notablePoints?: Array<string | null> | null, reservePrice?: number | null, marketValueHigh?: number | null, marketValueLow?: number | null, isSellWithoutReserve?: boolean | null, photoIds?: Array<string | null> | null, isConfirmedSeller?: boolean | null, auctionId?: string | null, createdAt?: string | null, status?: string | null, isTitleReceived?: boolean | null, isPaymentProcessed?: boolean | null, isVehicleCollected?: boolean | null, isTransportationDelivered?: boolean | null, comments?: string | null, contactSpecialist?: string | null, contactApprovedById?: string | null, contactConsignorId?: string | null, deletedAt?: string | null, contactApprovedBy?: { __typename?: 'Api_Car_getOutputDataContactApprovedBy', actorType?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, company?: string | null } | null, contactConsignor?: { __typename?: 'Api_Car_getOutputDataContactConsignor', actorType?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, company?: string | null } | null, auction?: { __typename?: 'Api_Car_getOutputDataAuction', summary?: string | null, name?: string | null, auctionID?: string | null, eventDateStart?: string | null, eventDateEnd?: string | null } | null, photos?: Array<{ __typename?: 'Api_Car_getOutputDataPhotos', id: string, name: string, url: string, mime: string } | null> | null } | null } | null };

export type Car_CreateMutationVariables = Exact<{
  input: Api_Car_CreateInput;
}>;


export type Car_CreateMutation = { __typename?: 'Mutation', api_car_create?: { __typename?: 'Api_Car_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Car_UpdateMutationVariables = Exact<{
  input: Api_Car_UpdateInput;
}>;


export type Car_UpdateMutation = { __typename?: 'Mutation', api_car_update?: { __typename?: 'Api_Car_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Car_DeleteMutationVariables = Exact<{
  input: Api_Car_DeleteInput;
}>;


export type Car_DeleteMutation = { __typename?: 'Mutation', api_car_delete?: { __typename?: 'Api_Car_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Changelog_ListQueryVariables = Exact<{
  input: Api_Changelog_ListInput;
}>;


export type Changelog_ListQuery = { __typename?: 'Query', api_changelog_list?: { __typename?: 'Api_Changelog_listOutput', data?: Array<{ __typename?: 'Api_Changelog_listOutputData', id?: string | null, actor?: string | null, dataType?: string | null, dataID?: string | null, data?: string | null, metadata?: string | null, createdAt?: string | null } | null> | null, page?: { __typename?: 'Api_Changelog_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Changelog_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Changelog_GetQueryVariables = Exact<{
  input: Api_Changelog_GetInput;
}>;


export type Changelog_GetQuery = { __typename?: 'Query', api_changelog_get?: { __typename?: 'Api_Changelog_getOutput', data?: { __typename?: 'Api_Changelog_getOutputData', id?: string | null, actor?: string | null, dataType?: string | null, dataID?: string | null, data?: string | null, metadata?: string | null, createdAt?: string | null } | null } | null };

export type Changelog_CreateMutationVariables = Exact<{
  input: Api_Changelog_CreateInput;
}>;


export type Changelog_CreateMutation = { __typename?: 'Mutation', api_changelog_create?: { __typename?: 'Api_Changelog_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Changelog_DeleteMutationVariables = Exact<{
  input: Api_Changelog_DeleteInput;
}>;


export type Changelog_DeleteMutation = { __typename?: 'Mutation', api_changelog_delete?: { __typename?: 'Api_Changelog_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Changelog_UpdateMutationVariables = Exact<{
  input: Api_Changelog_UpdateInput;
}>;


export type Changelog_UpdateMutation = { __typename?: 'Mutation', api_changelog_update?: { __typename?: 'Api_Changelog_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_ListQueryVariables = Exact<{
  input: Api_File_ListInput;
}>;


export type Files_ListQuery = { __typename?: 'Query', api_file_list?: { __typename?: 'Api_File_listOutput', data?: Array<{ __typename?: 'Api_File_listOutputData', id?: string | null, assignedTo?: string | null, name?: string | null, url?: string | null, mime?: string | null, size?: string | null, metadata?: string | null, createdAt?: string | null, path?: string | null, category?: string | null, note?: string | null } | null> | null, page?: { __typename?: 'Api_File_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_File_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Files_GetQueryVariables = Exact<{
  input: Api_File_GetInput;
}>;


export type Files_GetQuery = { __typename?: 'Query', api_file_get?: { __typename?: 'Api_File_getOutput', data?: { __typename?: 'Api_File_getOutputData', id: string, assignedTo: string, name: string, url: string, mime: string, size: string, metadata: string, createdAt: string, path: string, category: string, note: string } | null } | null };

export type Files_CreateMutationVariables = Exact<{
  input: Api_File_CreateInput;
}>;


export type Files_CreateMutation = { __typename?: 'Mutation', api_file_create?: { __typename?: 'Api_File_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_UpdateMutationVariables = Exact<{
  input: Api_File_UpdateInput;
}>;


export type Files_UpdateMutation = { __typename?: 'Mutation', api_file_update?: { __typename?: 'Api_File_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Files_DeleteMutationVariables = Exact<{
  input: Api_File_DeleteInput;
}>;


export type Files_DeleteMutation = { __typename?: 'Mutation', api_file_delete?: { __typename?: 'Api_File_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type File_UploadMutationVariables = Exact<{
  input: File_UploadInput;
}>;


export type File_UploadMutation = { __typename?: 'Mutation', file_upload?: { __typename?: 'FileUploadOutput', files: Array<{ __typename?: 'FileUploadOutputFiles', id?: string | null, url: string, filename: string } | null> } | null };

export type File_UploadUrlMutationVariables = Exact<{
  input: File_UploadUrlInput;
}>;


export type File_UploadUrlMutation = { __typename?: 'Mutation', file_uploadURL?: { __typename?: 'FileUploadURLOutput', files: Array<{ __typename?: 'FileUploadURLOutputFiles', id?: string | null, uploadURL?: string | null, fileName?: string | null, viewURL?: string | null } | null> } | null };

export type Members_ListQueryVariables = Exact<{
  input: Api_Member_ListInput;
}>;


export type Members_ListQuery = { __typename?: 'Query', api_member_list?: { __typename?: 'Api_Member_listOutput', data?: Array<{ __typename?: 'Api_Member_listOutputData', id?: string | null, email?: string | null, prefix?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, suffix?: string | null, displayName?: string | null, role?: string | null, actorType?: string | null, mobileNumber?: string | null, faxNumber?: string | null, homeNumber?: string | null, secondaryEmail?: string | null, addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, company?: string | null, companyContact?: string | null, isActive?: string | null, lastLogin?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> | null, page?: { __typename?: 'Api_Member_listOutputPage', total?: number | null, page?: number | null, pageSize?: number | null, range?: { __typename?: 'Api_Member_listOutputPageRange', from: number, to: number } | null } | null } | null };

export type Members_AggregateQueryVariables = Exact<{
  input: Api_Member_AggregateInput;
}>;


export type Members_AggregateQuery = { __typename?: 'Query', api_member_aggregate?: { __typename?: 'Api_Member_aggregateOutput', breakdown?: Array<{ __typename?: 'Api_Member_aggregateOutputBreakdown', countBy?: string | null, count?: number | null } | null> | null } | null };

export type Members_GroupByQueryVariables = Exact<{
  input: Api_Member_GroupByInput;
}>;


export type Members_GroupByQuery = { __typename?: 'Query', api_member_groupBy?: { __typename?: 'Api_Member_groupByOutput', breakdown?: Array<{ __typename?: 'Api_Member_groupByOutputBreakdown', uniqueIdentifier?: string | null, counts: Array<{ __typename?: 'Api_Member_groupByOutputBreakdownCounts', countBy?: string | null, count?: number | null } | null> } | null> | null } | null };

export type Members_GetQueryVariables = Exact<{
  input: Api_Member_GetInput;
}>;


export type Members_GetQuery = { __typename?: 'Query', api_member_get?: { __typename?: 'Api_Member_getOutput', data?: { __typename?: 'Api_Member_getOutputData', id?: string | null, email?: string | null, prefix?: string | null, name?: string | null, middleName?: string | null, lastName?: string | null, suffix?: string | null, displayName?: string | null, role?: string | null, actorType?: string | null, mobileNumber?: string | null, faxNumber?: string | null, homeNumber?: string | null, secondaryEmail?: string | null, addressLine1?: string | null, addressLine2?: string | null, city?: string | null, state?: string | null, postalCode?: string | null, company?: string | null, companyContact?: string | null, isActive?: string | null, lastLogin?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type Members_CreateMutationVariables = Exact<{
  input: Api_Member_CreateInput;
}>;


export type Members_CreateMutation = { __typename?: 'Mutation', api_member_create?: { __typename?: 'Api_Member_createOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Members_UpdateMutationVariables = Exact<{
  input: Api_Member_UpdateInput;
}>;


export type Members_UpdateMutation = { __typename?: 'Mutation', api_member_update?: { __typename?: 'Api_Member_updateOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Members_DeleteMutationVariables = Exact<{
  input: Api_Member_DeleteInput;
}>;


export type Members_DeleteMutation = { __typename?: 'Mutation', api_member_delete?: { __typename?: 'Api_Member_deleteOutput', count?: number | null, ids?: Array<string | null> | null } | null };

export type Ping_TimeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Ping_TimeSubscription = { __typename?: 'Subscription', ping_time?: { __typename?: 'Time', iso?: string | null, data?: string | null } | null };


export const Auction_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auction_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"auctionID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zip"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateStart"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"photoIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Auction_ListQuery, Auction_ListQueryVariables>;
export const Auction_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auction_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Auction_AggregateQuery, Auction_AggregateQueryVariables>;
export const Auction_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auction_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Auction_GroupByQuery, Auction_GroupByQueryVariables>;
export const Auction_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Auction_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"auctionID"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"zip"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateStart"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"photoIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Auction_GetQuery, Auction_GetQueryVariables>;
export const Auction_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auction_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Auction_CreateMutation, Auction_CreateMutationVariables>;
export const Auction_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auction_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Auction_UpdateMutation, Auction_UpdateMutationVariables>;
export const Auction_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Auction_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_auction_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_auction_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Auction_DeleteMutation, Auction_DeleteMutationVariables>;
export const Authclient_LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ClientItemAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<Authclient_LoginMutation, Authclient_LoginMutationVariables>;
export const Authclient_RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}}]}]}}]} as unknown as DocumentNode<Authclient_RegisterMutation, Authclient_RegisterMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const Authclient_ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_changePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_changePassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<Authclient_ChangePasswordMutation, Authclient_ChangePasswordMutationVariables>;
export const Authclient_RequestPasswordResetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_requestPasswordReset"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_requestPasswordReset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<Authclient_RequestPasswordResetMutation, Authclient_RequestPasswordResetMutationVariables>;
export const Authclient_ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authclient_resetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authclient_resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<Authclient_ResetPasswordMutation, Authclient_ResetPasswordMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const Car_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Car_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lotId"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"make"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"engineSize"}},{"kind":"Field","name":{"kind":"Name","value":"engineNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bodyStyle"}},{"kind":"Field","name":{"kind":"Name","value":"mileage"}},{"kind":"Field","name":{"kind":"Name","value":"mileageType"}},{"kind":"Field","name":{"kind":"Name","value":"isNumbersMatching"}},{"kind":"Field","name":{"kind":"Name","value":"isRestored"}},{"kind":"Field","name":{"kind":"Name","value":"isInDamageOrAccident"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorColor"}},{"kind":"Field","name":{"kind":"Name","value":"factoryName"}},{"kind":"Field","name":{"kind":"Name","value":"tires"}},{"kind":"Field","name":{"kind":"Name","value":"wheels"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorFlags"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorDetailNote"}},{"kind":"Field","name":{"kind":"Name","value":"interiorColor"}},{"kind":"Field","name":{"kind":"Name","value":"interiorSurfaceMaterial"}},{"kind":"Field","name":{"kind":"Name","value":"interiorCondition"}},{"kind":"Field","name":{"kind":"Name","value":"mechanicalSuspensionNote"}},{"kind":"Field","name":{"kind":"Name","value":"frameNote"}},{"kind":"Field","name":{"kind":"Name","value":"featuresAndOptionsNote"}},{"kind":"Field","name":{"kind":"Name","value":"notablePoints"}},{"kind":"Field","name":{"kind":"Name","value":"reservePrice"}},{"kind":"Field","name":{"kind":"Name","value":"marketValueHigh"}},{"kind":"Field","name":{"kind":"Name","value":"marketValueLow"}},{"kind":"Field","name":{"kind":"Name","value":"isSellWithoutReserve"}},{"kind":"Field","name":{"kind":"Name","value":"photoIds"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmedSeller"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isTitleReceived"}},{"kind":"Field","name":{"kind":"Name","value":"isPaymentProcessed"}},{"kind":"Field","name":{"kind":"Name","value":"isVehicleCollected"}},{"kind":"Field","name":{"kind":"Name","value":"isTransportationDelivered"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"contactSpecialist"}},{"kind":"Field","name":{"kind":"Name","value":"contactApprovedById"}},{"kind":"Field","name":{"kind":"Name","value":"contactApprovedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactConsignor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactConsignorId"}},{"kind":"Field","name":{"kind":"Name","value":"auction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auctionID"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateStart"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateEnd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Car_ListQuery, Car_ListQueryVariables>;
export const Car_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Car_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Car_AggregateQuery, Car_AggregateQueryVariables>;
export const Car_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Car_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Car_GroupByQuery, Car_GroupByQueryVariables>;
export const Car_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Car_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lotId"}},{"kind":"Field","name":{"kind":"Name","value":"vin"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"make"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"transmission"}},{"kind":"Field","name":{"kind":"Name","value":"engineSize"}},{"kind":"Field","name":{"kind":"Name","value":"engineNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bodyStyle"}},{"kind":"Field","name":{"kind":"Name","value":"mileage"}},{"kind":"Field","name":{"kind":"Name","value":"mileageType"}},{"kind":"Field","name":{"kind":"Name","value":"isNumbersMatching"}},{"kind":"Field","name":{"kind":"Name","value":"isRestored"}},{"kind":"Field","name":{"kind":"Name","value":"isInDamageOrAccident"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorColor"}},{"kind":"Field","name":{"kind":"Name","value":"factoryName"}},{"kind":"Field","name":{"kind":"Name","value":"tires"}},{"kind":"Field","name":{"kind":"Name","value":"wheels"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorFlags"}},{"kind":"Field","name":{"kind":"Name","value":"exteriorDetailNote"}},{"kind":"Field","name":{"kind":"Name","value":"interiorColor"}},{"kind":"Field","name":{"kind":"Name","value":"interiorSurfaceMaterial"}},{"kind":"Field","name":{"kind":"Name","value":"interiorCondition"}},{"kind":"Field","name":{"kind":"Name","value":"mechanicalSuspensionNote"}},{"kind":"Field","name":{"kind":"Name","value":"frameNote"}},{"kind":"Field","name":{"kind":"Name","value":"featuresAndOptionsNote"}},{"kind":"Field","name":{"kind":"Name","value":"notablePoints"}},{"kind":"Field","name":{"kind":"Name","value":"reservePrice"}},{"kind":"Field","name":{"kind":"Name","value":"marketValueHigh"}},{"kind":"Field","name":{"kind":"Name","value":"marketValueLow"}},{"kind":"Field","name":{"kind":"Name","value":"isSellWithoutReserve"}},{"kind":"Field","name":{"kind":"Name","value":"photoIds"}},{"kind":"Field","name":{"kind":"Name","value":"isConfirmedSeller"}},{"kind":"Field","name":{"kind":"Name","value":"auctionId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"isTitleReceived"}},{"kind":"Field","name":{"kind":"Name","value":"isPaymentProcessed"}},{"kind":"Field","name":{"kind":"Name","value":"isVehicleCollected"}},{"kind":"Field","name":{"kind":"Name","value":"isTransportationDelivered"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"contactSpecialist"}},{"kind":"Field","name":{"kind":"Name","value":"contactApprovedById"}},{"kind":"Field","name":{"kind":"Name","value":"contactApprovedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactConsignor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactConsignorId"}},{"kind":"Field","name":{"kind":"Name","value":"auction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"summary"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"auctionID"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateStart"}},{"kind":"Field","name":{"kind":"Name","value":"eventDateEnd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Car_GetQuery, Car_GetQueryVariables>;
export const Car_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Car_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Car_CreateMutation, Car_CreateMutationVariables>;
export const Car_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Car_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Car_UpdateMutation, Car_UpdateMutationVariables>;
export const Car_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Car_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_car_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_car_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Car_DeleteMutation, Car_DeleteMutationVariables>;
export const Changelog_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Changelog_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_changelog_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_changelog_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"actor"}},{"kind":"Field","name":{"kind":"Name","value":"dataType"}},{"kind":"Field","name":{"kind":"Name","value":"dataID"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Changelog_ListQuery, Changelog_ListQueryVariables>;
export const Changelog_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Changelog_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_changelog_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_changelog_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"actor"}},{"kind":"Field","name":{"kind":"Name","value":"dataType"}},{"kind":"Field","name":{"kind":"Name","value":"dataID"}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<Changelog_GetQuery, Changelog_GetQueryVariables>;
export const Changelog_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Changelog_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_changelog_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_changelog_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Changelog_CreateMutation, Changelog_CreateMutationVariables>;
export const Changelog_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Changelog_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_changelog_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_changelog_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Changelog_DeleteMutation, Changelog_DeleteMutationVariables>;
export const Changelog_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Changelog_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_changelog_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_changelog_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Changelog_UpdateMutation, Changelog_UpdateMutationVariables>;
export const Files_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Files_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Files_ListQuery, Files_ListQueryVariables>;
export const Files_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Files_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<Files_GetQuery, Files_GetQueryVariables>;
export const Files_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_CreateMutation, Files_CreateMutationVariables>;
export const Files_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_UpdateMutation, Files_UpdateMutationVariables>;
export const Files_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Files_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_file_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_file_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Files_DeleteMutation, Files_DeleteMutationVariables>;
export const File_UploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"File_upload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File_uploadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_upload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]} as unknown as DocumentNode<File_UploadMutation, File_UploadMutationVariables>;
export const File_UploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"File_uploadURL"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"File_uploadURLInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file_uploadURL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadURL"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"viewURL"}}]}}]}}]}}]} as unknown as DocumentNode<File_UploadUrlMutation, File_UploadUrlMutationVariables>;
export const Members_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_List"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_listInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_list"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"faxNumber"}},{"kind":"Field","name":{"kind":"Name","value":"homeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryEmail"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"companyContact"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"from"}},{"kind":"Field","name":{"kind":"Name","value":"to"}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}}]}}]}}]} as unknown as DocumentNode<Members_ListQuery, Members_ListQueryVariables>;
export const Members_AggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Aggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_aggregateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<Members_AggregateQuery, Members_AggregateQueryVariables>;
export const Members_GroupByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_GroupBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_groupByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_groupBy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"breakdown"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uniqueIdentifier"}},{"kind":"Field","name":{"kind":"Name","value":"counts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countBy"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Members_GroupByQuery, Members_GroupByQueryVariables>;
export const Members_GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Members_Get"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_getInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"suffix"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"actorType"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"faxNumber"}},{"kind":"Field","name":{"kind":"Name","value":"homeNumber"}},{"kind":"Field","name":{"kind":"Name","value":"secondaryEmail"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"companyContact"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastLogin"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<Members_GetQuery, Members_GetQueryVariables>;
export const Members_CreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Create"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_createInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_create"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_CreateMutation, Members_CreateMutationVariables>;
export const Members_UpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Update"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_updateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_update"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_UpdateMutation, Members_UpdateMutationVariables>;
export const Members_DeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Members_Delete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Api_member_deleteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"api_member_delete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"ids"}}]}}]}}]} as unknown as DocumentNode<Members_DeleteMutation, Members_DeleteMutationVariables>;
export const Ping_TimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ping_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]} as unknown as DocumentNode<Ping_TimeSubscription, Ping_TimeSubscriptionVariables>;