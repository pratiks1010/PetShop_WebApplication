package com.pet.service;


import com.pet.entities.Product;
import com.pet.exception.ProductNotFoundException;

import java.util.List;

// custom service declarations
public interface IProductService {

    public Product addProducts(Product Products);

    public Product viewProducts(Product Products) throws ProductNotFoundException;

    public Product updateProducts(Product Products) throws ProductNotFoundException;

    public Product deleteProducts(int id) throws ProductNotFoundException;

    public List<Product> showAllProducts();

}
