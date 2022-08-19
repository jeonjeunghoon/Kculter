package com.prac.react.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.PinDao;
import com.prac.react.model.dto.Pin;

@Service
public class PinService {
    Logger logger = LoggerFactory.getLogger(PinService.class);

    private PinDao pd;

    public PinService(PinDao pd){
        this.pd = pd;
    }

    public Pin getKpopPin(int key){
        return pd.getKpopPin(key);
    }

}
