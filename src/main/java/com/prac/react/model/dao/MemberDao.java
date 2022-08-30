package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Member;

@Mapper
public interface MemberDao {
    Integer	checkMember(String email);
    Integer checkNickName(String nickName);
    int insertMember(Member member);
    Member login(Member loginTry);
    Member getMemberInfo(int memberKeyNum);
    int updateMember(Member member);
    Integer checkPwd(Member member);
    int updatePwd(Member member);
}
