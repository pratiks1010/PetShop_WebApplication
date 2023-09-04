package com.pet.service;

import com.pet.entities.User;
import com.pet.exception.UserNotFoundException;
import com.pet.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

// business logic for user service
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    public User addUser(User user) {
    	
    	BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
    	String crptpassword=bcrypt.encode(user.getCustomer().getCustomerPassword());
    
    	user.getCustomer().setCustomerPassword(crptpassword);
    	
        return userRepository.saveAndFlush(user);
    }

    @Override
    public User updateUser(User user) throws UserNotFoundException {
        if (userRepository.existsById(user.getUserId())) {
            return userRepository.saveAndFlush(user);
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }

    @Override
    public User removeUser(int userId) throws UserNotFoundException {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return null;
        } else {
            throw new UserNotFoundException("User Not Found");
        }
    }

    @Override
    public List<User> showAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean validateUser(int userId, String userName) {
        return userRepository.findById(userId).get().getUserName().equals(userName);
    }

    @Override
    public User viewUser(User user) throws UserNotFoundException {
        if (userRepository.existsById(user.getUserId())) {
            return userRepository.findById(user.getUserId()).get();
        } else {
            throw new UserNotFoundException("Order Not Found");
        }
    }
}
