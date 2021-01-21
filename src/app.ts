
import express from "express";
import apolloServer from "./ApolloServer";

const app = express();

apolloServer.applyMiddleware({
	app
});

const PORT = process.env.PORT || 3020 ;

app.listen(PORT, function() {
	console.log("Starting app on: " + PORT);
});