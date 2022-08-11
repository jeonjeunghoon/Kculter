package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Place;
import com.prac.react.service.PlaceService;

@RestController
public class PlaceController {

    Logger logger = LoggerFactory.getLogger(PlaceController.class);

    private PlaceService ps;

    public PlaceController(PlaceService ps){
        this.ps = ps;
    }
    

    @GetMapping("/places")
    public List<Place> getPlaceList(){
        List<Place> placeList = new ArrayList<>();
        logger.info("Getting place list from DB");

        placeList = ps.getPlaceList();

        return placeList;
    }
}
