import { ApolloServer} from "apollo-server-express";
import Resolvers from "./Resolvers";
import GreetService from "./GreetService";
import typeDefs from "./type-defs";

const greetService = new  GreetService();
const resolvers = Resolvers(greetService);

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context : function() {
	}
});

export default apolloServer;