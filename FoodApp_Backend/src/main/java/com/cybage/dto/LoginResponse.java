package com.cybage.dto;

public class LoginResponse {

	private String userEmail;
	private String role;
	private int id;
	
	public LoginResponse(String userEmail, String role, int id) {
		super();
		this.userEmail = userEmail;
		this.role = role;
		this.id = id;
	}
	public LoginResponse() {
		System.out.println("In LoginResponse constructor..");
	}
	public LoginResponse(String userEmail, String role) {
		super();
		this.userEmail = userEmail;
		this.role = role;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "LoginResponse [userEmail=" + userEmail + ", role=" + role + "]";
	}

	
	
}
