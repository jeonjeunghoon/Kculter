package com.prac.react.model.dto;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AwsConfig {
    	/**
	 * Key는 중요정보이기 때문에 properties 파일에 저장한 뒤 가져와 사용하는 방법이 좋습니다.
	 */
    @Value("${cloud.aws.credentials.accessKey}")
	private String iamAccessKey; // IAM Access Key
    @Value("${cloud.aws.credentials.secretKey}")
	private String iamSecretKey; // IAM Secret Key
    @Value("${cloud.aws.region.static}")
	private String region; // Bucket Region 

	//AmazonS3Client를 Bean으로 등록을 해서 사용할수 있도록 한다.
	@Bean
	public AmazonS3Client amazonS3Client() {
		//accessKey와 secretKey를 가지고 Aws credential 객체를 생성한다.
		BasicAWSCredentials basicAWSCredentials = new BasicAWSCredentials(iamAccessKey, iamSecretKey);
		//그리고 AmazonS3Client를 위에서 만든 Credential 가지고 만들어서 반환한다.
		return (AmazonS3Client) AmazonS3ClientBuilder.standard()
                                                             .withRegion(region)
                                                             .withCredentials(new AWSStaticCredentialsProvider(basicAWSCredentials))
                                                             .build();
	}
}
