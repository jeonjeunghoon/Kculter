package com.prac.react.model.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PracticeDao {
	int	getMemberCount();
}
