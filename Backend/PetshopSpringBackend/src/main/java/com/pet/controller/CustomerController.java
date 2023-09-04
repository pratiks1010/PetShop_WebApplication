package com.pet.controller;

import com.pet.dto.CustomerDto;
import com.pet.entities.Customer;
import com.pet.exception.CustomerNotFoundException;
import com.pet.service.CustomerServiceImpl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

// Customer REST Mappings using customerService aggregation
@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

    // inject the object dependency implicitly
    @Autowired
    private CustomerServiceImpl customerService;
    
    @Autowired
    private ModelMapper mapper;

    /*@PostMapping("/login")
    public Map<String, String> customerLogin(@RequestBody User user) {
        return customerService.validateLogin(user);
    }*/

    // create mapping
    @PostMapping("/add")
    public Customer addCustomer(@Valid @RequestBody CustomerDto customerDto) {
    	
    	Customer customer = mapper.map(customerDto, Customer.class);
        return customerService.addCustomer(customer);
    }

    // update mapping
    @PutMapping("/update")
    public Customer updateCustomer(@Valid @RequestBody CustomerDto customerDto) throws CustomerNotFoundException {
    	Customer customer = mapper.map(customerDto, Customer.class);
        return customerService.updateCustomer(customer);
    }

    // delete mapping
    @DeleteMapping("/remove/{customerId}")
    public Customer removeCustomer(@PathVariable int customerId) throws CustomerNotFoundException {
        return customerService.deleteCustomer(customerId);
    }

    // read mapping
    @GetMapping("/view/{customerId}")
    public Customer getCustomer(@PathVariable int customerId) throws CustomerNotFoundException {
        Customer customer = new Customer();
        customer.setCustomerId(customerId);
        return customerService.viewCustomer(customer);
    }

    // read mapping
    @GetMapping("/show")
    public List<Customer> getAllCustomers() {
        return customerService.showAllCustomers();
    }
}
