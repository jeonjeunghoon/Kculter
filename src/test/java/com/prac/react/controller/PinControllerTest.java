package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.prac.react.security.Encryption;
import com.prac.react.service.PinService;

@WebMvcTest(PinController.class) 
public class PinControllerTest {

    @MockBean
    Encryption encryption;
    @MockBean
    PinService ps;
    @Autowired
    MockMvc mvc;


    @Test
    void testGetCulturePin() throws Exception{
        String url = "/pin/kpop?keyHash=3sGjhUh+evgXxRYcsuwxeg==";

        mvc.perform(get(url))
        .andExpect(status().isOk()) // status?? 200???
        .andDo(print());
    }

    @Test
    void testGetKpopPin() {

    }
}
