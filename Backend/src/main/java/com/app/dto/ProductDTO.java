package com.app.dto;

import lombok.Data;

@Data
public class ProductDTO {
    private int productId;
    private String productName;
    private String productDesc;
    private double productPrice;
    private boolean stock;
    private int productQuantity;
    private boolean live;
    private String imageName;
    private CategoryDTO category;
}
