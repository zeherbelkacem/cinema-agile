package com.fms.cinema.service;

import com.fms.cinema.entities.City;

public interface CityService {

    public City add(City city);

    public City getOneById(long id);

}
