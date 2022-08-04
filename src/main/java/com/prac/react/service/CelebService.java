package com.prac.react.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.prac.react.model.dao.CelebDao;
import com.prac.react.model.dto.Celebrity;

@Service
public class CelebService {

    private CelebDao cd;

    public CelebService(CelebDao cd){
        this.cd = cd;
    }

    public List<Celebrity> getCelebrities(){
        return cd.getCelebrities();
    }
}
