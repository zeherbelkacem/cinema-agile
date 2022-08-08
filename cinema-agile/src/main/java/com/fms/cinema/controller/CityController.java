package com.fms.cinema.controller;

import com.fms.cinema.entities.City;
import com.fms.cinema.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class CityController {

    @Autowired
    private CityServiceImpl cityService;

    @PostMapping("/city")
    public void addCity(@RequestBody City city){
        cityService.add(city);
    }

}
