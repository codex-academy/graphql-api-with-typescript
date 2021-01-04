"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Query {\n\t\thello : String!,\n\t\tbye (name: String) : String!\n\t}\n"], ["\n\ttype Query {\n\t\thello : String!,\n\t\tbye (name: String) : String!\n\t}\n"])));
var resolvers = {
    Query: {
        hello: function () {
            return "Hello, world!";
        },
        bye: function (_, params) {
            return "Bye, " + params['name'] + "!";
        }
    }
};
var apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
var app = express_1.default();
apolloServer.applyMiddleware({
    app: app
});
var PORT = process.env.PORT || 3020;
app.listen(PORT, function () {
    console.log("Starting app on: " + PORT);
});
var templateObject_1;
