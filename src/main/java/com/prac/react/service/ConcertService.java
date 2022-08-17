package com.prac.react.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.ConcertDao;
import com.prac.react.model.dto.Concert;

@Service
public class ConcertService {
    Logger logger = LoggerFactory.getLogger(ConcertService.class);

    private ConcertDao cd;

    public ConcertService(ConcertDao cd){
        this.cd = cd;
    }

    public Integer getConcertNumbyCelebName(String celebName){
        return cd.getConcertNumbyCelebName(celebName);
    }

    public Integer updateCelebNum(int celebNum,int concertNum){
        return cd.updateCelebNum(celebNum,concertNum);
    }

    public List<Concert> getConcertList(){
        return cd.getConcertList();
    }
}
