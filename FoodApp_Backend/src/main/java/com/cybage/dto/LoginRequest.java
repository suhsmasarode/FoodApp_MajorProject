package com.cybage.dto;

public class LoginRequest {
	private String userEmail;
	   private String userPassword;
	   private String role;
	   
	   public LoginRequest() {
		System.out.println("in constructor of Login request");
	}

	public LoginRequest(String userEmail, String userPassword, String role) {
		super();
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.role = role;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "LoginRequest [userEmail=" + userEmail + ", userPassword=" + userPassword + ", role=" + role + "]";
	}

	
	   
	   
	   
}
