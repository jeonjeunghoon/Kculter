package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;

@RestController
@RequestMapping("manager")
public class ManagerController{
    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class);

    @PostMapping("/cultureinfo")
    public int insertCultureInfo(@RequestBody Culture culture){
        logger.info("문화 저장 들어옴");
        logger.info("culture : "+ culture.toString());

        //여기서 이제 해야할것은 받은 파일명을 다른 파일명으로 저장을 해줘야함
        //그러기 위해선 파일명을 변경해주는 작업이 진행되어야 함

        int standard = culture.getFileName().lastIndexOf("\\");
        logger.info(Integer.toString(standard));

        return 200;
    }

    @PostMapping("/kpopinfo")
    public int insertKpopInfo(@RequestBody Celebrity celeb){
        logger.info("kpop 저장 들어옴");
        logger.info("celeb : "+ celeb.toString());
        return 200;
    }
}
