package com.prac.react.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.prac.react.model.dto.LocationBase;

@Service
public class LocationBaseService {

    Logger logger = LoggerFactory.getLogger(SigunguService.class);

	@Value("${tourapi.key}")
	private String serviceKey;

    public List<LocationBase> getNearStay(String lat,String lng) throws IOException{

        List<LocationBase> nearStayList = new ArrayList<>();

        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/B551011/EngService/locationBasedList");
        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKey);
        urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("12", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("Kculter", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("_type", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));
        //숙박의 contentTypeId는 80이다.
        urlBuilder.append("&"+URLEncoder.encode("contentTypeId", "UTF-8")+"="+URLEncoder.encode("80", "UTF-8"));
        urlBuilder.append("&"+URLEncoder.encode("mapX", "UTF-8")+"="+lng);
        urlBuilder.append("&"+URLEncoder.encode("mapY", "UTF-8")+"="+lat);
        //반경을 500m로 설정
        urlBuilder.append("&"+URLEncoder.encode("radius", "UTF-8")+"="+URLEncoder.encode("500", "UTF-8"));
        //대표 이미지가 있는 곳의 조회수를 기준으로 정렬
        urlBuilder.append("&"+URLEncoder.encode("arrange", "UTF-8")+"="+URLEncoder.encode("P", "UTF-8"));
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

        JSONObject json = new JSONObject(sb.toString());
		JSONObject response = json.getJSONObject("response");
		JSONObject body = response.getJSONObject("body");
		JSONObject items = body.getJSONObject("items");
		JSONArray item = items.getJSONArray("item");

        for (int i = 0; i < item.length(); i++) {
			JSONObject obj = item.getJSONObject(i);
            
            LocationBase lb = new LocationBase();
            lb.setAddr1(obj.getString("addr1"));
            lb.setAddr2(obj.getString("addr2"));
            lb.setContenttypeid(obj.getString("contenttypeid"));
            lb.setFirstimage(obj.getString("firstimage"));
            lb.setFirstimage2(obj.getString("firstimage2"));
            lb.setMapx(obj.getString("mapx"));
            lb.setMapy(obj.getString("mapy"));
            lb.setTel(obj.getString("tel"));
            lb.setTitle(obj.getString("title"));

            logger.info(lb.toString());

            nearStayList.add(lb);
		}

        return nearStayList;
    }

    public List<LocationBase> getNearTour(String lat,String lng) throws IOException{

        List<LocationBase> nearStayList = new ArrayList<>();

        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/B551011/EngService/locationBasedList");
        urlBuilder.append("?" + URLEncoder.encode("serviceKey", "UTF-8") + "=" + serviceKey);
        urlBuilder.append("&" + URLEncoder.encode("numOfRows", "UTF-8") + "=" + URLEncoder.encode("12", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileOS", "UTF-8") + "=" + URLEncoder.encode("ETC", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("MobileApp", "UTF-8") + "=" + URLEncoder.encode("Kculter", "UTF-8"));
        urlBuilder.append("&" + URLEncoder.encode("_type", "UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));
        //숙박의 contentTypeId는 80이다.
        urlBuilder.append("&"+URLEncoder.encode("contentTypeId", "UTF-8")+"="+URLEncoder.encode("76", "UTF-8"));
        urlBuilder.append("&"+URLEncoder.encode("mapX", "UTF-8")+"="+lng);
        urlBuilder.append("&"+URLEncoder.encode("mapY", "UTF-8")+"="+lat);
        //반경을 500m로 설정
        urlBuilder.append("&"+URLEncoder.encode("radius", "UTF-8")+"="+URLEncoder.encode("500", "UTF-8"));
        //대표 이미지가 있는 곳의 조회수를 기준으로 정렬
        urlBuilder.append("&"+URLEncoder.encode("arrange", "UTF-8")+"="+URLEncoder.encode("P", "UTF-8"));
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

        JSONObject json = new JSONObject(sb.toString());
		JSONObject response = json.getJSONObject("response");
		JSONObject body = response.getJSONObject("body");
		JSONObject items = body.getJSONObject("items");
		JSONArray item = items.getJSONArray("item");

        for (int i = 0; i < item.length(); i++) {
			JSONObject obj = item.getJSONObject(i);
            
            LocationBase lb = new LocationBase();
            lb.setAddr1(obj.getString("addr1"));
            lb.setAddr2(obj.getString("addr2"));
            lb.setContenttypeid(obj.getString("contenttypeid"));
            lb.setFirstimage(obj.getString("firstimage"));
            lb.setFirstimage2(obj.getString("firstimage2"));
            lb.setMapx(obj.getString("mapx"));
            lb.setMapy(obj.getString("mapy"));
            lb.setTel(obj.getString("tel"));
            lb.setTitle(obj.getString("title"));

            logger.info(lb.toString());

            nearStayList.add(lb);
		}

        return nearStayList;
    }
    
}
