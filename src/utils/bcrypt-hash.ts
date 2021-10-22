import bcrypt from 'bcrypt';

class BcryptHash {
	public async generateHash(payload: string): Promise<string> {
		return bcrypt.hash(payload, 10);
	}
}


export default BcryptHash;
