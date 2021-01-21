import { assertAbstractType } from "graphql";

import * as assert from "assert";
import Resolvers, { IResolver } from "../src/Resolvers";
import GreetServiceImpl from "../src/greet/GreetServiceImpl";
import typeDefs from "../src/type-defs";
import apolloServer from "../src/ApolloServer";
const { createTestClient } = require('apollo-server-testing');

const resolvers = Resolvers(new GreetServiceImpl());
const server = apolloServer(typeDefs, resolvers);

describe("The first test", function() {

	const { query } = createTestClient(server);

	it("should say hello to Elsa", async function() {

		const result = await query({
				query : `query hello {
					hello(name : "Elsa")
				  }`
			}
		);

		assert.strictEqual("Hello, Elsa!", result.data.hello);
	});

	it("should say know Elsa was greeted once", async function() {

		const result = await query({
			query : `query greeted {
					greeted(name : "Elsa")
				  }`
			}
		);

		assert.strictEqual("Elsa was greeted 1 times", result.data.greeted);
	});


});