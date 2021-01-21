export default interface GreetService {
	
	greet(name: string) : void;
	greeted(name: string): Promise<number>;

}