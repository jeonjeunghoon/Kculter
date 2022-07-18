package com.prac.react.mysqlcheck;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class MySqlConnectionTest {
    private final String DRIVER = "com.mysql.jdbc.Driver"; //mysql 드라이버 생성 주소?
	private final String URL = "jdbc:mysql://127.0.0.1:3306/tm"; //mysql 주소
	private final String USER = "root"; //mysql user id
	private final String PWD = "mysqlwkd9595"; //mysql user pwd
	
	Logger logger = LoggerFactory.getLogger(MySqlConnectionTest.class);
	
	@Test
	@DisplayName("MySql 연결 확인 테스트")
	public void testConnection() throws Exception{
		
		boolean flag = true;
		
		Class.forName(DRIVER); //위에서의 정보르들을 가지고 해당 driver를 JVM에 등록시키는것
		try(Connection con = DriverManager.getConnection(URL,USER,PWD)){
			logger.info(con.toString()); //콘솔창에서 연결정보 
		}catch(Exception e) {
			logger.error("연결 실패");
			flag = false;
			assertTrue(flag);
		}	
	}
}
