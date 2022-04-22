package com.cybage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.model.Restaurants;
import com.cybage.model.User;
import com.cybage.repository.RestaurantRepository;
import com.cybage.repository.UserRepository;

@Service
public class AdminService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
	RestaurantRepository restRepo;

	public List<User> getAllOwners() {
		List<User> users = userRepo.findAll();
		ArrayList<User> owners=new ArrayList<>(); 
		for(User user:users)
		{
			if("owner".equals(user.getRole())) {
				owners.add(user);
			}
		}
		if(owners.isEmpty()){
			return null;
		}
//		for(User owner:owners)
//		{
//			System.out.println("List : "+owner);
//		}
		
		//System.out.println("owner : "+owners);
		return owners;
	}

	public void addRestaurant(Restaurants restaurant) {
		
		restRepo.save(restaurant);
		
	}

	public List<Restaurants> getAllRestaurants() {
		List<Restaurants> findAll = restRepo.findAll();
		for(Restaurants r:findAll)
		{
			System.out.println("Restaurants : "+r);
		}
		return findAll;
	}

	public void deleteRestaurantById(int id) {
		restRepo.deleteById(id);
	}

	public void updateRestaurant(int id, Restaurants restaurant) {
		Restaurants rest = restRepo.getById(id);
		
		System.out.println("Restro from service : "+rest.toString());
		rest.setRestroName(restaurant.getRestroName());
		rest.setLocation(restaurant.getLocation());
		rest.setUser(restaurant.getUser());
		
		System.out.println("Updated Restro from service : "+rest.toString());
		restRepo.save(rest);
		
	}

	

	
	
}
