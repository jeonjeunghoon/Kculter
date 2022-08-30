package com.prac.react.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.prac.react.model.dao.CultureDao;
import com.prac.react.model.dto.Culture;

@Service
public class CultureService {

    private CultureDao cd;

    public CultureService(CultureDao cd){
        this.cd = cd;
    }

    public List<Culture> getCultureList(){
        return cd.getCultureList();
    }

    public Integer getSpot(String key) {
        return cd.getSpot(key);
    }
    
}
