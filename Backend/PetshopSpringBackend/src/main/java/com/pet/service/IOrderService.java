package com.pet.service;


import com.pet.entities.Customer;
import com.pet.entities.Order;
import com.pet.exception.OrderNotFoundException;

import java.time.LocalDate;
import java.util.List;

// custom service declarations
public interface IOrderService {

    public Order addOrder(Order order);

    public Order viewOrder(Order order) throws OrderNotFoundException;

    public Order updateOrder(Order order) throws OrderNotFoundException;

    public Order cancelOrder(int orderId) throws OrderNotFoundException;

    public List<Order> showAllOrders();

    public List<Order> showAllOrders(int customerid);

    public List<Order> showAllOrders(Customer customer);

    public List<Order> showAllOrders(LocalDate date);

    public double calculateTotalCost(int orderId) throws OrderNotFoundException;

}
