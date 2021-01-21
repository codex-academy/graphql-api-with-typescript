import GreetService from "./greet/GreetService";

interface NameValue {
	name : string
}
interface None {

}
export interface IQuery {
	hello (_: None, params: NameValue) : Promise<string>
	greeted (_: None, params: NameValue): Promise<string>

}
export  interface IResolver {
	Query :IQuery
}

export default function Resolvers(greetService: GreetService) : IResolver {
	return {
		Query: {
			hello: async function (_: None, params: NameValue) {

				await greetService.greet(params.name);

				return `Hello, ${params.name}!`;
			},
			greeted: async function (_: None, params: NameValue): Promise<string> {

				const qty = await greetService.greeted(params.name);

				if (!qty) {
					return "Nope!";
				}

				return `${params.name} was greeted ${qty} times`;
			}
		}
	};
}
