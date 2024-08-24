package com.app.dto;

import lombok.Data;

@Data
public class CartItemDTO {
    private int cartItemId;
    private CartDTO cart;
    private int quantity;
    private double totalProductPrice;
    private ProductDTO product;
}
