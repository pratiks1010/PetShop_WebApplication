package com.pet.controller;

import com.pet.entities.User;
import com.pet.exception.InvalidCredentialsException;
import com.pet.service.ILoginService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    ILoginService loginService;

    @PostMapping("/login")
    ResponseEntity<User> login(@Valid @RequestBody User user) throws InvalidCredentialsException {
        User login = loginService.login(user);
        return new ResponseEntity<>(login, HttpStatus.OK);
    }

    @PostMapping("/logout")
    ResponseEntity<User> logout(@Valid @RequestBody User user) {
        User logout = loginService.logout(user);
        return new ResponseEntity<>(logout, HttpStatus.OK);
    }
}
