package com.prac.react.model.dto;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Mysql {


    @Value("${mysqlusername}")
    private String username;
    @Value("${pwd}")
    private String pwd;

    public Mysql() {}

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return this.pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    @Override
    public String toString() {
        return "{" +
            " username='" + getUsername() + "'" +
            ", pwd='" + getPwd() + "'" +
            "}";
    }

}
