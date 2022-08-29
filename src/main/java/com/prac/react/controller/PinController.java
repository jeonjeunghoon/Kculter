package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Pin;
import com.prac.react.security.Encryption;
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
    public Pin getKpopPin(@RequestParam("keyHash")String keyHash){
        logger.info("Kpop Key : "+keyHash);
        //이제 받아온 키를 복호화 해야한다.
        Encryption encrypt = new Encryption();
        int keyNum = Integer.parseInt(encrypt.aesDecrypt(keyHash));

        Pin pin = ps.getKpopPin(keyNum);

        String pinHash = encrypt.aesEncrypt(Integer.toString(pin.getPinNum())); //핀번호 암호화
        String pinKeyHash = encrypt.aesEncrypt(Integer.toString(pin.getPinKeyNum())); //핀번호 유형키 암호화
        pin.setPinHash(pinHash);
        pin.setPinNum(0);
        pin.setPinKeyHash(pinKeyHash);
        pin.setPinKeyNum(0);

        return pin;
    }

    @GetMapping("culture")
    public Pin getCulturePin(@RequestParam("keyHash") String keyHash){
        logger.info("Culture Key : "+keyHash);

        Encryption encrypt = new Encryption();
        int keyNum = Integer.parseInt(encrypt.aesDecrypt(keyHash));

        Pin pin = ps.getCulturePin(keyNum);

        String pinHash = encrypt.aesEncrypt(Integer.toString(pin.getPinNum())); //핀번호 암호화
        String pinKeyHash = encrypt.aesEncrypt(Integer.toString(pin.getPinKeyNum())); //핀번호 유형키 암호화
        pin.setPinHash(pinHash);
        pin.setPinNum(0);
        pin.setPinKeyHash(pinKeyHash);
        pin.setPinKeyNum(0);

        return pin;
    }
}
