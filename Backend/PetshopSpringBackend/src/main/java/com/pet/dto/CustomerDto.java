package com.pet.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

public class CustomerDto {

	private int customerId;

	@NotBlank(message = "Invalid Customer Name")

	private String customerName;

	@NotBlank(message = "Invalid Customer Password")
	private String customerPassword;

	public CustomerDto() {
		super();

	}

	public CustomerDto(@NotBlank(message = "Customer id auto") int customerId,
			@NotBlank(message = "Invalid Customer Name") String customerName,
			@NotBlank(message = "Invalid Customer Password") String customerPassword) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerPassword = customerPassword;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerPassword() {
		return customerPassword;
	}

	public void setCustomerPassword(String customerPassword) {
		this.customerPassword = customerPassword;
	}

}
