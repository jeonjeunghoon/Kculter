package com.prac.react.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.prac.react.model.dto.Place;

@Mapper
public interface PlaceDao {
    public List<Place> getPlaceList();
    public List<Place> getKpopPlaces(String found);
    public List<Place> getCulturePlaces(String found);
    public Place getPlaceInfo(int placeNum);
}
