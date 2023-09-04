package com.pet.service;

import com.pet.entities.Product;
import com.pet.exception.ProductNotFoundException;
import com.pet.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// business logic for products service
@Service
public class ProductsServiceImpl implements IProductService {

    @Autowired
    private IProductRepository productsRepository;

    public ProductsServiceImpl(IProductRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    @Override
    public Product addProducts(Product products) {
       return productsRepository.save(products);
    }

    @Override
    public Product viewProducts(Product Products) throws ProductNotFoundException {
        if (productsRepository.existsById(Products.getProductId())) {
            System.out.println(productsRepository.findById(Products.getProductId()).get());
            return productsRepository.findById(Products.getProductId()).get();
        } else {
            throw new ProductNotFoundException("Product Not Found");
        }
    }

    @Override
    public Product updateProducts(Product products) throws ProductNotFoundException {
        if (productsRepository.existsById(products.getProductId())) {
            return productsRepository.saveAndFlush(products);
        } else {
            throw new ProductNotFoundException("Product Not Found");
        }
    }

    @Override
    public Product deleteProducts(int productId) throws ProductNotFoundException {
        if (productsRepository.existsById(productId)) {
        	productsRepository.deleteById(productId);
            return null;
        } else {
            throw new ProductNotFoundException("Product Not Found");
        }
    }

    @Override
    public List<Product> showAllProducts() {
        return productsRepository.findAll();
    }
}
