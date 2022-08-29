package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Place;
import com.prac.react.security.Encryption;
import com.prac.react.service.PlaceService;

@RestController
public class PlaceController {

    Logger logger = LoggerFactory.getLogger(PlaceController.class);

    private PlaceService ps;

    public PlaceController(PlaceService ps){
        this.ps = ps;
    }
    
    //Getting every place info in DB
    @GetMapping("/places")
    public List<Place> getPlaceList(){
        List<Place> placeList = new ArrayList<>();
        logger.info("Getting place list from DB");

        Encryption encrypt = new Encryption();

        placeList = ps.getPlaceList();

        for(Place place : placeList){
            String placeNumHash = encrypt.aesEncrypt(Integer.toString(place.getPlaceNum()));
            place.setPlaceHash(placeNumHash);
            place.setPlaceNum(0);
        }

        return placeList;
    }

    //getting particular place info related by culture or celebrity keyNum
    @GetMapping("place")
    public List<Place> getKpopPlaces(@RequestParam("keyhash")String keyHash,@RequestParam("type")String type){

        List<Place> typePlaceList = new ArrayList<>();
        Encryption encrypt = new Encryption();

        int keyNum = Integer.parseInt(encrypt.aesDecrypt(keyHash)); //keyHash 복호화

        String found = "/"+keyNum+"/";

        typePlaceList = ps.getPlaceByType(found, type);

        for(Place place : typePlaceList){
            String hashPlaceNum = encrypt.aesEncrypt(Integer.toString(place.getPlaceNum()));
            place.setPlaceHash(hashPlaceNum);
            place.setPlaceNum(0);
        }

        return typePlaceList;

    }
}
