package com.fms.cinema;

import com.fms.cinema.entities.City;
import com.fms.cinema.service.CityServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CinemaApplicationTests {

    @Autowired
    CityServiceImpl cityService;

    @Test
    void contextLoads() {
        assertFalse(1 == 2);
    }

    @Test
    void testAddCity() {
        City city = new City(1234567890L, "Montpellier", 34);

        try {
            cityService.add(city);
            assertEquals(cityService.getOneById(1234567890L), city);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void testGetCityNotNull() {
        try {
            assertThat(cityService.getOneById(1)).isNotNull();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    void testGetCityNull() {
        try {
            assertThat(cityService.getOneById(100)).isNull();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


//    @Test
//    void testGetCity() {
//		City city = new City(null, "Montpellier", 34);
//        cityService.add(city);
//        assertEquals("Montpellier", cityService.getOneById(city.getId()).getName());
//    }

}
