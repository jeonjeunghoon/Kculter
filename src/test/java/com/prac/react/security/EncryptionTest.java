package com.prac.react.security;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.prac.react.model.dto.SecretKey;

@SpringBootTest
public class EncryptionTest {

    Logger logger = LoggerFactory.getLogger(EncryptionTest.class);
    
    @Autowired
    SecretKey sk;
    @Autowired
    Encryption ec;

    @Test
    void testAesDecrypt() {
        //given
        String ecrypt = "/Y8NsMQnOIFG HP2F5Cc2Q==";
        //when
        String decrypt = ec.aesDecrypt(ecrypt);
        //then
        logger.info("Devrypt : "+decrypt);
    }

    @Test
    void testAesEncrypt(){
        //given
        int key = 30;
        String keyString = Integer.toString(key);
        //when
        String encrypt = ec.aesEncrypt(keyString);
        //then
        logger.info("Encrypt : "+encrypt);

    }
    @Test
    void testShaEncryption() {

    }
}
