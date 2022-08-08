package com.fms.cinema.service;

import com.fms.cinema.entities.City;
import com.fms.cinema.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    public City add(City city) {
        return cityRepository.save(city);
    }
}
