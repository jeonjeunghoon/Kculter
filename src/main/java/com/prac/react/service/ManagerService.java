package com.prac.react.service;

import org.springframework.stereotype.Service;

import com.prac.react.model.dao.ManagerDao;
import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Place;

@Service
public class ManagerService {
    
    private ManagerDao md;

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
}
