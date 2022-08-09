package com.prac.react.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SigunguService {

	@Value("${tourapi.key}")
	private String serviceKey;

	Logger logger = LoggerFactory.getLogger(SigunguService.class);

	public String getSigungu(String sigungu) throws IOException {

		String code = "";

		logger.info("ServiceKey : " + serviceKey);

		StringBuilder urlBuilder = new StringBuilder(
				"http://apis.data.go.kr/B551011/KorService/areaCode");
		urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8")+"=" + serviceKey);
		urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("30", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("pageNo", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("Kculter", "UTF-8"));
		urlBuilder.append("&" + URLEncoder.encode("areaCode", "UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		// 서울의 areacode가 1임
		urlBuilder.append("&" + URLEncoder.encode("_type", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));

		// String Builder로 url을 형성
		URL url = new URL(urlBuilder.toString()); // 위의 StringBuilder로 실제 url을 구성
		HttpURLConnection conn = (HttpURLConnection) url.openConnection(); // 위에서 만든 url 인스턴스를 가지고 connection open하기
		conn.setRequestMethod("GET"); // http method 설정
		conn.setRequestProperty("Content-type", "application/json"); // content-type 설정
		logger.info("Response code: " + conn.getResponseCode());
		BufferedReader rd; // api reponse 데이터를 담기 위한 BufferedReader 생성
		if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) { // 응답코드가 200대 일때
			rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			// connection에서 데이터 일거오고 그걸 InputStreamReader를 통해서 읽고 그리고 그걸 버퍼에다가 잠시 담는다.
		} else {
			rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
			// 에러로그를 버퍼에다가 잠시 담음
		}
		StringBuilder sb = new StringBuilder(); // String객체를 생성
		String line;
		while ((line = rd.readLine()) != null) {
			// 버퍼에 담긴 데이터를 한줄단위로 읽어들여 line에 집어 넣고 해당 line이 null이 아니라면 진입
			sb.append(line); // String 객체에 계속해서 추가해줌
		}
		rd.close(); // BufferedReader 생성한것을 닫아줌으로써 메모리에 있는 버퍼를 비움
		conn.disconnect(); // 연결 해제
		logger.info("response : " + sb.toString());

		JSONObject json = new JSONObject(sb.toString());
		JSONObject response = json.getJSONObject("response");
		JSONObject body = response.getJSONObject("body");
		JSONObject items = body.getJSONObject("items");
		JSONArray item = items.getJSONArray("item");

		for (int i = 0; i < item.length(); i++) {
			JSONObject obj = item.getJSONObject(i);
			logger.info("rnum : " + obj.getString("rnum"));
			logger.info("code : " + obj.getString("code"));
			logger.info("name : " + obj.getString("name"));
			if (obj.getString("name").equals(sigungu)) {
				code = obj.getString("code");
				break;
			}
		}

		return code;

	}
}
