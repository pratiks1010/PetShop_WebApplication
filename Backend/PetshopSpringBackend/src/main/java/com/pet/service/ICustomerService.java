package com.pet.service;


import com.pet.entities.Customer;
import com.pet.exception.CustomerNotFoundException;

import java.util.List;


// custom service declarations
public interface ICustomerService {

    public Customer addCustomer(Customer customer);

    public Customer updateCustomer(Customer customer) throws CustomerNotFoundException;

    public Customer viewCustomer(Customer customer) throws CustomerNotFoundException;

    public Customer deleteCustomer(int customerId) throws CustomerNotFoundException;

    public List<Customer> showAllCustomers();

}
