package com.prac.react.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Celebrity;

@Mapper
public interface CelebDao {
    List<Celebrity> getCelebrities();
    int getCelebKeyNumByName(String name);
    Integer getSpot(String key);
}
