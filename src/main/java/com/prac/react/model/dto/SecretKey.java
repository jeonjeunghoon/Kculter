package com.prac.react.model.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class SecretKey {

    private String secretKey;

    @Autowired
    public SecretKey(@Value("${aes.secretkey}") String secretKey) {
        this.secretKey = secretKey;
    }

    public String getSecretKey() {
        return this.secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    @Override
    public String toString() {
        return "{" +
            " secretKey='" + getSecretKey() + "'" +
            "}";
    }


}
