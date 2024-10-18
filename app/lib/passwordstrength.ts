
const specialChars = "[]!@#$%^&*(),.?{}/_-+=`~";
const numsChars = "0123456789";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function isPasswordStrong(password: string): number {
    if (password.length < 8) {
        return 0;
    }

    let hasSpecialChar = false;
    let hasNum = false;
    let hasLower = false;
    let hasUpper = false;

    for (const char of password) {
        if (specialChars.includes(char)) {
            hasSpecialChar = true;
        }
        if (numsChars.includes(char)) {
            hasNum = true;
        }
        if (lowerChars.includes(char)) {
            hasLower = true;
        }
        if (upperChars.includes(char)) {
            hasUpper = true;
        }
    }

    if(hasSpecialChar && hasNum && hasLower && hasUpper) {
        return 100;
    }
    else if(hasNum && hasLower && hasUpper) {
        return 55;
    }
    else if(hasSpecialChar && hasUpper && hasNum) {
        return 65;
    }
    else if(hasSpecialChar && hasLower && hasUpper) { 
        return 70;
    }
    else {
        return 35;
    }
}