package com.prac.react.controller;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

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
import com.prac.react.service.S3FileUploadService;

@RestController
@RequestMapping("manager")
public class ManagerController{
    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class);

    private S3FileUploadService sfu;

    public ManagerController(S3FileUploadService sfu){
        this.sfu = sfu; //의존성 주입
    }

    //@RequestPart는 multipart/form-data를 받기위해서 사용하는 어노테이션이다.
    @PostMapping("/cultureinfo")
    public int insertCultureInfo(@RequestPart("formValue") Culture culture,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("문화 저장 들어옴");
        logger.info("culture : "+ culture.toString());
        logger.info("culture : "+ mpf.toString()); 

        //의존성 주입 받은 S3FileUploadService 를 가지고 aws s3에 이미지 파일을 저장한다.
        String imageUrl = sfu.uploadtoS3(mpf,"/culter-img");

        return 200;
    }

    @PostMapping("/kpopinfo")
    public int insertKpopInfo(@RequestBody Celebrity celeb){
        logger.info("kpop 저장 들어옴");
        logger.info("celeb : "+ celeb.toString());

        //이제 파일명을 바꿨으니 이제 해야할일은 aws s3에 저장을 하는일이 남았다.


        return 200;
    }
}
