package com.fms.cinema.controller;

import com.fms.cinema.entities.Category;
import com.fms.cinema.entities.City;
import com.fms.cinema.service.CategoryService;
import com.fms.cinema.service.CityServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    /**
     * Add a new category
     *
     * @param category
     */
    @PostMapping("/new")
    public Category add(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    /**
     * Update a city by id
     *
     * @param id
     * @param city
     */
//    @PutMapping("/update/{id}")
//    public void update(@PathVariable("id") long id, @RequestBody City city) {
//        City cityToUpdate = cityService.getOneById(id);
//        cityToUpdate.setName(city.getName());
//        cityToUpdate.setDepartment(city.getDepartment());
//        cityService.add(cityToUpdate);
//    }

    /**
     * Delete city by id
     *
     * @param name
     */
    @DeleteMapping("/delete/{name}")
    public void delete(@PathVariable("name") String name) {
        categoryService.deleteCategory(name);
    }

    /**
     * Return a city by name
     *
     * @param name
     * @return
     */
    @GetMapping("/{name}")
    public Category getOne(@PathVariable("name") String name) {
        return categoryService.getCategoryByName(name);
    }

    /**
     * Return list of all categories
     * @return
     */
    @GetMapping("/all")
    public List<Category> getAll() {
        return categoryService.getAllCategories();
    }

}
