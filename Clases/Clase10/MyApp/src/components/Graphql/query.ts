import gql from "graphql-tag";

export const GET_USER = gql`
query User_Query($userId: ID!) {
  user(id: $userId) {
    name
  }
}
`;