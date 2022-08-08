package com.prac.react.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest // DB까지 테스트하는 통합 테스트를 하려면 사용해야할 어노테이션
@Transactional // 테스트 상황에서 삽입되어지는 데이터를 롤백하기 위해서 사용하는 어노테이션
public class SigunguServiceTest {

	Logger logger = LoggerFactory.getLogger(SigunguServiceTest.class);

	@Autowired
	SigunguService as;

	@Test
	void testGetAreacode() throws IOException {
		// given
		String serviceKey = "3Z%2FYQWOyIAR89XtBFrgHdHGxDwSP12fVxUYyqy5VxpHHRNUVhYp3U9ptrdhgHFQ8OnEmPidWt4MZl%2BZlv70L%2Bw%3D%3D";
		StringBuilder urlBuilder = new StringBuilder(
				"http://apis.data.go.kr/B551011/KorService/areaCode"); /* URL */
		urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8")
				+ serviceKey);
		urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("10", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("AppTest", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("areaCode", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		URL url = new URL(urlBuilder.toString());

		// when
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("GET");
		conn.setRequestProperty("Content-type", "application/json");
		System.out.println("Response code: " + conn.getResponseCode());
		BufferedReader rd;
		if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}
		StringBuilder sb = new StringBuilder();
		String line;
		while ((line = rd.readLine()) != null) {
			sb.append(line);
		}
		rd.close();
		conn.disconnect();
		System.out.println(sb.toString());
	}
}
