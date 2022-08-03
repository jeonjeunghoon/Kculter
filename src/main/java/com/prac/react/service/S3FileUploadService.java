package com.prac.react.service;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3FileUploadService {
    @Value("${cloud.aws.s3.bucket}")
    private String bucketName; //버킷 이름 동적 할당
    @Value("${cloud.aws.s3.bucket.url}")
    private String bucketUrl;

    //로그를 찍어보기 위해서 만든 인스턴스
    Logger logger = LoggerFactory.getLogger(S3FileUploadService.class); //파일명을 현재시간으로 바꿔주기 위해서 사용하는 인스턴스입니다.

    private final AmazonS3Client amazonS3Client;

    public S3FileUploadService(AmazonS3Client amazonS3Client){
        this.amazonS3Client = amazonS3Client; //의존성 주입
    }

    public String uploadtoS3(MultipartFile mpf,String fileRoute) throws IOException{
        //일단은 오리지널 파일명을 받아오자.
        String originalFileName = mpf.getOriginalFilename();
        logger.info("original file name : "+ originalFileName);
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        //저장될 파일명을 현재날짜시분초로 변경한다.
        String savedFileName = UUID.randomUUID()+extension;
        logger.info("Saved file name"+savedFileName);
        //이제 이걸 저장을해야하는데 이걸 왜 file로 만들어야 한다.
        //이제 이 file을 가지고 s3에 저장을 하자

        logger.info("bucketName : "+ bucketName);

        //Media에대한 정보만 넘겨주기 위해서 사용하는것이다.
        //이걸 왜하냐면 PutObjectRequest에는 file 값을 넘겨줘야 한다.
        //따라서 File 객체를 만들어줘야 하는게 그렇게 되면 로컬에도 사진이 저장이 된다.
        //그래서 그걸 하지 않기 위해 Media에 대한 정보만 넘기기 위해서 사용하는것이다.
        ObjectMetadata obmd = new ObjectMetadata();
        obmd.setContentType(mpf.getContentType());
        obmd.setContentLength(mpf.getSize());

        amazonS3Client.putObject(
            //매개변수로 들어가는 값은 버킷이름(버킷안에 디렉토리가있음 추가해준다), 객체이름, InputStream(사진데이터) 이렇게 들어간다.
            new PutObjectRequest(bucketName+fileRoute, savedFileName, mpf.getInputStream(), obmd)
        );
        String url = bucketUrl+fileRoute+"/"+savedFileName;

        return url;
       }

}
