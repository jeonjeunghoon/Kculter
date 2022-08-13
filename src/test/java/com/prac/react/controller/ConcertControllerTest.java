package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prac.react.service.ConcertService;
import com.prac.react.service.MemberServiceTest;

@WebMvcTest(ConcertController.class)
public class ConcertControllerTest {

    @Autowired
    MockMvc mvc; // 가상의 http request를 테스트 할때 만들기 위해서 사용하는 인스턴스
    @Autowired
    ObjectMapper obm; // 클래스 형식 즉 json 형식으로 된 request를 String으로 변환 시켜주기 위해서 사용하는 인스턴스
    @MockBean //WebMvcTest를 하게 되면 @Component and @ConfigurationProperties bean이 등록이 되지 않는다고 한다 따라서 @Service도 등록이 되지 않기에 @MockBean을 사용해야한다.
    ConcertService cs;

    Logger logger = LoggerFactory.getLogger(ConcertControllerTest.class);

    @Test
    void testGetConcertList() throws Exception{
        mvc.perform(get("/concerts"))
            .andExpect(status().isOk())
            .andDo(print());
    }
}
