package com.cybage.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "menu_category")
public class MenuCategory {

	@Id
	@GeneratedValue
	private int categoryId;
	private String categoryName;

	@ManyToOne
	@JoinColumn(name = "restro_id")
	private Restaurants restaurants;

	public MenuCategory() {
		// TODO Auto-generated constructor stub
	}

	public MenuCategory(int categoryId, String categoryName, Restaurants restaurants) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.restaurants = restaurants;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public Restaurants getRestaurants() {
		return restaurants;
	}

	public void setRestaurants(Restaurants restaurants) {
		this.restaurants = restaurants;
	}

	@Override
	public String toString() {
		return "MenuCategory [categoryId=" + categoryId + ", categoryName=" + categoryName + ", restaurants="
				+ restaurants + "]";
	}

	

}
