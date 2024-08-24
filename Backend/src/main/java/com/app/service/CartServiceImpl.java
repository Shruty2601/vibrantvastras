package com.app.service;

import com.app.dto.CartDTO;
import com.app.entity.Cart;
import com.app.repository.CartRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CartDTO createCart(CartDTO cartDTO) {
        Cart cart = modelMapper.map(cartDTO, Cart.class);
        cart = cartRepository.save(cart);
        return modelMapper.map(cart, CartDTO.class);
    }

    @Override
    public CartDTO getCartById(int cartId) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
        return modelMapper.map(cart, CartDTO.class);
    }

    @Override
    public List<CartDTO> getAllCarts() {
        return cartRepository.findAll().stream().map(cart -> modelMapper.map(cart, CartDTO.class)).collect(Collectors.toList());
    }

    @Override
    public CartDTO updateCart(int cartId, CartDTO cartDTO) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Cart not found"));
        modelMapper.map(cartDTO, cart);
        cart = cartRepository.save(cart);
        return modelMapper.map(cart, CartDTO.class);
    }

    @Override
    public void deleteCart(int cartId) {
        cartRepository.deleteById(cartId);
    }
}
