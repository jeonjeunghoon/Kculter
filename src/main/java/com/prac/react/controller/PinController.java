package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Pin;
import com.prac.react.service.PinService;

@RestController
@RequestMapping("/pin/")
public class PinController {
    Logger logger = LoggerFactory.getLogger(PinController.class);

    private PinService ps;

    public PinController(PinService ps){
        this.ps = ps;
    }

    @GetMapping("kpop")
    public Pin getKpopPin(int key){
        logger.info("Kpop Key : "+key);
        //이제 받은 키로 pin을 받아와야 한다.
        Pin pin = ps.getKpopPin(key);
        return pin;
    }

    @GetMapping("culture")
    public Pin getCulturePin(int key){
        logger.info("Culture Key : "+key);
        //이제 받은 키로 pin을 받아와야 한다.
        Pin pin = ps.getCulturePin(key);
        return pin;
    }
}
