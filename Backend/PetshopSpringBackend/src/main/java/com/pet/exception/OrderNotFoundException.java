package com.pet.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// sending custom response for requested source
@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Order Not Found")
public class OrderNotFoundException extends Exception {

    public OrderNotFoundException(String message) {
        super(message);
    }

}
