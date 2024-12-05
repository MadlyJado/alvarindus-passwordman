import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // Ensure this key is securely stored and retrieved

export function encryptPassword(password: string): string {
    const salt = crypto.randomBytes(16); // Generate a random salt
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(password+salt.toString(), 'utf8'), ,  cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decryptPassword(encryptedData: string): string {
    const [ivHex, encryptedHex] = encryptedData.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
}