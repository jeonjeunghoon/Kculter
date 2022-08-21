package com.prac.react.security;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Encryption {
	public String encryption(String email) {
		try {
			//try catch로 하는 이유는 해당 알고리즘이 존재하지 않는 에러를 잡기위해서이다.
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(email.getBytes());
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
}
