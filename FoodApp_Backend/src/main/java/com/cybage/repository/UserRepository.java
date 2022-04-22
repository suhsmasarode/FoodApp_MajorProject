package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybage.model.Restaurants;
import com.cybage.model.User;

public interface UserRepository extends JpaRepository<User,Integer> {

	
	
	public User findByEmailAndPassword(String email,String password);
	
	  User findByEmail(String email);
}
