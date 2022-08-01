package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.FileInputStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

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
        Culture culture = new Culture(0,"한복체험",0,1,"한복체험하는곳이다.","");
        //매개변수 뜻은 키값, 원본 파일명, 미디어타입, 파일경로를 뜻한다.
        MockMultipartFile image = new MockMultipartFile("file", "bts로고.jpg", "image/jpeg", new FileInputStream("C:\\Users\\LG\\Pictures\\관광공모전\\bts로고.jpg"));
        //임의의 json 파일을 만들었다. 매개변수는 키값, 원본파일명, 미디어타입, 들어갈값 위랑 비슷한대 json에선 실제로 json 값을 넣어주고 그걸 바이너리 데이터로 변환하기 위해 .getBytes() 를 한다.
        //json의 형식을 아래와 같다.
        /*            
            "{\"
                name\ ": \" 이욱재\ ", \"
                explain\ ": \" 123\ 
            "}"

            이 방식이 json을 문자열화한 모습이다.
            그리고 이를 가지고 바이트 코드로 변환을 해줘야 한다.
            왜냐면 MockMultipartFile 마지막엔 FileInputStream을 넣어줘야 하기 때문에 getBytes()를 사용해서 바이트 단위로 넘긴것이다.
            
        */ 
        MockMultipartFile json = new MockMultipartFile("formValue", "","application/json", "{\"name\": \"이욱재\", \"explain\": \"123\"}".getBytes());

        String requestBody = obm.writeValueAsString(culture);
        mvc.perform(
            MockMvcRequestBuilders.multipart("/manager/cultureinfo")
            .file(image)
            .file(json))
            .andExpect(status().isOk());

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
