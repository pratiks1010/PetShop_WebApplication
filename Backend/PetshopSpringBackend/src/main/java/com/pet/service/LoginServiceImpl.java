package com.pet.service;

import com.pet.entities.User;
import com.pet.exception.InvalidCredentialsException;
import com.pet.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginServiceImpl implements ILoginService {

    @Autowired
    IUserRepository userRepository;

    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    @Override
    public User login(User user) throws InvalidCredentialsException {
        Optional<User> opt = userRepository.findByUserName(user.getUserName());

        if (!opt.isPresent()) {
            throw new InvalidCredentialsException("Invalid Credentials");
        }

        User dbUser = opt.get();

        // Use bCryptPasswordEncoder.matches() to compare passwords
        if (dbUser.getCustomer() != null &&
            (user.getUserType().equals("CUSTOMER") || user.getUserType().equals("ADMIN")) &&
            bCryptPasswordEncoder.matches(user.getCustomer().getCustomerPassword(), dbUser.getCustomer().getCustomerPassword())) {

            User newUser = new User();
            newUser.setUserId(dbUser.getUserId());
            newUser.setUserName(dbUser.getUserName());
            newUser.setUserType(dbUser.getUserType());
            newUser.setCustomer(dbUser.getCustomer());

            return newUser;
        } else {
            throw new InvalidCredentialsException("Invalid credentials");
        }
    }

    @Override
    public User logout(User user) {
        // No need to set user to null here, simply returning a new User instance
        // would be sufficient to "logout" the user.
        return new User();
    }
}
