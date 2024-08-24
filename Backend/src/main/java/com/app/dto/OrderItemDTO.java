package com.app.dto;

import lombok.Data;

@Data
public class OrderItemDTO {
    private int orderItemId;
    private ProductDTO product;
    private double totalProductPrice;
    private int quantity;
    private OrderDTO order;
}
