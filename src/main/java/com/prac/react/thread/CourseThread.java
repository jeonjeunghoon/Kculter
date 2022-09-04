package com.prac.react.thread;

import java.nio.channels.CompletionHandler;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.prac.react.model.dao.PlaceDao;
import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.CourseWrapper;
import com.prac.react.model.dto.Place;
import com.prac.react.security.Encryption;

public class CourseThread implements Runnable{

    private Course course;
    private Encryption encrypt;
    private PlaceDao pd;
    private CompletionHandler<CourseWrapper,Void> callBack;
    private int memberNum;
    
    Logger logger = LoggerFactory.getLogger(CourseThread.class);

    public CourseThread( Course course,CompletionHandler<CourseWrapper,Void> callBack,int memberNum) {
        this.course = course;
        this.callBack = callBack;
        this.memberNum = memberNum;
    }

    //Thread가 시작할때 들어가는곳
    @Override
    public void run() {
        // TODO Auto-generated method stub
        logger.info("Thread Started");

        String[] placeArr = course.getPlaces().split("/");

        pd = ApplicationContextProvider.getBean(PlaceDao.class); //Thread에서는 Autowired가 되지 않아서 따로 이 클래스를 이용해서 의존성 주입을 받아야함
        encrypt = ApplicationContextProvider.getBean(Encryption.class);

        List<Place> placeList = new ArrayList<>(); //Place정보를 List에 담기 위해서

        //Course에 있는 Place 장소에 접근
        for(int i = 0; i<placeArr.length;i++){
            Place place = pd.getPlaceInfo(Integer.parseInt(placeArr[i])); //Place 정보를 DB에서 가져옴
            if(place == null){
                logger.error("!!!!!!!!!!!!!!No place info found!!!!!!!!!!!!!!");
            }else{
                //placeList에 추가
                String placeHash = encrypt.aesEncrypt(Integer.toString(place.getPlaceNum())); //placeNum 암호화
                place.setPlaceHash(placeHash);
                place.setPlaceNum(0); //placeNum 0으로
                placeList.add(place);              
            }
        }
        if(placeList.isEmpty()){
            logger.error("!!!!!!!!!!!!!!PlaceList is empty!!!!!!!!!!!!!!");
            callBack.failed(null, null );
        }else{
            CourseWrapper cw = new CourseWrapper();
            //CourseWrapper에 내용추가
            cw.setCourse(placeList);
            cw.setCourseName(course.getCourseName());

            String memberHash  = encrypt.aesEncrypt(Integer.toString(memberNum)); //멤버번호 암호화
            cw.setMemberHash(memberHash);
            cw.setCourseNum(course.getCourseNum());

            //callBack 메소드 호출
            callBack.completed(cw, null);
        }        
    }
    
}
