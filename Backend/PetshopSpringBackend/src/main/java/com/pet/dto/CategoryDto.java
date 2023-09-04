package com.pet.dto;

import javax.validation.constraints.NotBlank;

public class CategoryDto {

	
	private int categoryId;

	@NotBlank(message = "Category name cannot be empty")
	private String categoryName;

	public CategoryDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryDto(@NotBlank(message = "Category id cannot be empty") int categoryId,
			@NotBlank(message = "Category name cannot be empty") String categoryName) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

}
