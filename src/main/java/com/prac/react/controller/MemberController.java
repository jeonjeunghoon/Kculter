package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

 @CrossOrigin(origins = {"https://kculter.com","http://localhost:3000"})
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

        member.setPfUrl("https://kculter-images.s3.ap-northeast-2.amazonaws.com/user.png");
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
            logger.info("Member Get : "+authorizedUser.toString());
            String hashMemberNum = encrypt.aesEncrypt(Integer.toString(authorizedUser.getMemberNum()));
            String mgHash = encrypt.aesEncrypt(Integer.toString(authorizedUser.getMg()));
            FrontMember fm = new FrontMember(hashMemberNum, authorizedUser.getNickName(), authorizedUser.getPfUrl(),mgHash);
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
        logger.info("MemberKeyNum : "+memberKeyNum);

        Member oldMember = ms.getMemberInfo(memberKeyNum); //기존 회원의 정보를 가져온다.

        logger.info("Old member : "+oldMember.toString());

        if(mpf == null){ //프로필 이미지가 비어있다면 즉 프로필 사진 변경을 안했다면 진입
            logger.warn("No profile image to update");
            member.setPfUrl(oldMember.getPfUrl());
        }else{//프로필 이미지 변경했다면 진입
            String imageUrl = sfu.uploadtoS3(mpf,"/pf-image");
            member.setPfUrl(imageUrl);            
        }

        logger.info("Update member info : "+ member.toString());

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

        String memberNumHash = decrypt.substring(0,decrypt.lastIndexOf("=")+1); //0부터 = 되기 전까지를 가져옴
        String memberNum = encrypt.aesDecrypt(memberNumHash);
        logger.info("MemberNum : "+memberNum);
        String pwd = decrypt.substring(decrypt.lastIndexOf("=")+1);
        logger.info("Pwd : "+pwd);

        Member member = new Member();
        member.setMemberNum(Integer.parseInt(memberNum));
        member.setPwd(encrypt.shaEncryption(pwd));
        logger.info("Check Pwd member : "+member.toString());
        Integer result = ms.checkPwd(member);
        if (result == 0){
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

        String memberNumHash = decrypt.substring(0,decrypt.lastIndexOf("=")+1);
        String memberNum = encrypt.aesDecrypt(memberNumHash);
        logger.info("MemberNum : "+memberNum);
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
            logger.info("Update success");
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
