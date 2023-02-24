package com.bibblioteca.configuration;

import com.bibblioteca.domains.Address;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    @Bean 
    public Address getAddress(){
        return new Address("via roma");
    }
}
