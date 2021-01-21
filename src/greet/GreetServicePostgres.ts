import GreetService from "./GreetService";
import {Pool} from "pg";

interface Greeted {
	id : number
	username : string
	counter : number
}

export default class GreetServicePostgres implements GreetService {

	private readonly findUserSQL = `select * from greeted where username = $1`;
	private readonly createUserSQL = `insert into greeted (username, counter) values ($1, $2)`;
	private readonly updateUserSQL = `update greeted set counter = counter + 1 where username = $1`;
	
	constructor(private  pool : Pool) {
	}

	greetedMap: Map<string, number> = new Map();

	async greet(name: string) {

		const findResult = await this.pool.query(this.findUserSQL, [name]);
		if (findResult.rowCount === 0) {
			await this.pool.query(this.createUserSQL, [name, 1])
		} else {
			await this.pool.query(this.updateUserSQL, [name])
		}
		
	}

	async greeted (name: string): Promise<number> {
		const findResult = await this.pool.query(this.findUserSQL, [name]);
		if (findResult.rows.length > 0) {
			const greetedRow = findResult.rows[0];
			return greetedRow.counter;
		}
		return 0;
	}

}
