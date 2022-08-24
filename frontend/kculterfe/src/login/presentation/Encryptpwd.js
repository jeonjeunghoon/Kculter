import React from 'react';
import cryptoJS from 'crypto-js'

export function hashPwd(email,pwd) {
  
  const secretKey = process.env.REACT_APP_AES_SECRET_KEY; //비밀키
  const iv = 'abcdefghijklmnop' // 16자리 iv

  const autho = cryptoJS.AES.encrypt(email+"/"+pwd, cryptoJS.enc.Utf8.parse(secretKey), {
    iv: cryptoJS.enc.Utf8.parse(iv),
    padding: cryptoJS.pad.Pkcs7,
    mode: cryptoJS.mode.CBC,
  });

  return autho.toString();
}
export default hashPwd;