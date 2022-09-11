package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.prac.react.model.dto.Celebrity;
import com.prac.react.model.dto.Concert;
import com.prac.react.model.dto.Culture;
import com.prac.react.model.dto.Pin;
import com.prac.react.model.dto.Place;
import com.prac.react.security.Encryption;
import com.prac.react.service.CelebService;
import com.prac.react.service.ConcertService;
import com.prac.react.service.ManagerService;
import com.prac.react.service.S3FileUploadService;

@CrossOrigin(origins = "https://kculter.com")
@RestController
@RequestMapping("manager")
public class ManagerController{
    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class);

    private S3FileUploadService sfu;
    private ManagerService ms;
    private CelebService celebS;
    private ConcertService concertS;
    private Encryption encryption;
    //의존성 주입
    @Autowired
    public ManagerController(S3FileUploadService sfu,ManagerService ms,CelebService celebS,ConcertService concertS, Encryption encryption){
        this.sfu = sfu;
        this.ms = ms; 
        this.celebS = celebS;
        this.concertS = concertS;
        this.encryption = encryption;
    }

    //@RequestPart는 multipart/form-data를 받기위해서 사용하는 어노테이션이다.
    @PostMapping("/cultureinfo")
    public int insertCultureInfo(@RequestPart("formValue") Culture culture,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("문화 저장 들어옴");
        logger.info("culture : "+ culture.toString());

        int cultureNum = Integer.parseInt(encryption.aesDecrypt(culture.getKeyHash()));
        culture.setKeyNum(cultureNum);

        //의존성 주입 받은 S3FileUploadService 를 가지고 aws s3에 이미지 파일을 저장한다.
        String imageUrl = sfu.uploadtoS3(mpf,"/culture-img");
        logger.info("imageUrl : "+ imageUrl);
        //이제 이미지 url을 받아왔으니 이제 이미지 url + Culture값을 DB에 저장하자.

        culture.setFileUrl(imageUrl); //문화 체험에 대한 imageUrl 설정
        
        int result = ms.insertCulture(culture);

        if(result > 0){ //데이터가 잘 입력 됐을때
            return 200;
        }else{ //데이터가 잘 들어가지 않았을때
            logger.error("Culture insert error");
            return 500;
        }
    }

    @PostMapping("/kpopinfo")
    public int insertKpopInfo(@RequestPart("formValue") Celebrity celeb,@RequestPart(value = "file") MultipartFile mpf) throws IOException{
        logger.info("kpop 저장 들어옴");
        logger.info("celeb : "+ celeb.toString());

        int celebNum = Integer.parseInt(encryption.aesDecrypt(celeb.getKeyHash()));
        celeb.setKeyNum(celebNum);

        //이제 파일명을 바꿨으니 이제 해야할일은 aws s3에 저장을 하는일이 남았다.
        String imageUrl = sfu.uploadtoS3(mpf,"/kpop-img");
        logger.info("imageUrl : "+ imageUrl);

        celeb.setFileUrl(imageUrl);
        //연예인 입력을 한다.
        int kpopResult = ms.insertKpop(celeb);

        //해당 연예인의 키값을 받아온다.
        int celebKeyNum = celebS.getCelebKeyNumByName(celeb.getName());
        //해당 연예인의 이름이 있는 concertNum을 가져온다.
        Integer concertNum = concertS.getConcertNumbyCelebName(celeb.getName());
        //해당 연예인의 이름이 concerts table에 있다면 진입
        if(concertNum > 0){
            //콘서트 넘버와 연예인 넘버를 가지고 해당 콘서트의 연예인 넘버를 수정한다.
            int concertResult = concertS.updateCelebNum(celebKeyNum,concertNum);
            if(concertResult > 0){
                logger.info("Updated celebNum at concert info");
            }else{
                logger.error("Error Updating celebNum ad concert info");
            }
        }else{
            logger.info("No concert info with this celebName");
        }

        if(kpopResult > 0){ //데이터가 잘 입력 됐을때
            return 200;
        }else{ //데이터가 잘 들어가지 않았을때
            logger.error("Kpop insert error");
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
        if(place.getPlaceHash() == ""){ //이말인 즉슨 기존에 DB에 있는 장소가 아니라는 얘기이다.
            //그럼 얘는 새로 insert 해줘야 한다.
            if(place.getPlaceType() == 1){ // kpop = 1, 즉 kpop 장소일때
                logger.info("type : "+ place.getPlaceType());
                place.setCulture("");
                //placekpop을 /키넘버/ 이렇게 저장을 함 근데 문제는 뭐냐
                //place.getKpop의 값이 암호화 되어있음
                //고로 place.getKpop을 복호화 해야함
                String kpopKey = encryption.aesDecrypt(place.getKpop());
                place.setKpop("/"+kpopKey+"/"); //placekpop을 /키넘버/ 이렇게 저장을 함 근데 문제는 뭐냐
                logger.info("culture : "+ place.getCulture());
                logger.info("kpop : "+ kpopKey);
            }else{ //culture 일때 진입
                logger.info("type : "+ place.getPlaceType());
                place.setKpop("");
                String cultureKey = encryption.aesDecrypt(place.getCulture());
                place.setCulture("/"+cultureKey+"/");
                logger.info("culture : "+ cultureKey);
                logger.info("kpop : "+ place.getKpop());
            }
            logger.info("No place info exist, starting insert process");
            url = sfu.uploadtoS3(mpf, "/place");
            place.setFileUrl(url);
            result = ms.insertPlace(place);
            if(result <= 0){
                logger.error("Place insert error");
                return 500;
            }
            result = 200;
        }else{ //얘는 기존에 있는 장소에서 따로 추가하는것이니 placeNum만 있을것이다.

            logger.info("Place info exist, updating insert process");

            //따라서 얘는 기존의 Place에서 culture 혹은 kpop에서 추가된 내용만 얹어주면된다. 상황을 예를 들어서 설명을 하겠다.
            //기존의 placeNum을 암호화된 상태로 보내주니까 복호화 해야 한다.
            int placeNum = Integer.parseInt(encryption.aesDecrypt(place.getPlaceHash()));
            place.setPlaceNum(placeNum);
            /*
             * 만약 키값이 3인 kpop이 기존에 키값이 3인 장소에 본인과 관련있는 장소로 하고 싶을땐 아래와 같이 입력이 된다
             * placeNum(3) - kpop :  /1/2/3 
             * 그럼 placeNum과 관련있는 kpop들은 1번 2번 3번이 된다.
             */
            place.setKpop(encryption.aesDecrypt(place.getKpop()));
            place.setCulture(encryption.aesDecrypt(place.getCulture()));

            if(ms.checkDuplicate(place)>0){ //장소가 해당유형으로 이미 존재하는 경우
                logger.info("Already have place data");
                result = 201; //201 : 이미 존재하는 데이터입니다.
            }else{ //장소가 해당 유형으로 존재하지 않는 경우
                result = ms.updatePlace(place);
                if(result <= 0){
                    logger.error("Place update failure");
                    result = 500;
                }
                result = 200;
            }
        }
        return result;
    }

    @PostMapping("/concert")
    public int insertConcert(@RequestPart("formValue") Concert concert,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("Concert insert : "+concert.toString());

        if(concert.getStarHash() != ""){//연예인 키값이 들어가있다면 진입
            //암호화된 연예인 키값을 복호화 해서 설정
            logger.info("복호화 한다ㅋ");
            concert.setStarKey(Integer.parseInt(encryption.aesDecrypt(concert.getStarHash()))); 
        }
        

        String url = "";
        url = sfu.uploadtoS3(mpf, "/concert");
        concert.setImageUrl(url);
        int result = ms.insertConcert(concert);
        if(result <= 0){
            logger.error("Concert insert error");
            return 500;
        }else{
            return 200;
        }
    }

    @PostMapping("/pin")
    public int insertPin(@RequestPart("formValue") Pin pin,@RequestPart("file") MultipartFile mpf) throws IOException{
        logger.info("Pin insert : "+ pin.toString());

        //암호화된 핀이 속한 키값을 복호화해서 pinKeyNum으로 재설정
        pin.setPinKeyNum(Integer.parseInt(encryption.aesDecrypt(pin.getPinKeyHash())));

        String url = "";
        url = sfu.uploadtoS3(mpf, "/pin");
        pin.setImageUrl(url);

        int result = ms.insertPin(pin);
        if(result <= 0){
            logger.error("Pin insert error");
            return 500;
        }else{
            return 200;
        }
    }
}
