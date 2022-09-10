package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Place;
import com.prac.react.security.Encryption;
import com.prac.react.service.PlaceService;

@CrossOrigin(origins = "https://kculter.com:3000")
@RestController
public class PlaceController {

    Logger logger = LoggerFactory.getLogger(PlaceController.class);

    private PlaceService ps;
    private Encryption encryption;

    @Autowired
    public PlaceController(PlaceService ps,Encryption encryption){
        this.ps = ps;
        this.encryption = encryption;
    }
    
    //Getting every place info in DB
    @GetMapping("/places")
    public List<Place> getPlaceList(){
        List<Place> placeList = new ArrayList<>();
        logger.info("Getting place list from DB");


        placeList = ps.getPlaceList();

        if(placeList.isEmpty()){
            logger.error("No Place List");
            return null;
        }

        //모든 장소정보의 placeNum을 해쉬한다.
        for(Place place : placeList){
            String placeNumHash = encryption.aesEncrypt(Integer.toString(place.getPlaceNum()));
            place.setPlaceHash(placeNumHash);
            place.setPlaceNum(0);
        }

        return placeList;
    }

    //getting particular place info related by culture or celebrity keyNum
    @GetMapping("place")
    public List<Place> getKpopPlaces(@RequestParam("keyhash")String keyHash,@RequestParam("type")String type){

        List<Place> typePlaceList = new ArrayList<>();

        int keyNum = Integer.parseInt(encryption.aesDecrypt(keyHash)); //keyHash 복호화

        String found = "/"+keyNum+"/";

        typePlaceList = ps.getPlaceByType(found, type);

        if(typePlaceList.isEmpty()){
            logger.warn("No Place with this type");
            return null;
        }

        for(Place place : typePlaceList){
            String hashPlaceNum = encryption.aesEncrypt(Integer.toString(place.getPlaceNum()));
            place.setPlaceHash(hashPlaceNum);
            place.setPlaceNum(0);
        }

        return typePlaceList;

    }
}
