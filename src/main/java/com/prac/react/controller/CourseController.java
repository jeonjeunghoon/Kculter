package com.prac.react.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.algorithm.QuikSort;
import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.CourseWrapper;
import com.prac.react.model.dto.Place;
import com.prac.react.security.Encryption;
import com.prac.react.service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {

	Logger logger = LoggerFactory.getLogger(CourseController.class);

	private CourseService cs;
	private Encryption encryption;

	public CourseController(CourseService cs,Encryption encryption){
		this.encryption = encryption;
		this.cs = cs;
	}

	@PostMapping("")
	public int insertCourse(@RequestBody CourseWrapper cw) {
		List<Place> placesList = cw.getCourse();

		int result = 0;

		String places = "";
		//받은 Place에 접근을 하여서 placeNum이 없는 애들은 place를 저장하자.
		for(Place place : placesList){
			logger.info("Place Info : " + place.toString());

			if(place.getPlaceHash().equals("0")){
				//placeNum이 없는 애들은 map에서 고른애들이다. 따라서 우리 DB에 있을수도 있고 없을수도 있다.
				//따라서 우리는 장소이름과 경도와 위도가 DB에 없다면 추가를 할것이다.
				// select placeNum from places where name = 이름 && lat = 위도 && lng = 경도
				logger.info("No placeNumber");
				Integer placeNum = cs.checkPlaceDb(place);
				//placeNum이 null 이면 값이 없는거고 값이 있으면 이미 저장되어 있는 장소다.
				if(placeNum == null ){
					logger.info("No place info in DB, save process start");
					cs.saveNewPlace(place);
					if(place.getPlaceNum() < 0){ //뭔가 입력이 안됐거나 오류가 생긴 경우
						return 500;
					}
					places += place.getPlaceNum() + "/";
				}else{ //placeNum이 해당 장소정보로 저장된 경우
					places += placeNum + "/";
				}
			}else{//이미 백에 저장되어 placeHash 넘어온경우
				//placeHash 복호화 하기
				int placeNum = Integer.parseInt(encryption.aesDecrypt(place.getPlaceHash()));
				place.setPlaceNum(placeNum);
				places += place.getPlaceNum() + "/";
			}
		}

		int memberNum = Integer.parseInt(encryption.aesDecrypt(cw.getMemberHash()));

		Course course = new Course(0,cw.getCourseName(),places,memberNum);
		logger.info("Course : "+ course.toString());
		result = cs.insertCourse(course);

		if(result < 0){
			return 500;
		}else if(result == 1){
			logger.info("Course insert success");
		}else if(result == 2){
			logger.info("Course update success");
		}

		return result;
	}
	@GetMapping("/{memberNumhash}")
	public List<CourseWrapper> getCourses(@PathVariable("memberNumhash")String memberNumHash) throws InterruptedException{

		List<CourseWrapper> memberCourseList = new ArrayList<>();

		//암호화된 멤버 번호를 복호화 해야한다.
		logger.info("MemberHash : "+memberNumHash);
		int memberNum = Integer.parseInt(encryption.aesDecrypt(memberNumHash));


		//해당 멤버의 코스를 모두 불러와야한다.
		List<Course> courses = cs.getCourses(memberNum); //멤버 번호로 코스를 모두 불러왔다.
		if(courses.isEmpty()){
			logger.warn("Member course is empty");
		}else{
			//해당 코스의 
			memberCourseList = cs.getMemberCourseWrapper(memberNum, courses);
			
			//memberCourseList를 불러왔지만 지금 정렬이 하나도 되어있지 않다
			//따라서 courseNum에따라서 오름차순으로 정렬을 해야한다.
			QuikSort qs = new QuikSort();
			qs.quikSort(memberCourseList);

			//오름 차순 정렬을한 course들의 courseNum을 암호화해야한다.
			for(CourseWrapper cw : memberCourseList){
				String courseHash = encryption.aesEncrypt(Integer.toString(cw.getCourseNum()));
				cw.setCourseHash(courseHash);
				cw.setCourseNum(0);
			}				
		}
		
		return memberCourseList;
	}
	@DeleteMapping("")
	public int deleteCourse(@RequestHeader("CourseHash") String courseHash){
		logger.info("Course Delete operation start!!!!");

		int courseNum = Integer.parseInt(encryption.aesDecrypt(courseHash));

		int result = cs.deleteCourse(courseNum);
		if(result <= 0)
			return 500;
		return 200;
	}
}
