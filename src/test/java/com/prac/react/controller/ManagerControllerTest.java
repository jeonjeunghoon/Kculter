package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;

@WebMvcTest(ManagerController.class)
public class ManagerControllerTest {

    @Autowired
    MockMvc mvc; 
    @Autowired
    ObjectMapper obm; 

    @Test
    void testInsertCultureInfo() throws Exception{
        // given
        Culture culture = new Culture(0,"한복체험",0,1,"한복체험하는곳이다.","C:\\fakepath\\매트릭스.png");

        String requestBody = obm.writeValueAsString(culture);
        mvc.perform(post("/manager/cultureinfo")
                .content(requestBody)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()) //status가 200이고//content안에 .com이 있다면 
                .andDo(print()); //요청받은것들으 print 해라        
    }

    @Test
    void testInsertKpopInfo() throws Exception{
        Celebrity celeb = new Celebrity(0,"BTS",0,1,"BTS 짱","C:\\fakepath\\매트릭스.png");

        String requestBody = obm.writeValueAsString(celeb);
        mvc.perform(post("/manager/cultureinfo")
                .content(requestBody)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()) //status가 200이고//content안에 .com이 있다면 
                .andDo(print()); //요청받은것들으 print 해라  
    }
}
