package com.app.entity;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CartItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int cartItemId;
    
    @ManyToOne
    @JsonBackReference
    private Cart cart;
    
    private int quantity;
    
    private double totalproductprice;
    
    @OneToOne
    private Product product;
    
    public void setTotalproductprice() {
        this.totalproductprice = this.quantity * this.product.getProductPrice();
    }
}
