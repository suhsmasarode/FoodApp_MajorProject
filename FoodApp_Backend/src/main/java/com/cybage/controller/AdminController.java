package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.model.Restaurants;
import com.cybage.model.User;
import com.cybage.service.AdminService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class AdminController {
	
	@Autowired
	AdminService service;
	
	@GetMapping("/getAllOwners")
	public ResponseEntity<List<User>> getAllOwners() {
		List<User> allOwners = service.getAllOwners();
		return new ResponseEntity<List<User>>(allOwners, HttpStatus.FOUND);
	}
	
	@GetMapping("/getAllRestaurants")
	public ResponseEntity<List<Restaurants>> getAllRestaurants() {
		List<Restaurants> allRestaurants = service.getAllRestaurants();
		return new ResponseEntity<List<Restaurants>>(allRestaurants, HttpStatus.FOUND);
	}
	
	
	
	@PostMapping("/addRestaurant")
	public ResponseEntity<String> addRestaurant(@RequestBody Restaurants restaurant)
	{
		System.out.println("Restaurant is : "+restaurant.toString());
		service.addRestaurant(restaurant);
		
		return new ResponseEntity<String>("Restaurant added Successfully !",HttpStatus.CREATED);
	}

	@DeleteMapping("/deleteRestaurantById/{id}")
	public ResponseEntity<String> deleteRestaurantById(@PathVariable int id) {
		System.out.println("Restro id is: "+id);
		service.deleteRestaurantById(id);
		return new ResponseEntity<String>("Restaurant deleted Successfully", HttpStatus.OK);
	}
	
	@PutMapping("updateRestaurant/{id}")
	public ResponseEntity<String> updateRestaurantS(@PathVariable int id, @RequestBody Restaurants restaurant) {
		System.out.println("Id from frontend : "+id);
		System.out.println("Restro is : "+restaurant);
		service.updateRestaurant(id, restaurant);
		return new ResponseEntity<String>("Restaurant Updated", HttpStatus.OK);
	}
	
	

}
