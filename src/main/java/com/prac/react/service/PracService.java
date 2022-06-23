package com.prac.react.service;

import org.springframework.stereotype.Service;
import com.prac.react.model.dao.PracticeDao;

@Service
public class PracService {
	
	private PracticeDao pd;
	
	public PracService (PracticeDao pd) {
		super();
		this.pd = pd;
	}

	public int getMemberCount() {
		return pd.getMemberCount();
	}
}
