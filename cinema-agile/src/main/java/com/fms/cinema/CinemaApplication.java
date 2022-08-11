package com.fms.cinema;

import com.fms.cinema.entities.Category;
import com.fms.cinema.entities.Cinema;
import com.fms.cinema.entities.City;
import com.fms.cinema.repository.CategoryRepository;
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

	@Autowired
	private CategoryRepository categoryRepository;

	public static void main(String[] args) {
		SpringApplication.run(CinemaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		City toulouse = cityService.add(new City(null, "Toulouse", 31));
		City paris = cityService.add(new City(null, "Paris", 75));
		cityService.add(new City(null, "Lyon", 69));

		cinemaService.addCinema(new Cinema(null, "Distopia Jean Jaurès", null, toulouse, null));
		cinemaService.addCinema(new Cinema(null, "Distopia Bastide", null, paris, null));

		/*********** Movies categories ***********/
		Category asian = new Category("ASIAN", null);
		Category kids = new Category("KIDS", null);
		Category romance = new Category("ROMANCE", null);
		Category drama = new Category("DRAMA", null);
		Category fiction = new Category("FICTION", null);
		Category horror = new Category("HORROR", null);
		categoryRepository.save(asian);
		categoryRepository.save(kids);
		categoryRepository.save(romance);
		categoryRepository.save(drama);
		categoryRepository.save(fiction);
		categoryRepository.save(horror);
	}
}
