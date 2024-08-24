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
public class OrderItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int orderItemId;
    
    @OneToOne
    private Product product;
    
    private double totalProductPrice;
    
    private int quantity;
    
    @JsonBackReference
    @ManyToOne
    private Order order;
}
