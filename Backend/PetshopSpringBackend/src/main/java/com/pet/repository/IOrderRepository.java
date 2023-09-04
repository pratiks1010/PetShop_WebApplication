package com.pet.repository;

import com.pet.entities.Customer;
import com.pet.entities.Order;
import com.pet.entities.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

// Generates code for CRUD and custom methods by extending
@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer> {

    List<Order> findAllByOrderDateOrDispatchDate(LocalDate date, LocalDate date1);

    List<Order> findAllByProducts(Product products);

    List<Order> findAllByCustomer(Customer customer);
}
