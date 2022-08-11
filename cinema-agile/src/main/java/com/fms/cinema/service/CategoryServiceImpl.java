package com.fms.cinema.service;

import com.fms.cinema.entities.Category;
import com.fms.cinema.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category deleteCategory(String name) {
        return categoryRepository.deleteByName(name);
    }


    @Override
    public Category getCategoryByName(String name) {
        return null;
    }
}
