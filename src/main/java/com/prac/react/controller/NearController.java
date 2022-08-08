package com.prac.react.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.LatLng;

@RestController
@RequestMapping("/near/")
public class NearController {

	Logger logger = LoggerFactory.getLogger(NearController.class);

	@GetMapping("stay")
	public void getGeoInfo(@RequestParam("lat") String lat, @RequestParam("lng") String lng,
			@RequestParam("address") String address) {
		LatLng latLng = new LatLng(Double.parseDouble(lat), Double.parseDouble(lng), address);
		logger.info(latLng.toString());
	}
}