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
        String ecrypt = "0";
        //when
        String decrypt = ec.aesDecrypt(ecrypt);
        //then
        // logger.info("Decrypt 1: "+decrypt);
        // String memberNum = decrypt.substring(0,decrypt.lastIndexOf("=")-1);
        // logger.info("MemberNum : "+ec.aesDecrypt(memberNum));
        // String pwd = decrypt.substring(decrypt.lastIndexOf("=")+1);
        // logger.info("Pwd : "+pwd);

        logger.info("Devrypt : "+decrypt);
    }

    @Test
    void testAesEncrypt(){
        //given
        int key = 1;
        String keyString = Integer.toString(key);
        //when
        String encrypt = ec.aesEncrypt(keyString);
        String pwd = "ed0119";
        String plus = encrypt+pwd;
        logger.info(plus);
        String hash = plus.substring(0,plus.lastIndexOf("=")+1);
        String pwd2 = plus.substring(plus.lastIndexOf("=")+1);
        logger.info(hash);
        logger.info(pwd2);
        //then
        logger.info("Encrypt : "+encrypt);

    }
    @Test
    void testShaEncryption() {
        //given
        String  pwd = "-dldnrwo9595";
        //when
        String encrypt = ec.shaEncryption(pwd);
        //then
        logger.info(encrypt);

    }
}
