package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prac.react.model.dto.Member;
import com.prac.react.service.MemberService;
import com.prac.react.service.MemberServiceTest;



@WebMvcTest(MemberController.class) // Controller를 테스트 해보려면 위 어노테이션을 사용해야지만 된다. 이 어노테이션은 단위 테스트를 위한 어노테이션이다.
//단위 테스트는 특정 부분만의 코드를 확인하는 테스트로써 특정코드만 즉 여기선 컨트롤러 코드만 테스트 해볼수가 있다.
public class MemberControllerTest {

    @Autowired
    MockMvc mvc; // 가상의 http request를 테스트 할때 만들기 위해서 사용하는 인스턴스
    @Autowired
    ObjectMapper obm; // 클래스 형식 즉 json 형식으로 된 request를 String으로 변환 시켜주기 위해서 사용하는 인스턴스
    @MockBean //WebMvcTest를 하게 되면 @Component and @ConfigurationProperties bean이 등록이 되지 않는다고 한다 따라서 @Service도 등록이 되지 않기에 @MockBean을 사용해야한다.
    MemberService ms;

    Logger logger = LoggerFactory.getLogger(MemberServiceTest.class);

    @Test
    @DisplayName("Controller의 요청왔을때의 단위테스트") // 회원이 로그인 버튼을 눌렀을때를 가정
    void TestLoginMember() throws Exception {
        // given
        Member mb = new Member(1, "hankgood95@gmail.com", "이욱재", true);

        String requestBody = obm.writeValueAsString(mb);
        mvc.perform(post("/member")
                .content(requestBody)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()) //status가 200이고//content안에 .com이 있다면 
                .andDo(print()); //요청받은것들으 print 해라
    }

    @Test
    void testCheckEmail() throws Exception{
        //given
        String url = "/member/emaildup?email=hankgood95@naver.com";

        
		// when
		mvc.perform(get(url))
        .andExpect(status().isOk()) // status�� 200�̰�
        .andDo(print()); // ��û�����͵��� print �ض�
    }
}
