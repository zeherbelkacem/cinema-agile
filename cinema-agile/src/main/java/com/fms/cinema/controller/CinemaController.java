package com.fms.cinema.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fms.cinema.entities.Cinema;
import com.fms.cinema.exceptions.RecordNotFoundException;
import com.fms.cinema.service.CinemaServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/cinema")
public class CinemaController {

    @Autowired
    private CinemaServiceImpl cinemaService;

    @PostMapping("/save")
    public Cinema saveCinema(@RequestBody Cinema cinema){
        System.out.println(cinema);
    return cinemaService.addCinema(cinema);
    }

    @PutMapping("/update/{id}")
    public Cinema updateCinema(@PathVariable("id")long id, @RequestBody Cinema cinema){
        cinema.setId(id);
        return cinemaService.addCinema(cinema);
    }

    @GetMapping("/all")
    public List<Cinema> listOfCinemas(){ return cinemaService.getAllCinema();}

    @DeleteMapping("/delete/{id}")
    public void deleteCinema(@PathVariable("id")long id) throws IOException{
        cinemaService.deleteCinemaById(id);
    }

    @GetMapping("/get/{id}")
    public Cinema getCinemaById(@PathVariable("id")long id){
        return cinemaService.getCinemaById(id).orElseThrow(()-> new RecordNotFoundException("Le cinema d'id " + id + " n'existe pas"));
    }
}
