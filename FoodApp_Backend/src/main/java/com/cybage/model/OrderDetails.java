package com.cybage.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class OrderDetails 
{
	@Id
	@GeneratedValue
	private int orderDetailId;
	private double totalAmount;
	
	private String itemName;
	private int quantity;
	private double amount;
	
	@ManyToOne
	@JoinColumn(name = "menuItem_id")
	private MenuItems menuItems;
	
}
