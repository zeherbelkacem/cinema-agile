package com.fms.cinema.service;

import com.fms.cinema.entities.Cinema;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CinemaService {

    public Cinema addCinema(Cinema cinema);
    public List<Cinema> getAllCinema();

    public Optional<Cinema> getCinemaById(long id);

    public void deleteCinemaById(long id);

    public List<Cinema> getCinemaByKeyWord(String keyWord);

    public List<Cinema> getCinemaByCityId(Long id);

}
