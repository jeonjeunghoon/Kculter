package com.prac.react.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.ManagerDao;
import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Pin;
import com.prac.react.model.dto.Place;

@Service
public class ManagerService {
    
    private ManagerDao md;
    Logger logger = LoggerFactory.getLogger(ManagerService.class);

    public ManagerService (ManagerDao md){
        this.md = md;
    }

    public int insertCulture(Culture culture){
        return md.insertCulture(culture);
    }

    public int insertKpop(Celebrity celeb){
        return md.insertKpop(celeb);
    }

    public int insertPlace(Place place){
        return md.insertPlace(place);
    }

    public int updatePlace(Place place){
        if(place.getPlaceType() == 1){ //kpop이라면
            return md.updatePlaceKpop(place);
        }else{ //culture라면 진입
            return md.updatePlaceCulture(place);
        }
    }

    public int checkDuplicate(Place place){

        if(place.getPlaceType() == 1){ //kpop이라면
            String kpop = "/"+place.getKpop()+"/";
            logger.info("kpop : "+kpop);
            return md.checkKpopPlace(kpop);
        }else{ //culture라면 진입
            String culture = "/"+place.getCulture()+"/";
            logger.info("culture : "+culture);
            return md.checkCulturePlace(culture);
        }
    }

    public int insertConcert(Concert concert){
        return md.insertConcert(concert);
    }

    public int insertPin(Pin pin){
        return md.insertPin(pin);
    }
}
