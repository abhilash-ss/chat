const { ApolloServer } = require("apollo-server");
const { sequalize } = require("./models");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);

  sequalize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
});
