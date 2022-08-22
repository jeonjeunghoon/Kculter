import React from 'react';
import cryptoJs from 'crypto-js';

export function hashPwd(password) {

  const crypto = require('crypto');
  var shasum = crypto.createHash('sha256');
  shasum.update(password);

  var output = shasum.digest('hex');

  return output;
}
export default hashPwd;