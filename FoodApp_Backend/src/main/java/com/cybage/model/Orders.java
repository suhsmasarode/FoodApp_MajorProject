package com.cybage.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Orders {

	@Id
	@GeneratedValue
	private int orderId;
	
	private double amount;
	private Date orderDate;
	private Status status;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;

	public Orders() {
		super();
	}

	public Orders(int orderId, double amount, Date orderDate, Status status, User user) {
		super();
		this.orderId = orderId;
		this.amount = amount;
		this.orderDate = orderDate;
		this.status = status;
		this.user = user;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", amount=" + amount + ", orderDate=" + orderDate + ", status=" + status
				+ ", user=" + user + "]";
	}
}
