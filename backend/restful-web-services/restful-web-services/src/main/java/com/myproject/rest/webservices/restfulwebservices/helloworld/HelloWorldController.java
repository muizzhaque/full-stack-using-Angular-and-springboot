package com.myproject.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
@RequestMapping(value="/hello-world", method = RequestMethod.GET)
public String helloWorld() {
	return "Hello World";
}
@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean(){
//	throw new RuntimeException("Some Error has happened! Contact Support @ ****||****");
	return new HelloWorldBean("Hello World - Changed");
}
@GetMapping(path="/hello-world/path-variable/{name}")
public HelloWorldBean helloWorldPathVaraible(@PathVariable String name) {
	return new HelloWorldBean(String.format("Hello World ,%s", name));
}
}
