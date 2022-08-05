package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Place;
import com.prac.react.service.ManagerService;
import com.prac.react.service.S3FileUploadService;

@RestController
@RequestMapping("manager")
public class ManagerController{
    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class);

    private S3FileUploadService sfu;
    private ManagerService ms;

    //의존성 주입
    @Autowired
    public ManagerController(S3FileUploadService sfu,ManagerService ms){
        this.sfu = sfu;
        this.ms = ms; 
    }

    //@RequestPart는 multipart/form-data를 받기위해서 사용하는 어노테이션이다.
    @PostMapping("/cultureinfo")
    public int insertCultureInfo(@RequestPart("formValue") Culture culture,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("문화 저장 들어옴");
        logger.info("culture : "+ culture.toString());

        //의존성 주입 받은 S3FileUploadService 를 가지고 aws s3에 이미지 파일을 저장한다.
        String imageUrl = sfu.uploadtoS3(mpf,"/culture-img");
        logger.info("imageUrl : "+ imageUrl);
        //이제 이미지 url을 받아왔으니 이제 이미지 url + Culture값을 DB에 저장하자.

        culture.setFileUrl(imageUrl); //문화 체험에 대한 imageUrl 설정
        
        int result = ms.insertCulture(culture);

        if(result > 0){ //데이터가 잘 입력 됐을때
            return 200;
        }else{ //데이터가 잘 들어가지 않았을때
            return 500;
        }
    }

    @PostMapping("/kpopinfo")
    public int insertKpopInfo(@RequestPart("formValue") Celebrity celeb,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("kpop 저장 들어옴");
        logger.info("celeb : "+ celeb.toString());

        //이제 파일명을 바꿨으니 이제 해야할일은 aws s3에 저장을 하는일이 남았다.
        String imageUrl = sfu.uploadtoS3(mpf,"/kpop-img");
        logger.info("imageUrl : "+ imageUrl);

        celeb.setFileUrl(imageUrl);
        int result = ms.insertKpop(celeb);

        if(result > 0){ //데이터가 잘 입력 됐을때
            return 200;
        }else{ //데이터가 잘 들어가지 않았을때
            return 500;
        }
    }

    @PostMapping("/place")
    public int insertPlace(@RequestPart("formValue") Place place,@RequestPart("file") MultipartFile mpf) throws IOException{
        String url = "";
        
        if(place.getPlaceType() == 1){ //kpop이라면 진입
            url = sfu.uploadtoS3(mpf, "kpop-place-img");
        }else{//culture이라면 진입
            url = sfu.uploadtoS3(mpf, "culture-place-img");
        }

        place.setFileUrl(url);
        int result = ms.insertPlace(place);
        return result;
    }
}
