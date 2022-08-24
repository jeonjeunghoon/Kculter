package com.prac.react.thread;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

//Thread 내에선 의존성 주입이 @Autowired로 되지 않는다 따라서 직접 의존성 주입이 필요하다.
//그래서 이 Class를 만들었다.
//이 클래스의 자세한건 모르지만 의존성주입을 받기위해선 getBean()를 호출하면 된다.

@Component
public class ApplicationContextProvider implements ApplicationContextAware {

	private static ApplicationContext applicationContext;

	@Override
	public void setApplicationContext(ApplicationContext ac) throws BeansException {
		applicationContext = ac;
	}

	public static ApplicationContext getApplicationContext() {
		return applicationContext;
	}
	
	public static <T> T getBean(Class<T> clazz) {
		return applicationContext.getBean(clazz);
	}

}