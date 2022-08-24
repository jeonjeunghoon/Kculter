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

public class CourseThread implements Runnable{

    private Course course;
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

        pd = ApplicationContextProvider.getBean(PlaceDao.class);
        
        

        List<Place> placeList = new ArrayList<>(); //Place정보를 List에 담기 위해서

        //Course에 있는 Place 장소에 접근
        for(int i = 0; i<placeArr.length;i++){
            logger.info("Getting place info");
            Place place = pd.getPlaceInfo(Integer.parseInt(placeArr[i])); //Place 정보를 받아옴

            if(place == null){
                logger.error("Place info Not found");
            }else{
                //placeList에 추가
                logger.info(place.toString());
                placeList.add(place);
                logger.info("Place info added on place list");                
            }
        }
        if(placeList.isEmpty()){
            logger.error("No place info something is wrong");
            callBack.failed(null, null );
        }else{
            logger.info("Adding Course Info");
            CourseWrapper cw = new CourseWrapper();
            //CourseWrapper에 내용추가
            cw.setCourse(placeList);
            cw.setCourseName(course.getCourseName());
            cw.setMemberNum(memberNum);
            cw.setCourseNum(course.getCourseNum());

            logger.info("Call Back!!!");
            //callBack 메소드 호출
            callBack.completed(cw, null);
        }        
    }
    
}
