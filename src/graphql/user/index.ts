import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      _id
      token
      password
      email
      listIdProduct {
        price
        months
        _id
        type
        createdAt
      }
      createdAt
      isPermission
      userName
    }
  }
`;

export const REGISTER = gql`
  mutation register(
    $userName: String!
    $email: String!
    $password: String!
    $quantity: Int!
    $contact: String!
  ) {
    register(
      register: {
        userName: $userName
        email: $email
        password: $password
        quantity: $quantity
        contact: $contact
      }
    ) {
      _id
      token
      password
      email
      listIdProduct {
        price
        months
        _id
        type
        createdAt
      }
      createdAt
      isPermission
      userName
    }
  }
`;
