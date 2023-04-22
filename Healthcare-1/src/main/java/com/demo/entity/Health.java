package com.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Health {

	@Id
	private String name;
	private long contact;
	private int age;
	private String doctor;
	private String date;
	private String time;
	public Health() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Health(String name, long contact, int age, String doctor, String date, String time) {
		super();
		this.name = name;
		this.contact = contact;
		this.age = age;
		this.doctor = doctor;
		this.date = date;
		this.time = time;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
}
