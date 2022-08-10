package com.fms.cinema;

import com.fms.cinema.entities.Address;
import com.fms.cinema.entities.Cinema;
import com.fms.cinema.entities.City;
import com.fms.cinema.service.CinemaServiceImpl;
import com.fms.cinema.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CinemaApplication implements CommandLineRunner {

	@Autowired
	CityServiceImpl cityService;

	@Autowired
	CinemaServiceImpl cinemaService;

	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		City toulouse = cityService.add(new City(null, "Toulouse", 31));
		City paris = cityService.add(new City(null, "Paris", 75));
		cityService.add(new City(null, "Lyon", 69));

		

		cinemaService.addCinema(new Cinema(null, "Distopia Jean Jaurès", new Address(), toulouse, null));
		cinemaService.addCinema(new Cinema(null, "Distopia Bastide", null, paris, null));

	}
}
