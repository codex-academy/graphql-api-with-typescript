import { gql } from "apollo-server-express";

const typeDefs = gql`
	type Query {
		hello(name : String) : String!,
		greeted (name: String) : String
	}

`;

export default typeDefs;