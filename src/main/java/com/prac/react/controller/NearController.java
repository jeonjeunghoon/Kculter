package com.prac.react.controller;

import java.io.IOException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.model.dto.LatLng;
import com.prac.react.model.dto.Stay;
import com.prac.react.service.SearchStayService;
import com.prac.react.service.SigunguService;

@RestController
@RequestMapping("/near/")
public class NearController {

	Logger logger = LoggerFactory.getLogger(NearController.class);

	private SigunguService ss;
	private SearchStayService sss;

	@Autowired
	public NearController(SigunguService ss, SearchStayService sss) {
		this.ss = ss;
		this.sss = sss;
	}

	@GetMapping("stay")
	public List<Stay> getNearStayInfo(@RequestParam("lat") String lat, @RequestParam("lng") String lng,
			@RequestParam("address") String address) throws IOException {

		LatLng latLng = new LatLng(Double.parseDouble(lat), Double.parseDouble(lng), address);
		logger.info(latLng.toString());

		String[] arr = address.split(" ");
		logger.info("Sigungu name : " + arr[2]);

		// 시군구 코드를 가져온다
		String sigunguCode = ss.getSigungu(arr[2]);

		List<Stay> nearStayList = sss.getNearStay(sigunguCode);

		return nearStayList;
	}
}