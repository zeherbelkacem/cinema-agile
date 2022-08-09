package com.fms.cinema.controller;

import com.fms.cinema.entities.City;
import com.fms.cinema.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/city")
public class CityController {

    @Autowired
    private CityServiceImpl cityService;

    /**
     * Add a new city
     *
     * @param city
     */
    @PostMapping("/new")
    public void add(@RequestBody City city) {
        cityService.add(city);
    }

    /**
     * Update a city by id
     *
     * @param id
     * @param city
     */
    @PutMapping("/update/{id}")
    public void update(@PathVariable("id") long id, @RequestBody City city) {
        City cityToUpdate = cityService.getOneById(id);
        cityToUpdate.setName(city.getName());
        cityToUpdate.setDepartment(city.getDepartment());
        cityService.add(cityToUpdate);
    }

    /**
     * Delete city by id
     *
     * @param id
     */
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id) {
        cityService.delete(id);
    }

    /**
     * Return a city by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public City getOne(@PathVariable("id") long id) {
        return cityService.getOneById(id);
    }

    /**
     * Return list of all cities
     * @return
     */
    @GetMapping("/all")
    public List<City> getAll() {
        return cityService.getAll();
    }

}
