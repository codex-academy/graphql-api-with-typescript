import express from "express";
import apolloServer from "./ApolloServer";
import Resolvers, { IResolver } from "./Resolvers";
import GreetServicePostgres from "./greet/GreetServicePostgres";
import {Pool} from "pg";
import typeDefs from "./type-defs";

const app = express();
const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/greet-graphql';

const pool = new Pool({
	connectionString
});

const greetService = new  GreetServicePostgres(pool);
const resolvers = Resolvers(greetService);
const server = apolloServer(typeDefs, resolvers);

server.applyMiddleware({
	app
});

const PORT = process.env.PORT || 3020 ;

app.listen(PORT, function() {
	console.log("Starting app on: " + PORT);
});