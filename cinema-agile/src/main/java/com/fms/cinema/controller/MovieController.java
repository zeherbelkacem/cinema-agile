package com.fms.cinema.controller;

import com.fms.cinema.entities.City;
import com.fms.cinema.entities.Movie;
import com.fms.cinema.service.CategoryService;
import com.fms.cinema.service.CityServiceImpl;
import com.fms.cinema.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;


    /**
     * Add a new movie
     *
     * @param movie
     */
    @PostMapping("/new")
    public Movie add(@RequestBody Movie movie) {
        return movieService.addMovie(movie);
    }

    /**
     * Update a city by id
     *
     * @param id
     * @param city
     */
//    @PutMapping("/update/{id}")
//    public void update(@PathVariable("id") long id, @RequestBody City city) {
//        City cityToUpdate = cityService.getOneById(id);
//        cityToUpdate.setName(city.getName());
//        cityToUpdate.setDepartment(city.getDepartment());
//        cityService.add(cityToUpdate);
//    }

    /**
     * Delete movie by id
     *
     * @param id
     */
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") long id) {
        movieService.deleteMovie(id);
    }

    /**
     * Return a movie by id
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    public Movie getOne(@PathVariable("id") long id) {
        return movieService.getMovieById(id);
    }

    /**
     * Return a movie by title
     *
     * @param title
     * @return
     */
    @GetMapping("/{title}")
    public Movie getByTitle(@PathVariable("id") String title) {
        return movieService.getMovieByTitle(title);
    }

    /**
     * Return list of all movie
     * @return
     */
    @GetMapping("/all")
    public List<Movie> getAll() {
        return movieService.getAllMovies();
    }

}
