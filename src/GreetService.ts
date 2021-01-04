

export default class GreetService {

	greetedMap: Map<string, number> = new Map();

	greet(name: string) {

		this.greetedMap.set(name, (this.greetedMap.get(name) ?? 0) + 1);

	}

	greeted(name: string): number {
		return this.greetedMap.get(name) ?? 0;
	}

}
