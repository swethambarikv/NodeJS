const crypto = require('crypto');

// console.log(crypto.getHashes())
// console.log("\n\n",crypto.getCiphers())

const algorithm = 'aes-256-cbc';
let key='12345678123456781234567812345678'    //for aes algorithm the key must be 32 bytes
let iv =crypto.randomBytes(16);       //creates a random 16 bytes iv

// Encrypting
function encryptText(text){
const cipher = crypto.createCipheriv(algorithm,key,iv);
let encrypted = cipher.update(text,'utf8','hex');
encrypted += cipher.final('hex');
return encrypted;
}
console.log("Encrypted value :",encryptText("Kavya Mohanraj"));

//Decrypting
function decryptText(text){
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(text,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
    }
let encrypted = encryptText("Swethambari V");
console.log("Decrypted text  :",decryptText(encrypted));



