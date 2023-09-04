package com.pet.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="user_id")
	private int userId;
	
	
	@Column(name="user_name",nullable=false,unique=true)
	private String userName;
	
	
	@Column(name="user_type",nullable=false)
	private String userType;
	
	//user to customer relation
    @OneToOne(cascade= {CascadeType.ALL})
	private Customer customer;
	
	public User() {
		
	}
	
	public User(String userName, String userType) {
		this.userName=userName;
		this.userType=userType;
	}
	
	public User(String userName, String userType, Customer customer) {
        this.userName = userName;
        this.userType = userType;
        this.customer = customer;
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

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userType=" + userType + ", customer=" + customer
				+ "]";
	}
		
}
