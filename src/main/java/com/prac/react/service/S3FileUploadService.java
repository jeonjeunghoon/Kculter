package com.prac.react.service;

import java.io.File;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.prac.react.controller.ManagerController;

@Service
public class S3FileUploadService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucketName; //버킷 이름 동적 할당
    @Value("${cloud.aws.s3.bucket.url}")
    private String bucketUrl; //버킷 url 동적 할당

    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(ManagerController.class); //파일명을 현재시간으로 바꿔주기 위해서 사용하는 인스턴스입니다.

    private final AmazonS3Client amazonS3Client;

    public S3FileUploadService(AmazonS3Client amazonS3Client){
        this.amazonS3Client = amazonS3Client; //의존성 주입
    }

    public String uploadtoS3(MultipartFile mpf,String fileRoute){
        String url = "";
        //일단은 오리지널 파일명을 받아오자.
        String originalFileName = mpf.getOriginalFilename();
        logger.info("original file name : "+ originalFileName);
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        //저장될 파일명을 현재날짜시분초로 변경한다.
        String savedFileName = UUID.randomUUID()+extension;
        logger.info("Saved file name"+savedFileName);
        //이제 이걸 저장을해야하는데 이걸 왜 file로 만들어야 한다.
        File file = new File(fileRoute+savedFileName);



        return url;
    }

}
