package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.FileInputStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;
import com.prac.react.service.ManagerService;
import com.prac.react.service.S3FileUploadService;


@WebMvcTest(ManagerController.class)
public class ManagerControllerTest {

    @Autowired
    MockMvc mvc; 
    @Autowired
    ObjectMapper obm; 
    @MockBean //WebMvcTest를 하게 되면 @Component and @ConfigurationProperties bean이 등록이 되지 않는다고 한다 따라서 @Service도 등록이 되지 않기에 @MockBean을 사용해야한다.
    S3FileUploadService sfu;
    @MockBean
    private ManagerService ms;

    @Test
    void testInsertCultureInfo() throws Exception{
        // given
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

        mvc.perform(
            MockMvcRequestBuilders.multipart("/manager/cultureinfo")
            .file(image) //image값 넘기고
            .file(json)) //json 값 넘기고
            .andExpect(status().isOk())//200을 예상한다. 이게 아니라면 error
            .andDo(print()); //그리고 마지막에 print로 모든 request와 reponse 출력

    }

    @Test
    void testInsertKpopInfo() throws Exception{

        //given
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

        mvc.perform(
            MockMvcRequestBuilders.multipart("/manager/kpopinfo")
            .file(image) //image값 넘기고
            .file(json)) //json 값 넘기고
            .andExpect(status().isOk())//200을 예상한다. 이게 아니라면 error
            .andDo(print()); //그리고 마지막에 print로 모든 request와 reponse 출력
    }

    @Test
    void insertPlace() throws Exception{
        MockMultipartFile image = new MockMultipartFile("file", "bts로고.jpg", "image/jpeg", new FileInputStream("C:\\Users\\LG\\Pictures\\관광공모전\\bts로고.jpg"));

        MockMultipartFile json = new MockMultipartFile("formValue", "","application/json", 
        "{\"name\": \"이욱재\", \"explain\": \"123\", \"placeTypeKey\": \"1\", \"culture\" : \"1\", \"kpop\" : \"1\", \"lat\" : \"123\", \"long\" :\"37\", \"address\" : \"test\"}".getBytes());

        mvc.perform(
            MockMvcRequestBuilders.multipart("/manager/place")
            .file(image) //image값 넘기고
            .file(json)) //json 값 넘기고
            .andExpect(status().isOk())//200을 예상한다. 이게 아니라면 error
            .andDo(print()); //그리고 마지막에 print로 모든 request와 reponse 출력
    }

    @Test
    void insertConcert() throws Exception{
        MockMultipartFile image = new MockMultipartFile("file", "bts로고.jpg", "image/jpeg", new FileInputStream("C:\\Users\\LG\\Pictures\\관광공모전\\bts로고.jpg"));

        MockMultipartFile json = new MockMultipartFile("formValue", "","application/json", 
        "{\"name\": \"이욱재\", \"explain\": \"123\", \"startDate\" : \"2022-08-11\", \"endDate\" : \"2022-08-11\", \"startName\" : \"starName\"}".getBytes());

        mvc.perform(
            MockMvcRequestBuilders.multipart("/manager/concert")
            .file(image) //image값 넘기고
            .file(json)) //json 값 넘기고
            .andExpect(status().isOk())//200을 예상한다. 이게 아니라면 error
            .andDo(print()); //그리고 마지막에 print로 모든 request와 reponse 출력
    }
}
