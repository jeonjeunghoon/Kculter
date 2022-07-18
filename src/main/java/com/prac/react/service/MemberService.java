package com.prac.react.service;

import org.springframework.stereotype.Service;

import com.prac.react.model.dao.MemberDao;

@Service
public class MemberService {
    
    MemberDao md;

    //MemberDao 인스턴스의 의존성 주입을 위해 생성자 안에서 집어 넣어주었습니다.
    //여기서 주의해야할점은 의존성 주입이 하나 이상일땐 @Autowired 어노테이션을 꼭 넣어줘야만 합니다.
    public MemberService(MemberDao md){
        this.md = md;
    }

    public int checkMember(String email){
        return md.checkMember(email);
    }
}
