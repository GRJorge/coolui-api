import bcrypt from 'bcrypt';

export function encrypt(plainText: string, saltRounds: number): Promise<string> {
    return bcrypt.hash(plainText, saltRounds);
}
