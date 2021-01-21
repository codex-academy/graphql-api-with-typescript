import { ApolloServer, IResolvers} from "apollo-server-express";
import { DocumentNode } from "graphql";

export default  function  (typeDefs : DocumentNode, resolvers: IResolvers) {

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers,
		context : function() {
		}
	});
	
	return apolloServer;

}