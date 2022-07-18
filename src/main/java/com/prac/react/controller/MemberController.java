package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Member;
import com.prac.react.service.MemberService;

/* 이파일은 회원가입,로그인,회원정보수정 등등
 회원 정보와 관련된 일을 할때 들어올 Controller 입니다 */

@RestController
public class MemberController {

    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(MemberController.class);
    //MemberService 의존성 주입을 위해 사용할 인스턴스
    MemberService ms;

    public MemberController(MemberService ms){
        this.ms = ms; //의존성 주입
    }

    @PostMapping("member")
    public int SignInMember(@RequestBody Member member){
        //여기서는 일단 로그인 버튼을 누른 사용자가 우리 사이트에 회원가입된 사용자인지 체크할것입니다.
        
        if(ms.checkMember(member.getEmail()) > 0){ //이미 우리 회원일때 접근

        }else{//처음 가입할때 접근

        }
        return 1;
    }
}
