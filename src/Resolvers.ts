import GreetService from "./GreetService";

interface NameValue {
	name : string
}

interface None {

}

export default function Resolvers(greetService: GreetService) {
	return {
		Query: {
			hello: function (_: None, params: NameValue) {

				greetService.greet(params.name);

				return `Hello, ${params.name}!`;
			},
			greeted: function (_: None, params: NameValue): string {

				const qty = greetService.greeted(params.name);

				if (!qty) {
					return "Nope!";
				}

				return `${params.name} was greeted ${qty} times`;
			}
		}
	};
}
