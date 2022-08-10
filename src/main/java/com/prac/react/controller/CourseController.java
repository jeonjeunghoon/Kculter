package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course/")
public class CourseController {

	Logger logger = LoggerFactory.getLogger(NearController.class);

	@GetMapping("test")
	public String test() {
		return "TEST";
	}
}
