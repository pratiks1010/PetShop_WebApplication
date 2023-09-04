package com.pet.repository;

import com.pet.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

// Generates code for CRUD and custom methods by extending
@Repository
public interface IUserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUserName(String user);
}
