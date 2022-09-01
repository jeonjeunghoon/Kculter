import cryptoJs from 'crypto-js';

const secretKey = process.env.REACT_APP_AES_SECRET_KEY; //비밀키
const iv = 'AlyjNGZKzkfEsasZ' // 16자리 iv

// 복호화
export function decrypt(encryptedText){
    const decipher = cryptoJs.AES.decrypt(encryptedText, cryptoJs.enc.Utf8.parse(secretKey), {
        iv: cryptoJs.enc.Utf8.parse(iv),
        padding: cryptoJs.pad.Pkcs7,
        mode: cryptoJs.mode.CBC,
    })

    return decipher.toString(cryptoJs.enc.Utf8);
}