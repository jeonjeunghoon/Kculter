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
        String ecrypt = "HyG147CoZFG64WjRbGJ8VoKBUTVBAe3x87RiYSdlNNc=";
        //when
        String decrypt = ec.aesDecrypt(ecrypt);
        //then
        logger.info("Devrypt : "+decrypt);
    }

    @Test
    void testShaEncryption() {

    }
}
