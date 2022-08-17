package com.prac.react.service;

import java.io.FileInputStream;
import java.io.IOException;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class S3FileUploadServiceTest {

    @Autowired
    private S3FileUploadService sfuf;
    
    Logger logger = LoggerFactory.getLogger(S3FileUploadServiceTest.class);

    @Test
    @DisplayName("s3 import 테스트")
    void testUploadtoS3() throws IOException{
        //given
        //임의의 파일을 만든다.
        MockMultipartFile image = new MockMultipartFile("file", "bts로고.jpg", "image/jpeg", new FileInputStream("C:\\Users\\LG\\Pictures\\관광공모전\\bts로고.jpg"));

        //when 
        String url = sfuf.uploadtoS3(image, "/culture-img");
        
        //then
        logger.info("url : "+url);

    }  
}
