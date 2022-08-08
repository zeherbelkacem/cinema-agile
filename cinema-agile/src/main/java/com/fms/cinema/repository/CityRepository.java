package com.fms.cinema.repository;

import java.util.List;

import com.fms.cinema.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

    List<City> findByNameContains(String keyWord);

    City findByName(String cityName);

}
