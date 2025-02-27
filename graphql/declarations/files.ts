import { graphql } from '../generated';

export const Files_List = graphql(`
  query Files_List($input: Api_file_listInput!) {
    api_file_list(input: $input) {
      data {
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

export const Files_Get = graphql(`
  query Files_Get($input: Api_file_getInput!) {
    api_file_get(input: $input) {
      data {
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
    }
  }
`);

export const Files_Create = graphql(`
  mutation Files_Create($input: Api_file_createInput!) {
    api_file_create(input: $input) {
      count
      ids
    }
  }
`);

export const Files_Update = graphql(`
  mutation Files_Update($input: Api_file_updateInput!) {
    api_file_update(input: $input) {
      count
      ids
    }
  }
`);

export const Files_Delete = graphql(`
  mutation Files_Delete($input: Api_file_deleteInput!) {
    api_file_delete(input: $input) {
      count
      ids
    }
  }
`);

export const Files_Upload = graphql(`
  mutation File_upload($input: File_uploadInput!) {
    file_upload(input: $input) {
      files {
        id
        url
        filename
      }
    }
  }
`);

export const File_UploadURL = graphql(`
  mutation File_uploadURL($input: File_uploadURLInput!) {
    file_uploadURL(input: $input) {
      files {
        id
        uploadURL
        fileName
        viewURL
      }
    }
  }
`);
