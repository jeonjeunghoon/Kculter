package com.prac.react.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Concert;

@Mapper
public interface ConcertDao {
    public Integer getConcertNumbyCelebName(String celebName);
    public Integer updateCelebNum(int celebNum,int concertNum);
    public List<Concert> getConcertList();
}
