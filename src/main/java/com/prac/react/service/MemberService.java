package com.prac.react.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.MemberDao;
import com.prac.react.model.dto.Member;

@Service
public class MemberService {
    
    MemberDao md;

    Logger logger = LoggerFactory.getLogger(MemberService.class);
    //MemberDao 인스턴스의 의존성 주입을 위해 생성자 안에서 집어 넣어주었습니다.
    //여기서 주의해야할점은 의존성 주입이 하나 이상일땐 @Autowired 어노테이션을 꼭 넣어줘야만 합니다.
    public MemberService(MemberDao md){
        this.md = md;
    }

    public Integer checkMember(String email){
        return md.checkMember(email);
    }
    public Integer checkNickName(String nickName){
        return md.checkNickName(nickName);
    }
    public int insertMember(Member member){
        return md.insertMember(member);
    }

    public Member login(Member loginTry) {
        return md.login(loginTry);
    }
}
