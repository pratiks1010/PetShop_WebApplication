package com.pet.service;

import com.pet.entities.User;
import com.pet.exception.InvalidCredentialsException;

public interface ILoginService {

    User login(User user) throws InvalidCredentialsException;

    User logout(User user);
}
