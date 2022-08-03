package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;

@Mapper
public interface ManagerDao {
    int insertCulture(Culture culture);
    int insertKpop(Celebrity celeb);
}
