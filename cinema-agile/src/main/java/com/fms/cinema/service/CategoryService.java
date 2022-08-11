package com.fms.cinema.service;

import com.fms.cinema.entities.Category;

import java.util.List;

public interface CategoryService {
    public List<Category> getAllCategories();
    public Category saveCategory(Category category);
    public Category deleteCategory(String name);
    public Category getCategoryByName(String name);
}
