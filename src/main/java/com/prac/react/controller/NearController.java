package com.prac.react.controller;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.LatLng;
import com.prac.react.model.dto.LocationBase;
import com.prac.react.service.LocationBaseService;

@CrossOrigin(origins = {"https://kculter.com","http://localhost:3000"})
@RestController
@RequestMapping("/near/")
public class NearController {

	Logger logger = LoggerFactory.getLogger(NearController.class);

	private LocationBaseService lbs;

	@Autowired
	public NearController(LocationBaseService lbs) {
		this.lbs = lbs;
	}

	//근처 숙소 조회
	@GetMapping("stay")
	public List<LocationBase> getNearStayInfo(@RequestParam("lat") String lat, @RequestParam("lng") String lng) throws IOException {

		LatLng latLng = new LatLng(Double.parseDouble(lat), Double.parseDouble(lng));
		logger.info(latLng.toString());


		List<LocationBase> nearStay = lbs.getNearStay(lat,lng);

		return nearStay;
	}

	//근처 관광지 조회
	@GetMapping("tour")
	public List<LocationBase> getNearTourInfo(@RequestParam("lat") String lat, @RequestParam("lng") String lng) throws IOException {

		LatLng latLng = new LatLng(Double.parseDouble(lat), Double.parseDouble(lng));
		logger.info(latLng.toString());


		List<LocationBase> nearTour = lbs.getNearTour(lat,lng);
		
		return nearTour;
	}
}