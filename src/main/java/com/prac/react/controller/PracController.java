package com.prac.react.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prac.react.service.PracService;

@RestController
@RequestMapping("/prac/")
public class PracController {
	private PracService ps;

	public PracController(PracService ps) {
		super();
		this.ps = ps;
	}

	@CrossOrigin(origins = "http://localhost:3000, http://43.201.18.118:3000, http://kculter.com:3000")
	@GetMapping("member")
	public int getMemberCount() {
		return ps.getMemberCount();
	}
}
