package com.pet.controller;

import java.time.LocalDate;
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

import com.pet.dto.OrderDto;
import com.pet.entities.Customer;
import com.pet.entities.Order;
import com.pet.exception.OrderNotFoundException;
import com.pet.service.OrderServiceImpl;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;
    
    
    @Autowired
    private ModelMapper mapper;

    // add order
    @PostMapping("/add")
    public Order addOrder(@Valid @RequestBody OrderDto orderDto) {
    	
    	Order order = mapper.map(orderDto, Order.class);
        return orderService.addOrder(order);
    }

    // update order
    @PutMapping("/update")
    public Order updateOrder(@Valid @RequestBody OrderDto orderDto) throws OrderNotFoundException {
    	
    	Order order = mapper.map(orderDto, Order.class);
        return orderService.updateOrder(order);
    }

    // delete order
    @DeleteMapping("/remove/{orderId}")
    public Order removeOrder(@PathVariable int orderId) throws OrderNotFoundException {
        return orderService.cancelOrder(orderId);
    }

    // read all orders
    @GetMapping("/show")
    public List<Order> getAllOrders() {
        return orderService.showAllOrders();
    }

    // read order
    @GetMapping("/view/{orderId}")
    public Order getOrder(@PathVariable int orderId) throws OrderNotFoundException {
        Order order = new Order();
        order.setOrderId(orderId);
        return orderService.viewOrder(order);
    }

    // read order by medicine
    @GetMapping("/show-by-product/{productId}")
    public List<Order> getAllOrdersByProduct(@PathVariable int productId) {
        return orderService.showAllOrders(productId);
    }

    // read order by customer
    @GetMapping("/show-by-customer/{customerId}")
    public List<Order> getAllOrdersByCustomer(@PathVariable int customerId) {
        Customer customer = new Customer();
        customer.setCustomerId(customerId);
        return orderService.showAllOrders(customer);
    }

    // read order by date
    @GetMapping("/show-by-date/{date}")
    public List<Order> getAllOrdersByDate(@PathVariable String date) {
        LocalDate localDate = LocalDate.parse(date);
        return orderService.showAllOrders(localDate);
    }

    // get total cast
    @GetMapping("/total/{orderId}")
    public double orderTotal(@PathVariable int orderId) throws OrderNotFoundException {
        return orderService.calculateTotalCost(orderId);
    }
}
