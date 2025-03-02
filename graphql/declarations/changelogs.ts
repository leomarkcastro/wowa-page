import { graphql } from '../generated';

export const Changelog_List = graphql(`
  query Changelog_List($input: Api_changelog_listInput!) {
    api_changelog_list(input: $input) {
      data {
        id
        actor
        dataType
        dataID
        data
        metadata
        createdAt
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

export const Changelog_Get = graphql(`
  query Changelog_Get($input: Api_changelog_getInput!) {
    api_changelog_get(input: $input) {
      data {
        id
        actor
        dataType
        dataID
        data
        metadata
        createdAt
      }
    }
  }
`);

export const Changelog_Create = graphql(`
  mutation Changelog_Create($input: Api_changelog_createInput!) {
    api_changelog_create(input: $input) {
      count
      ids
    }
  }
`);

export const Changelog_Delete = graphql(`
  mutation Changelog_Delete($input: Api_changelog_deleteInput!) {
    api_changelog_delete(input: $input) {
      count
      ids
    }
  }
`);

export const Changelog_Update = graphql(`
  mutation Changelog_Update($input: Api_changelog_updateInput!) {
    api_changelog_update(input: $input) {
      count
      ids
    }
  }
`);
