package com.pet.service;

import com.pet.entities.Customer;
import com.pet.entities.Product;
import com.pet.entities.Order;
import com.pet.exception.OrderNotFoundException;
import com.pet.repository.IProductRepository;
import com.pet.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

// business logic for order service
@Service
public class OrderServiceImpl implements IOrderService {

    @Autowired
    private IOrderRepository orderRepository;
    @Autowired
    private IProductRepository productsRepository;

    @Override
    public Order addOrder(Order order) {
        System.out.println("Adding order: " + order.toString()); // Log adding order
        return orderRepository.save(order);
    }


    @Override
    public List<Order> showAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order viewOrder(Order order) throws OrderNotFoundException {
        if (orderRepository.existsById(order.getOrderId())) {
            return orderRepository.findById(order.getOrderId()).get();
        } else {
            throw new OrderNotFoundException("Order Not Found");
        }
    }

    @Override
    public Order updateOrder(Order order) throws OrderNotFoundException {
        if (orderRepository.existsById(order.getOrderId())) {
            Product med = productsRepository.findById(order.getProducts().getProductId()).get();
            order.setTotalCost(med.getProductCost());
            return orderRepository.saveAndFlush(order);
        } else {
            throw new OrderNotFoundException("Order Not Found");
        }
    }

    @Override
    public Order cancelOrder(int orderId) throws OrderNotFoundException {
        if (orderRepository.existsById(orderId)) {
            orderRepository.deleteById(orderId);
            return null;
        } else {
            throw new OrderNotFoundException("Order Not Found");
        }
    }

    @Override
    public List<Order> showAllOrders(int productsId) {
    	Product product = new Product();
//    	products.setProductId(productsId);
    	product.setProductId(productsId);
        return orderRepository.findAllByProducts(product);
    }

    @Override
    public List<Order> showAllOrders(Customer customer) {
        return orderRepository.findAllByCustomer(customer);
    }

    @Override
    public List<Order> showAllOrders(LocalDate date) {
        return orderRepository.findAllByOrderDateOrDispatchDate(date, date);
    }

    @Override
    public double calculateTotalCost(int orderId) throws OrderNotFoundException {
        if (orderRepository.existsById(orderId)) {
            double totalCost = 0;
            Order order = orderRepository.findById(orderId).get();
//            for (Product products : order.getProduct()) {
//                Product med = productsRepository.findById(products.getProductId()).get();
//                totalCost += med.getProductCost();
//            }
            Product products = order.getProducts();
//            productsRepository.findById(products.getProductId());
            order.setTotalCost((float)products.getProductCost());
            totalCost = order.getTotalCost();
            orderRepository.saveAndFlush(order);
            return totalCost;
        } else {
            throw new OrderNotFoundException("Order Not Found");
        }
    }
}
