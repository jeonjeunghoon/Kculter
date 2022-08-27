package com.prac.react.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.prac.react.model.dto.SecretKey;

@Component
public class Encryption {
	private SecretKey sk;
	private String iv = "abcdefghijklmnop"; // 16자리 iv

	Logger logger = LoggerFactory.getLogger(Encryption.class);

	public Encryption(){}

	@Autowired
	public Encryption(SecretKey sk){
		this.sk = sk;
	}

	public String shaEncryption(String pwd) {
		try {
			String pwdSalt = sk.getSecretKey()+pwd;
			//try catch로 하는 이유는 해당 알고리즘이 존재하지 않는 에러를 잡기위해서이다.
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(pwdSalt.getBytes());
			byte byteData[] = md.digest();
			
			StringBuffer sb = new StringBuffer();//이건 문자열을 추가하거나 변경할때 주로 사용하는 클래스이다.
			
			for(int i = 0; i<byteData.length;i++) {
				sb.append(Integer.toString((byteData[i] & 0xff)+0x100,16).substring(1));
			}
			
			StringBuffer hexString = new StringBuffer();
			
			for(int i = 0; i<byteData.length;i++) {
				String hex = Integer.toHexString(0xff & byteData[i]);
				if(hex.length() == 1) {
					hexString.append('0');
				}
				hexString.append(hex);
			}
			
			
			//위의 과정들을 거쳐서 이메일을 sha256으로 변환해주는 역할을 해준다.
			return hexString.toString();
			
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException();
		} 
	}

		//암호화
		public String aesEncrypt(String key) {
			try {
				Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
				cipher.init(Cipher.ENCRYPT_MODE, 
							new SecretKeySpec(sk.getSecretKey().getBytes(), "AES"),
							new IvParameterSpec(iv.getBytes()));
				
				return new String(Base64.getEncoder().encode(cipher.doFinal(key.getBytes("UTF-8"))));
			} catch(Exception e) { 
				return key;
			}
		}		

		// 복호화
		public String aesDecrypt(String encryptedText) {
			logger.info("autho : "+encryptedText);
			try {
				Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
				cipher.init(Cipher.DECRYPT_MODE,
							new SecretKeySpec(sk.getSecretKey().getBytes(), "AES"),
							new IvParameterSpec(iv.getBytes()));
				
				return new String(cipher.doFinal(Base64.getDecoder().decode(encryptedText.getBytes("UTF-8"))));
			} catch(Exception e) {
				logger.info("Exception occur : "+e.toString());
				return encryptedText;
			}
		}

		
}
