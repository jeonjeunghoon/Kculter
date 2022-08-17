package com.prac.react.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.prac.react.service.PlaceService;

@WebMvcTest(PlaceController.class)
public class PlaceControllerTest {

    @Autowired
	MockMvc mvc;
	@MockBean
	private PlaceService ps;

    @Test
    void testGetKpopPlaces() {

    }

    @Test
    void testGetPlaceList() throws Exception{
        // given
		String url = "/place?key=1&type=kpop";

		// when
		mvc.perform(get(url))
				.andExpect(status().isOk()) // status가 200이고
				.andDo(print()); // 요청받은것들으 print 해라
    }
}
