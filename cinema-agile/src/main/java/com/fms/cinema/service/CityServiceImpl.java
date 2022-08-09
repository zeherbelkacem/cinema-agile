package com.fms.cinema.service;

import com.fms.cinema.entities.City;
import com.fms.cinema.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    public City add(City city) {
        return cityRepository.save(city);
    }

    @Override
    public City getOneById(long id) {
        return cityRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found"));
    }

    @Override
    public void delete(long id) {
        cityRepository.deleteById(id);
    }
}
