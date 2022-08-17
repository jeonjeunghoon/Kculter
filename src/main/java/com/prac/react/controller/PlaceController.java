package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    //전체 장소 정보를 가져오는 Controller(Kpop과 문화체험 포함해서 모두)
    @GetMapping("/places")
    public List<Place> getPlaceList(){
        List<Place> placeList = new ArrayList<>();
        logger.info("Getting place list from DB");

        placeList = ps.getPlaceList();

        return placeList;
    }

    //얘는 이제 특정 kpop 가수와 관련된 장소정보를 찾아 보내주는 controller
    @GetMapping("place")
    public List<Place> getKpopPlaces(@RequestParam("key")int key,@RequestParam("type")String type){

        List<Place> kpopPlaceList = new ArrayList<>();

        String found = "/"+key+"/";

        kpopPlaceList = ps.getPlaceByType(found, type);

        return kpopPlaceList;

    }
}
