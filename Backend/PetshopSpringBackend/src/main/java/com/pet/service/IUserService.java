package com.pet.service;

import com.pet.entities.User;
import com.pet.exception.UserNotFoundException;

import java.util.List;

// custom service declarations
public interface IUserService {

    public User addUser(User user);

    public User updateUser(User user) throws UserNotFoundException;

    public User removeUser(int userId) throws UserNotFoundException;

    public List<User> showAllUsers();

    public boolean validateUser(int userId, String userName);

    User viewUser(User user) throws UserNotFoundException;
}
