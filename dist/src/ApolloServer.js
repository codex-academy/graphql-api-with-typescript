"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
function default_1(typeDefs, resolvers) {
    var apolloServer = new apollo_server_express_1.ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        context: function () {
        }
    });
    return apolloServer;
}
exports.default = default_1;
