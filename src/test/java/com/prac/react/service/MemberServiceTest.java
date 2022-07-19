package com.prac.react.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.prac.react.model.dto.Member;

@SpringBootTest //DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional //테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class MemberServiceTest {

    @Autowired MemberService ms;

    Logger logger = LoggerFactory.getLogger(MemberServiceTest.class);

    @Test
    @DisplayName("특정 아이디의 유무를 확인하는 테스트") 
    void testCheckMember() {
        //given
        //새로운 멤버로 임의로 인스턴스를 생성한다.
        Member mb = new Member(0,"hankgood95@gmail.com","이욱재",false);

        //when
        //이사람 아이디로 실제로 존재하는지 체크를 한다.
        int check = ms.checkMember(mb.getEmail());

        //then
        //결과  출력
        logger.info("result : "+ check);
    }
}
