package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.dto.LoginResponse;
import com.cybage.model.MenuCategory;
import com.cybage.model.MenuItems;
import com.cybage.model.Restaurants;
import com.cybage.model.User;
import com.cybage.repository.MenuCategoryRepository;
import com.cybage.repository.MenuItemRepository;
import com.cybage.repository.RestaurantRepository;
import com.cybage.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;

	@Autowired
	RestaurantRepository restaurantRepository;

	@Autowired
	MenuCategoryRepository menuCategoryRepository;

	@Autowired
	MenuItemRepository menuItemRepository;

	public void addUser(User user) {
		System.out.println("User details : " + user.getEmail() + " " + user.getZipcode());
		repo.save(user);

	}

	public LoginResponse userLogin(String email, String password) {
		System.out.println("service email : " + email + " " + password);
		User user = repo.findByEmailAndPassword(email, password);
		System.out.println("in service user details : " + user.toString());
		if ("customer".equals(user.getRole())) {
			return new LoginResponse(user.getEmail(), user.getRole(),user.getId());
		} else if ("owner".equals(user.getRole())) {
			return new LoginResponse(user.getEmail(), user.getRole(),user.getId());
		} else {
			return new LoginResponse(user.getEmail(), user.getRole(),user.getId());
		}
		// System.out.println("in service user :"+user.toString());

	}

	public List<Restaurants> getUserByEmail(String email) {
		// System.out.println(email);
		User user = repo.findByEmail(email);
		System.out.println(user);
		List<Restaurants> ownerRestro = restaurantRepository.findByUserId(user.getId());
//		for(Restaurants r:ownerRestro)
//		{
//			System.out.println("Owner Restaurants in User service  is : "+r);
//		}
		return ownerRestro;
	}

	public void addCategory(MenuCategory menuCategory) {
		MenuCategory category = menuCategoryRepository.save(menuCategory);
		System.out.println("Menu category in service " + category);
	}

	public List<MenuCategory> getCategories(int restroId) {
		List<MenuCategory> findByRestroId = menuCategoryRepository.findByRestaurants(restroId);
		for (MenuCategory r : findByRestroId) {
			System.out.println("Categories in User service  is : " + r);
		}
		return findByRestroId;

	}

	public void addItems(MenuItems menuItems) {

		MenuItems save = menuItemRepository.save(menuItems);
		System.out.println("Items in service " + save.toString());

	}

	public List<Restaurants> getRestaurantsToUser() {
		List<Restaurants> findAll = restaurantRepository.findAll();
		for (Restaurants r : findAll) {
			System.out.println("Restaurants : " + r);
		}
		return findAll;
	}
	
	
	public List<MenuItems> getMenuItems(int categoryId) {
		List<MenuItems> menuItemsList = menuItemRepository.findByCategory(categoryId);
		for (MenuItems r : menuItemsList) {
			System.out.println("Menu items in service  : " + r);
		}
		return menuItemsList;
	}

}
