package com.fms.cinema.service;

import com.fms.cinema.entities.Movie;

import java.util.List;

public interface MovieService {

    public Movie addMovie(Movie movie);
    public List<Movie> getAllMovies();
    public void deleteMovie(long id);
    public Movie getMovieByTitle(String title);
    public Movie getMovieById(long id);
}
