package com.fms.cinema;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fms.cinema.entities.City;
import com.fms.cinema.service.CityServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class CityControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CityServiceImpl cityService;

    @Autowired
    private ObjectMapper objectMapper;

    /**
     * Add a new city and return
     * @throws Exception
     */
    @Test
    public void testSaveAndReturnCity() throws Exception {
        //GIVEN
        City city = City.builder().name("Marseille").department(13).build();

        //WHEN
        ResultActions response = mockMvc.perform(post("/city/save")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(city)));

        //THEN
        response.andDo(print()).andExpect(status().isCreated())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.name", is(city.getName())))
                .andExpect(jsonPath("$.department", is(city.getDepartment())));
    }

    /**
     * Get all cities and test size
     * @throws Exception
     */
    @Test
    public void testGetAllCities() throws Exception {
        //GIVEN : Déjà fait

        //WHEN
        ResultActions response = mockMvc.perform(get("/city/all"));

        //THEN
        response.andExpect(status().isOk()).andDo(print())
                .andExpect(jsonPath("$.size()", is(cityService.getAll().size())));
    }

    /**
     * Get a city by existing ID
     * @throws Exception
     */
    @Test
    public void testGetCityByIdSuccess() throws Exception {
        //GIVEN
        City city = City.builder().name("Montpellier").department(34).build();
        cityService.add(city);

        //WHEN
        ResultActions response = mockMvc.perform(get("/city/get/{id}", city.getId()));

        //THEN
        response.andExpect(status().isOk()).andDo(print())
                .andExpect(jsonPath("$", notNullValue()))
                .andExpect(jsonPath("$.name", is(city.getName())));
    }

    /**
     *  Get a city by non existing ID
     * @throws Exception
     */
    @Test
    public void testGetCityIdDontExist() throws Exception {
        //GIVEN
        Long id = 100L;

        //WHEN
        ResultActions response = mockMvc.perform(get("/city/get/{id}", id));

        //THEN
        response.andExpect(status().isNotFound()).andDo(print());
    }

    /**
     * Add a new city then test delete success
     * @throws Exception
     */
    @Test
    public void testDeleteCity() throws Exception {
        //GIVEN
        City city = City.builder().name("City To Delete").department(18).build();
        cityService.add(city);

        //WHEN
        ResultActions response = mockMvc.perform(delete("/city/delete/{id}", city.getId()));

        //THEN
        response.andExpect(status().isOk()).andDo(print());
    }

    /**
     * Update city
     * @throws Exception
     */
    @Test
    public void testUpdateACity() throws Exception {
        //GIVEN
        City city = City.builder().name("MauTauBan dfzefsdf").department(8200).build();
        cityService.add(city);
        City updateCity = City.builder().name("Montauban").department(82).build();

        //WHEN
        ResultActions response = mockMvc.perform(put("/city/update/{id}", city.getId())
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(updateCity)));

        //THEN
        response.andDo(print()).andExpect(status().isOk());
    }
}
