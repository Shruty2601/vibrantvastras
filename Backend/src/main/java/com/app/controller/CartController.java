package com.app.controller;

import com.app.dto.CartDTO;
import com.app.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<CartDTO> createCart(@RequestBody CartDTO cartDTO) {
        CartDTO createdCart = cartService.createCart(cartDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCart);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/{cartId}")
    public ResponseEntity<CartDTO> updateCart(@PathVariable int cartId, @RequestBody CartDTO cartDTO) {
        CartDTO updatedCart = cartService.updateCart(cartId, cartDTO);
        return ResponseEntity.ok(updatedCart);
    }

    @GetMapping("/{cartId}")
    public ResponseEntity<CartDTO> getCartById(@PathVariable int cartId) {
        CartDTO cartDTO = cartService.getCartById(cartId);
        return ResponseEntity.ok(cartDTO);
    }

    @GetMapping
    public ResponseEntity<List<CartDTO>> getAllCarts() {
        List<CartDTO> carts = cartService.getAllCarts();
        return ResponseEntity.ok(carts);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/{cartId}")
    public ResponseEntity<Void> deleteCart(@PathVariable int cartId) {
        cartService.deleteCart(cartId);
        return ResponseEntity.noContent().build();
    }
}
