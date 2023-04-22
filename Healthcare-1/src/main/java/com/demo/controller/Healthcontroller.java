package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.demo.entity.Health;
import com.demo.repository.Healthrepository;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Healthcontroller {
	@Autowired
private Healthrepository crepository;  
	

	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insert")
	public Health insert(@RequestBody Health e1)                    // insert service
	{
		return this.crepository.save(e1);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/update")
	public Health update(@RequestBody Health e1)                    // update service
	{
		return this.crepository.save(e1);
		
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/delete")
	public void delete(@RequestBody Health e1)                    // delete service
	{
		crepository.delete(e1);
		
	
    }
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/patient")
	public List<Health> patient()
	{
		return crepository.findAll();
	}

}
