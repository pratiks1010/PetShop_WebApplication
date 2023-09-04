package com.pet.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pet.entities.Customer;

//Generates code for CRUD and custom methods by extending
@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

 Customer findByCustomerPassword(String customer);
}
