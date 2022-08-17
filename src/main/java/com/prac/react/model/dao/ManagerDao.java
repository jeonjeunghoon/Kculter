package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Place;

@Mapper
public interface ManagerDao {
    int insertCulture(Culture culture);
    int insertKpop(Celebrity celeb);
    int insertPlace(Place place);
    int insertConcert(Concert concert);
}
