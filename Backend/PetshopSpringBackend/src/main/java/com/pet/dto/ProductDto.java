package com.pet.dto;

import javax.validation.constraints.NotBlank;

public class ProductDto {

	
	private int productId;

	@NotBlank(message = "Invalid Product Name")

	private String productName;

	
	private float productCost;

	@NotBlank(message = "Invalid Product Name")
	private String productCategory;

	@NotBlank(message = "Invalid Product Name")
	private String productDescription;

	private String productBreed;

	public ProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductDto(@NotBlank(message = "productId not null") int productId,
			@NotBlank(message = "Invalid Product Name") String productName,
			@NotBlank(message = "Invalid Product Name") float productCost,
			@NotBlank(message = "Invalid Product Name") String productCategory,
			@NotBlank(message = "Invalid Product Name") String productDescription, String productBreed) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productCost = productCost;
		this.productCategory = productCategory;
		this.productDescription = productDescription;
		this.productBreed = productBreed;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getProductCost() {
		return productCost;
	}

	public void setProductCost(float productCost) {
		this.productCost = productCost;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductBreed() {
		return productBreed;
	}

	public void setProductBreed(String productBreed) {
		this.productBreed = productBreed;
	}

}
