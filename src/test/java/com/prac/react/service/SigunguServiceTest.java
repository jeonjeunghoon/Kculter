package com.prac.react.service;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest // DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional // 테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class SigunguServiceTest {

	Logger logger = LoggerFactory.getLogger(SigunguServiceTest.class);

	@Autowired
	SigunguService as;

	@Test
	void testGetAreacode() throws IOException {
		// when
		String code = as.getSigungu("송파구"); 
		// then
		logger.info("AreaCode : "+code);
	}
}
