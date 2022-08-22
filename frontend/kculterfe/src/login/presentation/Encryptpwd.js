import React from 'react';
import cryptojs from 'crypto-js'

export function hashPwd(email,pwd) {
  const autho = CryptoJS.AES.encrypt(email+pwd, 'secret key').toString();
  return autho;
}
export default hashPwd;