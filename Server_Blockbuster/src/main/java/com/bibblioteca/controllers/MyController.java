package com.bibblioteca.controllers;

import com.bibblioteca.services.GreetingServiceImpl;

import org.springframework.stereotype.Controller;

@Controller
public class MyController {
    //property dependnecy injection 
    //@Autowired
    GreetingServiceImpl greetingService;
    
    // constructor dependency injection
    public MyController(GreetingServiceImpl greetingService){
        this.greetingService=greetingService;
    }

    public String hello(){
        return greetingService.sayGretting();
    }
}
