
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import Resolvers from "./Resolvers";
import GreetService from "./GreetService";


const typeDefs = gql`
	type Query {
		hello(name : String) : String!,
		greeted (name: String) : String
	}

`;

const greetService = new  GreetService();

const resolvers = Resolvers(greetService);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context : function() {
		// console.log("...");
	}
});

const app = express();

apolloServer.applyMiddleware({
	app
});

const PORT = process.env.PORT || 3020 ;

app.listen(PORT, function() {
	console.log("Starting app on: " + PORT);
});