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
var Resolvers_1 = __importDefault(require("./Resolvers"));
var GreetService_1 = __importDefault(require("./GreetService"));
var typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ttype Query {\n\t\thello(name : String) : String!,\n\t\tgreeted (name: String) : String\n\t}\n\n"], ["\n\ttype Query {\n\t\thello(name : String) : String!,\n\t\tgreeted (name: String) : String\n\t}\n\n"])));
var greetService = new GreetService_1.default();
var resolvers = Resolvers_1.default(greetService);
var apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: function () {
        // console.log("...");
    }
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
