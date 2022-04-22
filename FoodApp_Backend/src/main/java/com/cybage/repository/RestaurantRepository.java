package com.cybage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cybage.model.Restaurants;

public interface RestaurantRepository extends JpaRepository<Restaurants, Integer> {
	
	List<Restaurants> findByUserId(int id);
	
	

}
