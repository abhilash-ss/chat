const { gql } = require("apollo-server");

module.exports = gql`
  type user {
    username: String!
    email: String!
  }
  type Query {
    getUsers: [user]!
  }
`;
