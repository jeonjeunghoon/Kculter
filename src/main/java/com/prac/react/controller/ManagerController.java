package com.prac.react.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;

@RestController
@RequestMapping("manager")
public class ManagerController{
    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class);
    Date date = new Date();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss"); //파일명을 현재시간으로 바꿔주기 위해서 사용하는 인스턴스입니다.

    @PostMapping("/cultureinfo")
    public int insertCultureInfo(@RequestPart("formValue") Culture culture,@RequestPart("file") MultipartFile mpf){
        logger.info("문화 저장 들어옴");
        logger.info("culture : "+ culture.toString());
        logger.info("culture : "+ mpf.toString()); //여기서 에러가 났음
        //여기서 이제 해야할것은 받은 파일명을 다른 파일명으로 저장을 해줘야함
        //그러기 위해선 파일명을 변경해주는 작업이 진행되어야 함
        int extension = culture.getFileUrl().lastIndexOf("."); //확장자 명이 시작되는 위치
        String newFileName = sdf.format(date) + culture.getFileUrl().substring(extension); //바뀐이름.확장자 이렇게 바뀌게 됨
        logger.info("changed file name : "+newFileName);

        //이제 파일명을 바꿨으니 이제 해야할일은 aws s3에 저장을 하는일이 남았다.

        return 200;
    }

    @PostMapping("/kpopinfo")
    public int insertKpopInfo(@RequestBody Celebrity celeb){
        logger.info("kpop 저장 들어옴");
        logger.info("celeb : "+ celeb.toString());

        int extension = celeb.getFileUrl().lastIndexOf("."); //확장자 명이 시작되는 위치
        String newFileName = sdf.format(date) + celeb.getFileUrl().substring(extension);//바뀐이름.확장자 이렇게 바뀌게 됨
        logger.info("changed file name : "+newFileName);

        //이제 파일명을 바꿨으니 이제 해야할일은 aws s3에 저장을 하는일이 남았다.


        return 200;
    }
}
