package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cybage.dto.ErrorResponse;
import com.cybage.dto.LoginRequest;
import com.cybage.model.MenuCategory;
import com.cybage.model.MenuItems;
import com.cybage.model.Restaurants;
import com.cybage.model.User;
import com.cybage.service.UserService;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

	@Autowired
	UserService service;
	
	@PostMapping("/addUser")
	public ResponseEntity<String> addUser(@RequestBody User User)
	{
		service.addUser(User);
		System.out.println("details :"+User.getEmail()+" "+User.getZipcode());
		return new ResponseEntity<String>("User Added Successfully !",HttpStatus.CREATED);
	}
	

	@GetMapping("/getUserByEmail/{email}")
	public List<Restaurants> getUserByEmail(@PathVariable String email) {
		System.out.println("Owner email is " + email);
		List<Restaurants> restro = service.getUserByEmail(email);
		return restro;
	}

	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest user){
		try {
			System.out.println("In user controller : "+user.toString());
			return new ResponseEntity<>(service.userLogin(user.getUserEmail(),user.getUserPassword()),HttpStatus.OK);
		}catch(RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Login Failed.Invalid Credentials",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
	}
	
	@PostMapping("/addCategory")
	public ResponseEntity<String> addCategory(@RequestBody MenuCategory menuCategory)
	{
		service.addCategory(menuCategory);
		
		return new ResponseEntity<String>("Category Added Successfully !",HttpStatus.CREATED);
	}
	
	@GetMapping("/getCategory/{restroId}")
	public List<MenuCategory> getCategories(@PathVariable int restroId) {
		return service.getCategories(restroId);
	}
	
	@PostMapping("/addItem")
	public ResponseEntity<String> addItem(@RequestBody MenuItems menuItems)
	{
		System.out.println("Items in Controller "+menuItems.toString());
		service.addItems(menuItems);
		return new ResponseEntity<String>("Item Added Successfully !",HttpStatus.CREATED);
	}
	
	@GetMapping("/getRestaurantsToUser")
	public ResponseEntity<List<Restaurants>> getRestaurantsToUser() {
		List<Restaurants> allRestaurants = service.getRestaurantsToUser();
		return new ResponseEntity<List<Restaurants>>(allRestaurants, HttpStatus.FOUND);
	}
	
	@GetMapping("/getMenuCategory/{restroId}")
	public ResponseEntity<List<MenuCategory>> getMenuCategoryToUser(@PathVariable int restroId) {
		List<MenuCategory> allMenuCategory =  service.getCategories(restroId);
//		for(MenuCategory r:allMenuCategory)
//		{
//			System.out.println("Menu Category in User Menu  is : "+r);
//		}
		return new ResponseEntity<List<MenuCategory>>(allMenuCategory, HttpStatus.FOUND);
	}
	
	
	@GetMapping("/getMenuItems/{categoryId}")
	public ResponseEntity<List<MenuItems>> getMenuItemsToUser(@PathVariable int categoryId) {
		List<MenuItems> allMenuItems =  service.getMenuItems(categoryId);
//		for(MenuItems r:allMenuItems)
//		{
//			System.out.println("Menu Items in user restro : "+r);
//		}
		return new ResponseEntity<List<MenuItems>>(allMenuItems, HttpStatus.FOUND);
	}
	
}
