package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Pin;

@Mapper
public interface PinDao {
    Pin getKpopPin(int key);
}
