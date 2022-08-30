package com.prac.react.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Culture;

@Mapper
public interface CultureDao {
    List<Culture> getCultureList();
    Integer getSpot(String key);
}
