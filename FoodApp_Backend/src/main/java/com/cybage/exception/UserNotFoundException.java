package com.cybage.exception;

public class UserNotFoundException extends RuntimeException 
{
	public UserNotFoundException(String exceptionMessage)
	{
		super(exceptionMessage);
	}
}
