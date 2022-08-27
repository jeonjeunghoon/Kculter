package com.prac.react.service;

import java.nio.channels.CompletionHandler;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.prac.react.model.dao.CourseDao;
import com.prac.react.model.dto.Course;
import com.prac.react.model.dto.CourseWrapper;
import com.prac.react.model.dto.Place;
import com.prac.react.thread.CourseThread;

@Service
public class CourseService {
    Logger logger = LoggerFactory.getLogger(CourseService.class);

    private CourseDao cd;

    public CourseService(CourseDao cd){
        this.cd = cd;
    }

    public Integer checkPlaceDb(Place place){
        return cd.checkPlaceDb(place);
    }

    public int saveNewPlace(Place place){
        return cd.saveNewPlace(place);
    }

    public int insertCourse(Course course){
        return cd.insertCourse(course);
    }

    public List<Course> getCourses(int memberNum){
        return cd.getCourses(memberNum);
    }

    public List<CourseWrapper> getMemberCourseWrapper(int memberNum, List<Course> courses) throws InterruptedException {

        //여기서 내가 할일은 Course의 개수만큼 Thread를 생성해서 일을 처리할것이다.
		//Thread를 생성해서 일을 처리하는 이유는 하나의 코스당 여러개의 Place의 정보가있기 때문이다.
		//이것을 병렬적으로 처리하지 않고 직렬로 처리하게 되면 시간복잡도는 O(n^2)가 된다.
		//따라서 이부분은 병렬적으로 처리해서 시간복잡도를 최대한 줄여야 한다.
		//Thread를 사용하려면 Memory 관리가 중요하다. 
		//사용하지 않는 Thread는 끝내줘서 Memory를 반환받고 작업이 필요한 Thread는 Meomory를 할당해줘야 한다.
		//이렇게 Thread를 사용하는데 Memory 할당이 번거로워서 아주뛰어난 누군가가 이를 쉽게 알아서 해주는 ThreadPool을 만들었다.
		//ThreadPool은 일반 Thread와는 달리 특정 개수에 맞게 Thread를 생성할 준비를 마친다음
		//특정 큐에 작업이 있을때마다 Thread를 생성해 Thread에 메모리를 할당해주는것이다.
		//그럼 ThreadPool은 어떻게 사용하는걸까??
		//자바에서는 ThreadPool을 java.util.concurrent.ExecutorService를 통해서 제공해준다.
		//그래서 나는 이제 ExecutorService를 사용해서 Thread를 관리할것이다.
		//자세한 사항은 https://wpioneer.tistory.com/228?category=1023662 를 확인해봐라.(광고클릭 필수...)

        List<CourseWrapper> memberCourseList = new ArrayList<>();
        
        CountDownLatch cdl = new CountDownLatch(courses.size()); //작업중인 Thread가 끝날때까지 기다리기위해
        ExecutorService exs = Executors.newCachedThreadPool(); //작업개수가 적은 관계로 Thread를 따로 지정하지 않고 작업수에 맞춰서 한다.
		logger.info("CounDownLatch count : "+cdl.getCount());

        CompletionHandler<CourseWrapper,Void> callback = new CompletionHandler<CourseWrapper,Void>() {
			//성공했을때
			@Override
			public void completed(CourseWrapper result,Void attachment){
                if(result == null){
                    logger.error("CourseWrapper is empty");
                    cdl.countDown();
                }else{
                    memberCourseList.add(result);
                    cdl.countDown();
                }
			}
			//실패했을때
			@Override
			public void failed(Throwable exc,Void attachment){
				logger.error("Place info DB fetch failed");
                cdl.countDown();
			}
		};

		for(Course course : courses){
			//이제 여기서는 course를 보내서 course에 있는 Place를 다 뽑아올것이다.
			exs.submit(new CourseThread(course, callback, memberNum));
		}
		exs.shutdown(); //현재 돌아가고있는 Thread를 제외하고 나머지는 종료
        cdl.await(); //기다린다.

        if(memberCourseList.isEmpty()){
            logger.error("Memeber course list is empty");
        }
        
        logger.info("------------Result------------");

        for(CourseWrapper cw : memberCourseList){
            logger.info(cw.toString());
        }

        return memberCourseList;

    }
}
