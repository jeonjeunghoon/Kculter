package com.prac.react.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Member;
import com.prac.react.security.Encryption;

@SpringBootTest //DBê¹Œì?? ?…Œ?Š¤?Š¸?•˜?Š” ?†µ?•© ?…Œ?Š¤?Š¸ë¥? ?•˜? ¤ë©? ?‚¬?š©?•´?•¼?•  ?–´?…¸?…Œ?´?…˜
@Transactional //?…Œ?Š¤?Š¸ ?ƒ?™©?—?„œ ?‚½?…?˜?–´ì§??Š” ?°?´?„°ë¥? ë¡¤ë°±?•˜ê¸? ?œ„?•´?„œ ?‚¬?š©?•˜?Š” ?–´?…¸?…Œ?´?…˜
public class MemberServiceTest {

    @Autowired MemberService ms;
    @Autowired Encryption encryption;

    Logger logger = LoggerFactory.getLogger(MemberServiceTest.class);

    // @Test
    // @DisplayName("?Š¹? • ?•„?´?””?˜ ?œ ë¬´ë?? ?™•?¸?•˜?Š” ?…Œ?Š¤?Š¸") 
    // void testCheckMember() {
    //     //given
    //     //?ƒˆë¡œìš´ ë©¤ë²„ë¡? ?„?˜ë¡? ?¸?Š¤?„´?Š¤ë¥? ?ƒ?„±?•œ?‹¤.
    //     Member mb = new Member(0,"hankgood95@gmail.com","?´?š±?¬",false);

    //     //when
    //     //?´?‚¬?Œ ?•„?´?””ë¡? ?‹¤? œë¡? ì¡´ì¬?•˜?Š”ì§? ì²´í¬ë¥? ?•œ?‹¤.
    //     int check = ms.checkMember(mb.getEmail());

    //     //then
    //     //ê²°ê³¼  ì¶œë ¥
    //     logger.info("result : "+ check);
    // }
    @Test
    void testCheckMember(){
        //given
        String email = "hankgood95@naver.com";
        //when
        int result = ms.checkMember(email);
        //then
        logger.info("Result : "+result);
    }
    
    @Test
    void testCheckNickName(){
        //given
        String nickName = "test";
        //when
        int result = ms.checkNickName(nickName);
        //then
        logger.info("Result : "+result);
    }

    @Test 
    void TestInsertMember(){
        //given
        Member member = new Member(0, "hankgood95@naver.com", "-dldnrwo9595", "asd", "KR", 28, "male", "https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png");

        //when
        int result = ms.insertMember(member);
        //then
        logger.info("Result : "+result);
    }
    @Test
    void testLogin(){
        //given
        String pwd = encryption.shaEncryption("-dldnrwo9595");
        Member member = new Member();
        member.setEmail("hankgood95@naver.com");
        member.setPwd(pwd);


        //when
        Member result = ms.login(member);

        //then
        if(result == null){
            logger.info("ID or Pwd is not correct");
        }else{
            logger.info("Member : "+ result.toString());
        }

    }
    @Test
    void testGetMemberInfo(){
        //given
        int keyNum = 1;
        //when
        Member member = ms.getMemberInfo(keyNum);
        logger.info(member.toString());
        //then
        assertNotNull(member);
    }
    @Test
    void testUpdateMember(){
        //given
        Member member = new Member(2, "", "", "nickName", "KR", 0, "male", "test");
        //when
        int result = ms.updateMember(member);
        Member temp = ms.getMemberInfo(2);
        logger.info(temp.toString());
        //then
        assertEquals(result, 1);
    }
    @Test
    void testCheckPwd(){
        //given
        Member member = new Member();
        member.setMemberNum(1);
        member.setPwd("bade96ec9deb0adb28d2d82800194776b1329f3bd54366f338a5567a473f0df1");

        //when
        Integer result = ms.checkPwd(member);

        //then
        assertNotNull(result);
    }
    @Test
    void testUpdatePwd(){
        //given
        Member member = new Member();
        member.setMemberNum(1);
        member.setPwd("test");

        //when
        int result = ms.updatePwd(member);
        
        //then
        assertEquals(result, 1);
    }

    @Test
    void testMemberSecession(){
        //given
        int memberNum = 1;

        //when
        int result = ms.memberSecession(memberNum);

        //then
        assertEquals(result, 1);
    }

    @Test
    void testCheckManager(){
        //given
        int memberNum = 1;

        //when
        int result = ms.checkManager(memberNum);

        //then
        assertEquals(result, 0);
    }
}
