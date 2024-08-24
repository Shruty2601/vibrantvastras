package com.app.service;

import com.app.dto.CategoryDTO;
import java.util.List;

public interface CategoryService {
    CategoryDTO createCategory(CategoryDTO categoryDTO);
    CategoryDTO getCategoryById(int categoryId);
    List<CategoryDTO> getAllCategories();
    CategoryDTO updateCategory(int categoryId, CategoryDTO categoryDTO);
    void deleteCategory(int categoryId);
}
