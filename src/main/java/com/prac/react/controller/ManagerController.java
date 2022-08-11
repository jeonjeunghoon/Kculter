package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
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
    public int insertKpopInfo(@RequestPart("formValue") Celebrity celeb,@RequestPart(value = "file") MultipartFile mpf) throws IOException{
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
    public int insertPlace(@RequestPart("formValue") Place place,@RequestPart(value="file", required=false) MultipartFile mpf) throws IOException{

        logger.info("Place : "+place.toString());
        int result = 0;
        String url = "";

        //일단 여기는 장소를 입력할때 들어오는곳이잔아.
        //그럼 먼저 확인해야할것은 request로 들어온 Place의 placeNum이 있는지 먼저 확인을 해보자.
        if(place.getPlaceNum() == 0){ //이말인 즉슨 기존에 장소가 아니라는 얘기이다.
            //그럼 얘는 새로 insert 해줘야 한다.
            if(place.getPlaceType() == 1){ // kpop = 1, 즉 kpop 장소일때
                logger.info("type : "+ place.getPlaceType());
                place.setCulture("");
                place.setKpop("/"+place.getKpop()+"/");
                logger.info("culture : "+ place.getCulture());
                logger.info("kpop : "+ place.getKpop());
            }else{
                logger.info("type : "+ place.getPlaceType());
                place.setKpop("");
                place.setCulture("/"+place.getCulture()+"/");
                logger.info("culture : "+ place.getCulture());
                logger.info("kpop : "+ place.getKpop());
            }
            logger.info("No place info, starting insert process");
            url = sfu.uploadtoS3(mpf, "/place");
            place.setFileUrl(url);
            result = ms.insertPlace(place);
        }else{ //얘는 기존에 있는 장소에서 따로 추가하는것이니 placeNum만 있을것이다.

            logger.info("Place info exist, updating insert process");

            //따라서 얘는 기존의 Place에서 culture 혹은 kpop에서 추가된 내용만 얹어주면된다. 상황을 예를 들어서 설명을 하겠다.

            /*
             * 만약 키값이 3인 kpop이 기존에 키값이 3인 장소에 본인과 관련있는 장소로 하고 싶을땐 아래와 같이 입력이 된다
             * placeNum(3) - kpop :  /1/2/3 
             * 그럼 placeNum과 관련있는 kpop들은 1번 2번 3번이 된다.
             */
            if(ms.checkDuplicate(place)>0){
                result = 201; //201 : 이미 존재하는 데이터입니다.
            }else{
                result = ms.updatePlace(place);
            }
        }
        return result;
    }

    @PostMapping("/concert")
    public int insertConcert(@RequestPart("formValue") Concert concert,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info(concert.toString());

        String url = "";
        url = sfu.uploadtoS3(mpf, "/concert");
        concert.setImageUrl(url);
        int result = ms.insertConcert(concert);
        return result;
    }
}
