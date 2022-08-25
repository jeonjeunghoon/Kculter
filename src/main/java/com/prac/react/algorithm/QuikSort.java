package com.prac.react.algorithm;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.prac.react.model.dto.CourseWrapper;

public class QuikSort {
    private List<CourseWrapper> cwl;
    Logger logger = LoggerFactory.getLogger(QuikSort.class);

    public QuikSort(){}

    public QuikSort(List<CourseWrapper> cwl) {
        this.cwl = cwl;
        if(cwl.isEmpty()){
            logger.warn("CourseWrapper list is empty");
        }else{
            quikSort(this.cwl);
        }
    }

    public void quikSort(List<CourseWrapper> cwl){
        quikSort(cwl,0,cwl.size()-1);
    }

    public void quikSort(List<CourseWrapper> cwl,int start, int end){
        int partition = partition(cwl, start, end); //정렬한번하고
        //재귀호출을 하여 또다시 분리된 애들을 정복하는것임
        if(start<partition-1){//start가 end보다 작을때
            quikSort(cwl, start, partition-1);
        } 
        if(partition < end){//end가 start보다 클때
            quikSort(cwl,partition,end);
        } 
    }
    public int partition(List<CourseWrapper> cwl, int start, int end){
        int pivot = cwl.get((start+end)/2).getCourseNum(); //start와 end 중간에 있는 정렬 기준값을 가져옴
        //여기서 해야할것은 일단 start<=end일때까지 돈다.
        //이걸 하는 이유는 그래야지 정렬을 한것이기때문
        while(start<=end){
            while(cwl.get(start).getCourseNum() < pivot) start++;
            while(cwl.get(end).getCourseNum() > pivot) end--;
            if(start<=end){
                swap(cwl,start,end);
                start++;
                end--;
            }
        }
        return start;

    }
    public void swap(List<CourseWrapper> cwl,int start, int end){
        int tmp = cwl.get(start).getCourseNum();
        cwl.get(start).setCourseNum(cwl.get(end).getCourseNum());
        cwl.get(end).setCourseNum(tmp);
    }

    public List<CourseWrapper> getCwl() {
        return this.cwl;
    }

    public void setCwl(List<CourseWrapper> cwl) {
        this.cwl = cwl;
    }
}
