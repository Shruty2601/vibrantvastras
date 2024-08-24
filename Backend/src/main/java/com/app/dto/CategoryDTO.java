package com.app.dto;

import lombok.Data;
import java.util.Set;

@Data
public class CategoryDTO {
    private int categoryId;
    private String title;
    private Set<ProductDTO> products;
}
