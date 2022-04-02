package com.javierjg001.PATPRACTICA;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PatPracticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PatPracticaApplication.class, args);
	}

	// @GetMapping
	// public String hello(){
	// 	return "Hello world";
	// }
}
