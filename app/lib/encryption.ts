import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16;

const generateKey = (userID: string) => {
    //Using a hashing algorithm to get a fixed-length key from user ID
    return crypto.createHash('sha256').update(userID).digest('base64').substring(0, 32);
};

// Encrypt function
export const encryptPassword = (password: string, userID: string) => {
    const key = generateKey(userID);
    const iv = crypto.randomBytes(IV_LENGTH);

    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted+=cipher.final('hex');

    // Return both the IV and the encrypted password
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
};

// Decrypt function
export const decryptPassword = (encryptedPassword: string, ivHex: string, userId: string) => {
    const key = generateKey(userId);
    const iv = Buffer.from(ivHex, 'hex');

    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;

};