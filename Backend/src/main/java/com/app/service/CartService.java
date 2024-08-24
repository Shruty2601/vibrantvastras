package com.app.service;

import com.app.dto.CartDTO;
import java.util.List;

public interface CartService {
    CartDTO createCart(CartDTO cartDTO);
    CartDTO getCartById(int cartId);
    List<CartDTO> getAllCarts();
    CartDTO updateCart(int cartId, CartDTO cartDTO);
    void deleteCart(int cartId);
}
