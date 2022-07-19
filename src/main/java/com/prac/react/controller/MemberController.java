package com.prac.react.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import main.java.com.prac.react.model.dto.Member;

/* 이파일은 회원가입,로그인,회원정보수정 등등
 회원 정보와 관련된 일을 할때 들어올 Controller 입니다 */

@RestController
public class MemberController {

    //로그를 찍어보기 위해서 만든 인스턴스

    @PostMapping("member")
    public int checkMember(@RequestBody Member member){
        //여기서는 일단 로그인 버튼을 누른 사용자가 우리 사이트에 회원가입된 사용자인지 체크할것이다.
        //일단은 react에서 받은 정보를 한번 출력해보자.
        System.out.println("Hello : "+ member.toString());
        return 1;
    }
}
