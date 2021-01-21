"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ApolloServer_1 = __importDefault(require("./ApolloServer"));
var Resolvers_1 = __importDefault(require("./Resolvers"));
var GreetServicePostgres_1 = __importDefault(require("./greet/GreetServicePostgres"));
var pg_1 = require("pg");
var type_defs_1 = __importDefault(require("./type-defs"));
var app = express_1.default();
var connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/greet-graphql';
var pool = new pg_1.Pool({
    connectionString: connectionString
});
var greetService = new GreetServicePostgres_1.default(pool);
var resolvers = Resolvers_1.default(greetService);
var server = ApolloServer_1.default(type_defs_1.default, resolvers);
server.applyMiddleware({
    app: app
});
var PORT = process.env.PORT || 3020;
app.listen(PORT, function () {
    console.log("Starting app on: " + PORT);
});
