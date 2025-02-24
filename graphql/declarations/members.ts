import { graphql } from '../generated';

export const Members_List = graphql(`
  query Members_List($input: Api_member_listInput!) {
    api_member_list(input: $input) {
      data {
        id
        email
        prefix
        name
        middleName
        lastName
        suffix
        displayName
        role
        actorType
        mobileNumber
        faxNumber
        homeNumber
        secondaryEmail
        addressLine1
        addressLine2
        city
        state
        postalCode
        company
        companyContact
        isActive
        lastLogin
        createdAt
        updatedAt
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

export const Members_Aggregate = graphql(`
  query Members_Aggregate($input: Api_member_aggregateInput!) {
    api_member_aggregate(input: $input) {
      breakdown {
        countBy
        count
      }
    }
  }
`);

export const Members_GroupBy = graphql(`
  query Members_GroupBy($input: Api_member_groupByInput!) {
    api_member_groupBy(input: $input) {
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

export const Members_Get = graphql(`
  query Members_Get($input: Api_member_getInput!) {
    api_member_get(input: $input) {
      data {
        id
        email
        prefix
        name
        middleName
        lastName
        suffix
        displayName
        role
        actorType
        mobileNumber
        faxNumber
        homeNumber
        secondaryEmail
        addressLine1
        addressLine2
        city
        state
        postalCode
        company
        companyContact
        isActive
        lastLogin
        createdAt
        updatedAt
      }
    }
  }
`);

export const Members_Create = graphql(`
  mutation Members_Create($input: Api_member_createInput!) {
    api_member_create(input: $input) {
      count
      ids
    }
  }
`);

export const Members_Update = graphql(`
  mutation Members_Update($input: Api_member_updateInput!) {
    api_member_update(input: $input) {
      count
      ids
    }
  }
`);

export const Members_Delete = graphql(`
  mutation Members_Delete($input: Api_member_deleteInput!) {
    api_member_delete(input: $input) {
      count
      ids
    }
  }
`);
