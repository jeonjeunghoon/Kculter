package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Member;
import com.prac.react.security.Encryption;
import com.prac.react.service.MemberService;

/* 이파일은 회원가입,로그인,회원정보수정 등등
 회원 정보와 관련된 일을 할때 들어올 Controller 입니다 */

@RestController
@RequestMapping("/member/")
public class MemberController {

    // 로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(MemberController.class);
    // MemberService 의존성 주입을 위해 사용할 인스턴스
    private MemberService ms;
    private Encryption encrypt;

    @Autowired
    public MemberController(MemberService ms, Encryption encrypt) {
        this.ms = ms; // 의존성 주입
        this.encrypt = encrypt;
    }

    // @PostMapping("member")
    // public Member LoginMember(@RequestBody Member member){
    // //여기서는 일단 로그인 버튼을 누른 사용자가 우리 사이트에 회원가입된 사용자인지 체크할것입니다.
    // int check = ms.checkMember(member.getEmail());
    // if(check > 0){ //이미 우리 회원일때 접근
    // //이미 우리 회원이라면 여기서 얻은 Member 정보를 가지고 메인페이지로 이동을 해야한다.
    // return member;
    // }else{//처음 가입할때 접근
    // //우리 회원이 아니라면 아니라고 false를 주고 이제 회원가입 페이지로 이동을 해야한다.
    // member.setCheckMember(false);
    // return member;
    // }
    // }

    @GetMapping("emaildup")
    public int checkEmail(@RequestParam("email") String email) {
        logger.info("Email : " + email);
        int result = ms.checkMember(email);
        return result;
    }

    @GetMapping("nicknamedup")
    public int checkNickName(@RequestParam("nickname") String nickName) {
        logger.info("NickName : " + nickName);
        int result = ms.checkNickName(nickName);
        return 0;
    }

    @PostMapping("signup")
    public int insertMember(@RequestBody Member member) {
        logger.info(member.toString());

        member.setPf_image("https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png");
        String pwd = encrypt.shaEncryption(member.getPwd());
        member.setPwd(pwd);

        logger.info("Member : " + member.toString());

        int result = ms.insertMember(member);
        if (result == 1) {
            return 1;
        } else {
            return 500;
        }
    }

    @GetMapping("login")
    public Member login(@RequestHeader("Authorization") String autho) {
        logger.info("Authorization : " + autho);

        String memberInform = encrypt.aesDecrypt(autho);
        // 복호화를 했으니 이제는 입력받은것중 sql문이 있는지를 확인하고 이상한것이라면
        // 해당 IP를 차단하는거면 좋겠지만 그러지는 못할것같도 일단 그 값을 못받게하자.
        Member member = new Member(1, "irang4605@naver.com", "123", "jham", "KR", 23, "man", "www.dwd.com");

        return member;
    }
}
