import GreetService from "./GreetService";

export default class GreetServiceImpl implements GreetService {

	greetedMap: Map<string, number> = new Map();

	greet(name: string) {

		this.greetedMap.set(name, (this.greetedMap.get(name) ?? 0) + 1);

	}

	greeted(name: string): Promise<number> {
		return Promise.resolve(this.greetedMap.get(name) ?? 0);
	}

}
