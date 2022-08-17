package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prac.react.service.SearchStayService;
import com.prac.react.service.SigunguService;


@WebMvcTest(NearController.class)
public class NearControllerTest {
	@Autowired
	MockMvc mvc;
	@Autowired
	ObjectMapper obm; // 클래스 형식 즉 json 형식으로 된 request를 String으로 변환 시켜주기 위해서 사용하는 인스턴스
	@MockBean
	private SigunguService ss;
	@MockBean
	private SearchStayService sss;

	@Test
	void testGetGeoInfo() throws Exception {
		// given
		String url = "/near/stay?lat=127&lng=37&address=대한민국 서울특별시 강동구";

		// when
		mvc.perform(get(url))
				.andExpect(status().isOk()) // status가 200이고
				.andDo(print()); // 요청받은것들으 print 해라
	}
}
