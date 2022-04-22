package com.cybage.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="restaurants_details")
public class Restaurants {
	@Id
	@GeneratedValue
	private int restroId;
	private String restroName;
	private String location;
	
	@JoinColumn(name = "userId")
	@ManyToOne
	private User user;
	
//	@OneToMany(mappedBy = "restaurants")
//    private List<MenuCategory> category;
//	
//	@OneToMany(mappedBy = "restaurants")
//    private List<MenuItems> menuItems;
	
	public Restaurants() {
		super();
	}

	public Restaurants(int restroId, String restroName, String location, User user) {
		super();
		this.restroId = restroId;
		this.restroName = restroName;
		this.location = location;
		this.user = user;
		
	}

	public int getRestroId() {
		return restroId;
	}

	public void setRestroId(int restroId) {
		this.restroId = restroId;
	}

	public String getRestroName() {
		return restroName;
	}

	public void setRestroName(String restroName) {
		this.restroName = restroName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



	@Override
	public String toString() {
		return "Restaurants [restroId=" + restroId + ", restroName=" + restroName + ", location=" + location + ", user="
				+ user  + "]";
	}
	
	
}
