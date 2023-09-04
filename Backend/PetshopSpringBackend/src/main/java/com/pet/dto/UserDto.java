package com.pet.dto;

import javax.validation.constraints.NotBlank;

public class UserDto {

	
	private int userId;

	@NotBlank(message = "userName can not be Empty")

	private String userName;

	@NotBlank(message = "userType can not be Empty ")

	private String userType;

	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserDto(@NotBlank(message = "userId can not be Empty") int userId,
			@NotBlank(message = "userName can not be Empty") String userName,
			@NotBlank(message = "userType can not be Empty ") String userType) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userType = userType;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

}
