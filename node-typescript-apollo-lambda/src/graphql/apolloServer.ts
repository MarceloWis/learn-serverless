import { ApolloServer } from 'apollo-server-lambda';
import * as mutation from './resolvers/mutations';
import * as query from './resolvers/mutations';
import typeDefs from './type-defs';

const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV);

const resolvers = {
    Mutation: mutation,
    Query: query
};

const apolloServer = new ApolloServer({
    typeDefs: typeDefs ,
    resolvers,
    introspection: IS_DEV
});

export default apolloServer.createHandler();