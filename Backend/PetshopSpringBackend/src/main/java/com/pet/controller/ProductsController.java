package com.pet.controller;

import java.util.List;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pet.dto.ProductDto;
import com.pet.entities.Product;
import com.pet.exception.ProductNotFoundException;
import com.pet.service.ProductsServiceImpl;

// Products REST Mappings using productsService aggregation
@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductsController {

    // injects the object dependency
    @Autowired
    private ProductsServiceImpl productsService;
    
    
    @Autowired
    private ModelMapper mapper;

    // create
    @PostMapping("/add")
    public Product addProduct(@Valid @RequestBody ProductDto productsDto) {
    	Product products = mapper.map(productsDto, Product.class);
    	System.out.println("inside add products controller");
        return productsService.addProducts(products);
    }

    // update
    @PutMapping("/update")
    public Product updateProducts(@Valid @RequestBody ProductDto productsDto) throws ProductNotFoundException {
    	Product products = mapper.map(productsDto, Product.class);
        return productsService.updateProducts(products);
    }

    // delete
    @DeleteMapping("/remove/{productsId}")
    public Product removeProducts(@PathVariable int productsId) throws ProductNotFoundException {
        return productsService.deleteProducts(productsId);
    }

    // read
    @GetMapping("/view/{productsId}")
    public Product getProducts(@PathVariable int productsId) throws ProductNotFoundException {
        Product products = new Product();
        products.setProductId(productsId);
        return productsService.viewProducts(products);
    }

    // read
    @GetMapping("/show")
    public List<Product> getAllProductss() {
        return productsService.showAllProducts();
    }
}
