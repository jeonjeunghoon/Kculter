package com.prac.react.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.service.PracService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/prac/")
public class PracController {
	private PracService ps;

	public PracController(PracService ps) {
		super();
		this.ps = ps;
	}

	@GetMapping("member")
	public int getMemberCount() {
		return ps.getMemberCount();
	}
}
