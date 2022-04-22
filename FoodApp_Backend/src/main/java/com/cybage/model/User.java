package com.cybage.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "user_details")
public class User {

	@Id
	@GeneratedValue
	private int id;
	private String fullName;
	private String email;
	private String password;
	private String contactNo;
	private String address;
	private String city;
	private int zipcode;
	@Column(name = "role")
	private String role;
//	
//	@OneToMany(mappedBy = "user")
//	private List<Restaurants> restaurants;
//	
//	@OneToMany(mappedBy = "user")
//	private List<Orders> orders;
//	
	public User() {
		System.out.println("In user Constructor");
	}

	public User(int id, String fullName, String email, String password, String contactNo, String address, String city,
			int zipcode, String roles) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.email = email;
		this.password = password;
		this.contactNo = contactNo;
		this.address = address;
		this.city = city;
		this.zipcode = zipcode;
		this.role = role;
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZipcode() {
		return zipcode;
	}

	public void setZipcode(int zipcode) {
		this.zipcode = zipcode;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}



	@Override
	public String toString() {
		return "User [id=" + id + ", fullName=" + fullName + ", email=" + email + ", password=" + password
				+ ", contactNo=" + contactNo + ", address=" + address + ", city=" + city + ", zipcode=" + zipcode
				+ ", role=" + role +"]";
	}
		
}
