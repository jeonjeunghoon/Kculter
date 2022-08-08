package com.prac.react.model.dto.area_code_response;

public class Body {
    private Items items;
    private long numOfRows;
    private long pageNo;
    private long totalCount;

    public Items getItems() { return items; }
    public void setItems(Items value) { this.items = value; }

    public long getNumOfRows() { return numOfRows; }
    public void setNumOfRows(long value) { this.numOfRows = value; }

    public long getPageNo() { return pageNo; }
    public void setPageNo(long value) { this.pageNo = value; }

    public long getTotalCount() { return totalCount; }
    public void setTotalCount(long value) { this.totalCount = value; }
}
