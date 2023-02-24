package com.bibblioteca.controllers;

import com.bibblioteca.services.*;
public class PropertyInjectedController {
    public GreetingServiceImpl greetingService;

    String sayHello(){
        return this.greetingService.sayGretting();
    }

    public GreetingServiceImpl getGreetingService(){
        return this.greetingService;
    }
}
