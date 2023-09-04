package com.pet.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.pet.entities.User;
import com.pet.exception.UserNotFoundException;
import com.pet.service.IUserService;

// User REST Mappings using userService aggregation
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
@Valid
public class UserController {

    // inject the object dependency implicitly
    @Autowired
    private IUserService userService;

    // create mapping
    @PostMapping("/add")
    public User addUser(@Valid @RequestBody User user) {
        return userService.addUser(user);
    }

    // update mapping
    @PutMapping("/update")
    public User updateUser(@Valid @RequestBody User user) throws UserNotFoundException {
        return userService.updateUser(user);
    }

    // delete mapping
    @DeleteMapping("/remove/{userId}")
    public User removeUser(@PathVariable("userId") int userId) throws UserNotFoundException {
        return userService.removeUser(userId);
    }

    // read order
    @GetMapping("/view/{userId}")
    public User getUser(@PathVariable int userId) throws UserNotFoundException {
        User user = new User();
        user.setUserId(userId);
        return userService.viewUser(user);
    }

    // read mapping
   @GetMapping("/show")
    public List<User> getAllUsers() {
    	System.err.println("errorrfsgsfmgjsdnfvjsfnvhcxkc vr");
        return userService.showAllUsers();
    }

    // read mapping
    @GetMapping("/validate-user/{userId}/{userName}")
    public boolean validateUser(@PathVariable("userId") int userId, @PathVariable("userName") String userName) {
        return userService.validateUser(userId, userName);
    }
}
