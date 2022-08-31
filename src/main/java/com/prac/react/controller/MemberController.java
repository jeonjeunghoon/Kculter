package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.prac.react.model.dto.FrontMember;
import com.prac.react.model.dto.Member;
import com.prac.react.security.Encryption;
import com.prac.react.service.MemberService;
import com.prac.react.service.S3FileUploadService;

/* 이파일은 회원가입,로그인,회원정보수정 등등
 회원 정보와 관련된 일을 할때 들어올 Controller 입니다 */

@RestController
@RequestMapping("/member")
public class MemberController {

    // 로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(MemberController.class);
    // MemberService 의존성 주입을 위해 사용할 인스턴스
    private MemberService ms;
    private Encryption encrypt;
    private S3FileUploadService sfu;

    @Autowired
    public MemberController(MemberService ms, Encryption encrypt,S3FileUploadService sfu) {
        this.ms = ms; // 의존성 주입
        this.encrypt = encrypt;
        this.sfu = sfu;
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

    @GetMapping("/emaildup")
    public int checkEmail(@RequestParam("email") String email) {
        logger.info("Email : " + email);
        int result = ms.checkMember(email);
        return result;
    }

    @GetMapping("/nicknamedup")
    public int checkNickName(@RequestParam("nickname") String nickName) {
        logger.info("NickName : " + nickName);
        int result = ms.checkNickName(nickName);
        return result;
    }

    @PostMapping("/signup")
    public int insertMember(@RequestBody Member member) {
        logger.info(member.toString());

        member.setPf_image("https://kculter-image.s3.ap-northeast-2.amazonaws.com/user.png");
        String pwd = encrypt.aesDecrypt(member.getPwd()); // 대칭키로 복호화
        String enccryptPwd = encrypt.shaEncryption(pwd); // 복호화 한걸 sha256 암호화
        member.setPwd(enccryptPwd);

        logger.info("Member : " + member.toString());

        int result = ms.insertMember(member);
        if (result == 1) {
            return 200;
        } else {
            logger.error("SignUp Error!!");
            return 500;
        }
    }

    @GetMapping("/login")
    public FrontMember login(@RequestHeader("Authorization") String autho) {
        logger.info("Authorization : " + autho);

        String memberInform = encrypt.aesDecrypt(autho);
        String[] idPwd = memberInform.split("/");
        Member loginTry = new Member();
        loginTry.setEmail(idPwd[0]);
        loginTry.setPwd(encrypt.shaEncryption(idPwd[1])); // 받은 비밀번호 sha256 암호화
        Member authorizedUser = ms.login(loginTry);
        if(authorizedUser == null){
            logger.warn("No member info");
            return null;
        }else{
            String hashMemberNum = encrypt.aesEncrypt(Integer.toString(authorizedUser.getMemberNum()));
            String mgHash = encrypt.aesEncrypt(Integer.toString(authorizedUser.getMg()));
            FrontMember fm = new FrontMember(hashMemberNum, authorizedUser.getNickName(), authorizedUser.getPf_image(),mgHash);
            logger.info("Login User : "+fm.toString());
            return fm;
        }
    }

    //회원번호로 회원정보 조회 api
    @GetMapping("")
    public Member getMemberInfo(@RequestHeader("Authorization") String autho) {
        logger.info("Member info get login start!!!");

        int memberKeyNum = Integer.parseInt(encrypt.aesDecrypt(autho)); //멤버번호

        Member member = ms.getMemberInfo(memberKeyNum);

        //member 받아왔으니 이제 보내주자.
        if(member == null){
            logger.error("Error!!!! No member Info with memberNum");
            return null;
        }else{
            return member;
        }
    }

    //회원정보 변경 api
    @PutMapping("")
    public int updateMemberInfo(@RequestPart("formValue") Member member,@RequestPart(value="file", required=false) MultipartFile mpf) throws IOException{
        logger.info("Member update Start!!!");
        /*
         * formValue : {
                memberNumHash : 
                nickName : 
                countryCode : 
                gender : 
                pf_image : 
         * }
         * 이렇게 받을 예정임
         */
        //일단은 memberHash를 복호화 해야함
        int memberKeyNum =  Integer.parseInt(encrypt.aesDecrypt(member.getMemberNumHash()));
        member.setMemberNum(memberKeyNum);

        //이제 이미지를 저장하자.
        String imageUrl = sfu.uploadtoS3(mpf,"/pf-image");
        member.setPf_image(imageUrl);

        int result = ms.updateMember(member);
        if(result <= 0){
            logger.error("Update failure");
            return 500;
        }else{
            return 200;
        }
    }
    //비밀번호 확인 api
    //받아오는 값은 memberNum+pwd aes 해쉬한걸 가져옴
    @GetMapping("/pwd")
    public int checkPwd(@RequestHeader("Authorization") String autho){
        logger.info("Checking pwd!!!");
        String decrypt = encrypt.aesDecrypt(autho);

        String memberNumHash = decrypt.substring(0,decrypt.lastIndexOf("=")-1);
        String memberNum = encrypt.aesDecrypt(memberNumHash);
        logger.info("MemberNum : "+encrypt.aesDecrypt(memberNum));
        String pwd = decrypt.substring(decrypt.lastIndexOf("=")+1);
        logger.info("Pwd : "+pwd);

        Member member = new Member();
        member.setMemberNum(Integer.parseInt(memberNum));
        member.setPwd(encrypt.shaEncryption(pwd));

        Integer result = ms.checkPwd(member);
        if (result == null){
            logger.warn("No pwd found");
            return 401; //인증 실패
        }else{
            return 200; //성공
        }
    }

    //비밀번호 변경 api
    //받아오는 값은 memberNum+pwd aes 해쉬한걸 가져옴
    @PutMapping("/pwd")
    public int updatePwd(@RequestHeader("Authorization") String autho){
        logger.info("Changing pwd!!!");
        String decrypt = encrypt.aesDecrypt(autho);

        String memberNumHash = decrypt.substring(0,decrypt.lastIndexOf("=")-1);
        String memberNum = encrypt.aesDecrypt(memberNumHash);
        logger.info("MemberNum : "+encrypt.aesDecrypt(memberNum));
        String pwd = decrypt.substring(decrypt.lastIndexOf("=")+1);
        logger.info("Pwd : "+pwd);

        Member member = new Member();
        member.setMemberNum(Integer.parseInt(memberNum));
        member.setPwd(encrypt.shaEncryption(pwd));

        int result = ms.updatePwd(member);
        if(result <= 0){
            logger.error("Update failure");
            return 500; //서버
        }else{
            return 200; //성공
        }
    }

    //회원 탈퇴 api
    //멤버해쉬를 header로 받아옴
    @PutMapping("/secession")
    public int memberSecession(@RequestHeader("Authorization") String autho){
        logger.info("Member secession api start");

        int memberNum = Integer.parseInt(encrypt.aesDecrypt(autho));

        int result = ms.memberSecession(memberNum);

        if(result <= 0 || result > 1){
            logger.error("Error during member secession");
            return 500;
        }
        return 200;
    }

    //관리자 확인 api
    //멤버번호를 Authorization으로 받아옴
    @GetMapping("/mg")
    public int checkManager(@RequestHeader("Authorization") String autho){
        logger.info("Manager checking api start");

        int memberNum = Integer.parseInt(encrypt.aesDecrypt(autho));
        
        int result = ms.checkManager(memberNum);
        if(result == 0){
            logger.warn("No Authority to go manager");
            return 401;
        }else{
            return 200;
        }
    }
}
