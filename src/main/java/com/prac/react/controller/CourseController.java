package com.prac.react.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.CourseWrapper;
import com.prac.react.model.dto.Place;

@RestController
@RequestMapping("/course/")
public class CourseController {

	Logger logger = LoggerFactory.getLogger(CourseController.class);

	@PostMapping("")
	public int insertCourse(@RequestBody CourseWrapper cw) {
		List<Place> placesList = cw.getCourse();

		for(Place place : placesList){
			logger.info("Place Info : " + place.toString());
		}

		return 1;
	}
}
