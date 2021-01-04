
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";


const typeDefs = gql`
	type Query {
		hello : String!,
		bye (name: String) : String!
	}
`;

const resolvers = {
		Query : {
			hello : function() {
				return "Hello, world!"
			},
			bye : function(_, params) {
				return "Bye, " + params['name'] + "!"
			}
		}
	};

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
});

const app = express();

apolloServer.applyMiddleware({
	app
});

const PORT = process.env.PORT || 3020 ;

app.listen(PORT, function() {
	console.log("Starting app on: " + PORT);
});