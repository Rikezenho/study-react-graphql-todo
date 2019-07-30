require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const {
    MONGODB_HOST,
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
} = process.env;

mongoose.connect(`mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}`, {
    useNewUrlParser: true,
});

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`);
});