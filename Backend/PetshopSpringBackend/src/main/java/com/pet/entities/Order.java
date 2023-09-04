package com.pet.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private int orderId;

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

    @Column(name = "dispatch_date", nullable = false)
    private LocalDate dispatchDate;

    @Column(name = "total_cost", nullable = false)
    private float totalCost;

    @OneToOne
    private Product products;

    @ManyToOne(fetch = FetchType.EAGER)
    //@JsonBackReferenc
    private Customer customer;

    public Order() {
    }

    public Order(LocalDate orderDate, LocalDate dispatchDate, float totalCost, Product products, Customer customer) {
        this.orderDate = orderDate;
        this.dispatchDate = dispatchDate;
        this.totalCost = totalCost;
        this.products = products;
        this.customer = customer;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public LocalDate getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
    }

    public LocalDate getDispatchDate() {
        return dispatchDate;
    }

    public void setDispatchDate(LocalDate dispatchDate) {
        this.dispatchDate = dispatchDate;
    }

    public float getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(float totalCost) {
        this.totalCost = totalCost;
    }

    public Product getProducts() {
        return products;
    }

    public void setProducts(Product products) {
        this.products = products;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", orderDate=" + orderDate +
                ", dispatchDate=" + dispatchDate +
                ", totalCost=" + totalCost +
                ", products=" + products +
                ", customer=" + customer +
                '}';
    }
}
