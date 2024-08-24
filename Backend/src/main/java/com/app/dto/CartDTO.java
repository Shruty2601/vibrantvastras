package com.app.dto;

import lombok.Data;
import java.util.Set;

@Data
public class CartDTO {
    private int cartId;
    private Set<CartItemDTO> items;
    private UserDTO user;
}
