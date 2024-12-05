import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const keyLength = 32;
const iterations = 100000;
const digest = 'sha256';

function deriveKey(passphrase: string, salt: string): Buffer {
    return crypto.pbkdf2Sync(passphrase, salt, iterations, keyLength, digest);
}

export function encryptPassword(password: string, passphrase: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const key = deriveKey(passphrase, salt);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(password, 'utf8'), cipher.final()]);

    return `${salt}:${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

export function decryptPassword(encryptedData: string, passphrase: string): string {
    const [salt, ivHex, encryptedHex] = encryptedData.split(':');
    const key = deriveKey(passphrase, salt);
    const iv = Buffer.from(ivHex, 'hex');
    const encrypted = Buffer.from(encryptedHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
    return decrypted.toString('utf8');
}
