const {ApolloServer} = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')



//servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//iniciar servidor
server.listen().then(({url}) => {
    console.log(`Servidor iniciado en ${url}`);
});
