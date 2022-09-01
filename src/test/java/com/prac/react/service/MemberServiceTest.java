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

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class MemberServiceTest {

    @Autowired MemberService ms;
    @Autowired Encryption encryption;

    Logger logger = LoggerFactory.getLogger(MemberServiceTest.class);

    // @Test
    // @DisplayName("특정 아이디의 유무를 확인하는 테스트") 
    // void testCheckMember() {
    //     //given
    //     //새로운 멤버로 임의로 인스턴스를 생성한다.
    //     Member mb = new Member(0,"hankgood95@gmail.com","이욱재",false);

    //     //when
    //     //이사람 아이디로 실제로 존재하는지 체크를 한다.
    //     int check = ms.checkMember(mb.getEmail());

    //     //then
    //     //결과  출력
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
        Member member = new Member(1, "", "", "nickName", "KR", 0, "male", "test");
        //when
        int result = ms.updateMember(member);
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
