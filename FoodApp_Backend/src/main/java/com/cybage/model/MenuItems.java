package com.cybage.model;

import java.util.Arrays;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "menuItems")
public class MenuItems {

	@Id
	@GeneratedValue
	private int menuItemId;
	private String menuItemName;
	private double price;

	@ManyToOne
	@JoinColumn(name = "categoryId")
	private MenuCategory menuCategory;

	@ManyToOne
	@JoinColumn(name = "restro_id")
	private Restaurants restaurants;

	@OneToMany(mappedBy = "menuItems")
	private List<OrderDetails> orderDetails;

	public MenuItems() {
		// TODO Auto-generated constructor stub
	}

	public MenuItems(int menuItemId, String menuItemName, double price, MenuCategory menuCategory,
			Restaurants restaurants, List<OrderDetails> orderDetails) {
		super();
		this.menuItemId = menuItemId;
		this.menuItemName = menuItemName;
		this.price = price;
		this.menuCategory = menuCategory;
		this.restaurants = restaurants;
		this.orderDetails = orderDetails;
	}

	public int getMenuItemId() {
		return menuItemId;
	}

	public void setMenuItemId(int menuItemId) {
		this.menuItemId = menuItemId;
	}

	public String getMenuItemName() {
		return menuItemName;
	}

	public void setMenuItemName(String menuItemName) {
		this.menuItemName = menuItemName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public MenuCategory getMenuCategory() {
		return menuCategory;
	}

	public void setMenuCategory(MenuCategory menuCategory) {
		this.menuCategory = menuCategory;
	}

	public Restaurants getRestaurants() {
		return restaurants;
	}

	public void setRestaurants(Restaurants restaurants) {
		this.restaurants = restaurants;
	}

	public List<OrderDetails> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(List<OrderDetails> orderDetails) {
		this.orderDetails = orderDetails;
	}

	@Override
	public String toString() {
		return "MenuItems [menuItemId=" + menuItemId + ", menuItemName=" + menuItemName + ", price=" + price
				+ ", menuCategory=" + menuCategory + ", restaurants=" + restaurants + ", orderDetails=" + orderDetails
				+ "]";
	}

}
