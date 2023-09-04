package com.pet.exception;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

// To get custom error messages rather than server error
// automatic detection of bean
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		Map<String, Object> responseBody = new LinkedHashMap<>();

		List<String> allErrors = new ArrayList<>();
		ex.getBindingResult().getAllErrors().forEach(error -> allErrors.add(error.getDefaultMessage()));
		responseBody.put("Issues:", allErrors);

		return new ResponseEntity<>(responseBody, headers, status);
	}
}
