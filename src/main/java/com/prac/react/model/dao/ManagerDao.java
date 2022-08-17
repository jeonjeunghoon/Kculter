package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Pin;
import com.prac.react.model.dto.Place;

@Mapper
public interface ManagerDao {
    int insertCulture(Culture culture); //문화체험 입력
    int insertKpop(Celebrity celeb); //kpop 스타 입력
    int insertPlace(Place place); //장소 입력
    int updatePlaceKpop(Place place); //기존 장소에 kpop 스타 추가
    int updatePlaceCulture(Place place); //기존 장소에 문화 추가
    int insertConcert(Concert concert); //콘서트 추가
    int checkKpopPlace(String kpop); //장소에서 kpop 스타의 중복체크
    int checkCulturePlace(String culture); //장소에서 문화체험의 중복체크
    int insertPin(Pin pin);
}
