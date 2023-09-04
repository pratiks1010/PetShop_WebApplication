package com.pet.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

public class OrderDto {
	
	
	
	    private int orderId;

	@NotBlank(message = "OrderDate no be null")
	    private LocalDate orderDate;

	@NotBlank(message = "OrderDispatchDate no be null")
	    private LocalDate dispatchDate;

	@NotBlank(message = "totalCost not be ")
	  private float totalCost;

}
