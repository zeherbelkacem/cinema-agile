package com.fms.cinema.service;

import com.fms.cinema.entities.Cinema;
import com.fms.cinema.repository.CinemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CinemaServiceImpl implements CinemaService {

    @Autowired
    CinemaRepository cinemaRepository;

    @Override
    public Cinema addCinema(Cinema cinema) {
        return cinemaRepository.save(cinema);
    }

    @Override
    public List<Cinema> getAllCinema() {
        return cinemaRepository.findAll();
    }

    @Override
    public Optional<Cinema> getCinemaById(long id) {
        return cinemaRepository.findById(id);
    }

    @Override
    public void deleteCinemaById(long id) {
        cinemaRepository.deleteById(id);
    }
}
