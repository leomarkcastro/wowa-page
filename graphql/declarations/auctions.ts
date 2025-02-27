import { graphql } from '../generated';

export const Auction_List = graphql(`
  query Auction_List($input: Api_auction_listInput!) {
    api_auction_list(input: $input) {
      data {
        id
        auctionID
        name
        addressLine1
        addressLine2
        city
        state
        zip
        country
        summary
        body
        tags
        eventDateStart
        eventDateEnd
        photoIds
        createdAt
        photos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        deletedAt
      }
      page {
        total
        range {
          from
          to
        }
        page
        pageSize
      }
    }
  }
`);

export const Auction_Aggregate = graphql(`
  query Auction_Aggregate($input: Api_auction_aggregateInput!) {
    api_auction_aggregate(input: $input) {
      breakdown {
        countBy
        count
      }
    }
  }
`);

export const Auction_GroupBy = graphql(`
  query Auction_GroupBy($input: Api_auction_groupByInput!) {
    api_auction_groupBy(input: $input) {
      breakdown {
        uniqueIdentifier
        counts {
          countBy
          count
        }
      }
    }
  }
`);

export const Auction_Get = graphql(`
  query Auction_Get($input: Api_auction_getInput!) {
    api_auction_get(input: $input) {
      data {
        id
        auctionID
        name
        addressLine1
        addressLine2
        city
        state
        zip
        country
        summary
        body
        tags
        eventDateStart
        eventDateEnd
        photoIds
        createdAt
        photos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        deletedAt
      }
    }
  }
`);

export const Auction_Create = graphql(`
  mutation Auction_Create($input: Api_auction_createInput!) {
    api_auction_create(input: $input) {
      count
      ids
    }
  }
`);

export const Auction_Update = graphql(`
  mutation Auction_Update($input: Api_auction_updateInput!) {
    api_auction_update(input: $input) {
      count
      ids
    }
  }
`);

export const Auction_Delete = graphql(`
  mutation Auction_Delete($input: Api_auction_deleteInput!) {
    api_auction_delete(input: $input) {
      count
      ids
    }
  }
`);
