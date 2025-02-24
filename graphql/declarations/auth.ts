import { graphql } from '../generated';

export const Login = graphql(`
  mutation Authclient_login($email: String!, $password: String!) {
    authclient_login(email: $email, password: $password) {
      ... on ClientItemAuthenticationWithPasswordSuccess {
        sessionToken
      }
      ... on ClientItemAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`);

export const Register = graphql(`
  mutation Authclient_register(
    $email: String!
    $password: String!
    $firstName: String
    $lastName: String
  ) {
    authclient_register(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
    )
  }
`);

export const Me = graphql(`
  query Me {
    authenticatedItem {
      ... on User {
        id
        name
        middleName
        lastName
        displayName
        email
        role
        createdAt
        lastLogin
      }
    }
  }
`);

export const UpdatePassword = graphql(`
  mutation Authclient_changePassword(
    $oldPassword: String!
    $newPassword: String!
  ) {
    authclient_changePassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
    )
  }
`);

export const RequestPasswordReset = graphql(`
  mutation Authclient_requestPasswordReset($email: String!) {
    authclient_requestPasswordReset(email: $email)
  }
`);

export const TokenPasswordReset = graphql(`
  mutation Authclient_resetPassword($token: String!, $password: String!) {
    authclient_resetPassword(token: $token, password: $password)
  }
`);

export const UpdateMe = graphql(`
  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
      name
      lastName
      displayName
      email
      role
      lastLogin
    }
  }
`);
