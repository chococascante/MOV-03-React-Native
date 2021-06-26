import gql from "graphql-tag";

export const GET_USER = gql`
query User($id: ID!) {
  user(id: $id) {
    name
  }
}
`;