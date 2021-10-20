import { hash } from 'bcrypt';

class BcryptHash {
	public async generateHash(payload: string): Promise<string> {
		return hash(payload, 10);
	}
}


export default BcryptHash;
