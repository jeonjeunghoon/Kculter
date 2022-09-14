package com.prac.react.error;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import com.prac.react.controller.MemberController;

@ControllerAdvice
class FileSizeExceptionAdvice {
    Logger logger = LoggerFactory.getLogger(MemberController.class);

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public int handleFileSizeException(Exception e){
        logger.error("File size is too big");
        return 205;
    }
}
