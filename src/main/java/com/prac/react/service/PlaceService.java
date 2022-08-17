package com.prac.react.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.controller.PlaceController;
import com.prac.react.model.dao.PlaceDao;
import com.prac.react.model.dto.Place;

@Service
public class PlaceService {
    Logger logger = LoggerFactory.getLogger(PlaceController.class);

    private PlaceDao pd;

    public PlaceService(PlaceDao pd){
        this.pd = pd;
    }

    public List<Place> getPlaceList(){
        return pd.getPlaceList();
    }
    
    public List<Place> getPlaceByType(String found,String type){
        List<Place> placeList = new ArrayList<>();
        switch(type){
            case "culture":
                placeList = pd.getCulturePlaces(found);
            break;
            case "kpop" :
                placeList = pd.getKpopPlaces(found);
            break;
        }
        return placeList;
    }
}
