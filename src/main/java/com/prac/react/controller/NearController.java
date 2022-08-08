package com.prac.react.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.LatLng;
import com.prac.react.service.SigunguService;

@RestController
@RequestMapping("/near/")
public class NearController {

	Logger logger = LoggerFactory.getLogger(NearController.class);

	private SigunguService ss;

	public NearController(SigunguService ss) {
		this.ss = ss;
	}

	@GetMapping("stay")
	public void getGeoInfo(@RequestParam("lat") String lat, @RequestParam("lng") String lng,
			@RequestParam("address") String address) throws IOException {

		LatLng latLng = new LatLng(Double.parseDouble(lat), Double.parseDouble(lng), address);
		logger.info(latLng.toString());

		String[] arr = address.split(" ");
		logger.info("Sigungu name : "+arr[2]);

		String sigunguCode = ss.getSigungu(arr[2]);
	}
}