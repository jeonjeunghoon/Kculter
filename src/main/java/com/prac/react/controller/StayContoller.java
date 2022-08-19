// package com.prac.react.controller;

// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class StayContoller {
// Logger logger = LoggerFactory.getLogger(clazz);

// private StayService ss;

// public StayController(StayService ss) {
// this.ss = ss;
// }

// @GetMapping("/stay")
// public List<Stay> getStayList() {
// List<Stay> stayList = new ArrayList<>();
// logger.info("Getting stay list from DB");

// stayList = ss.getStayList();

// return stayList;
// }
// }
