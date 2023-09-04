package com.pet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.pet.entities.Product;

//Generates code for CRUD and custom methods by extending
@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

}
