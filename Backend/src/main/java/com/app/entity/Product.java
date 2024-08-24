package com.app.entity;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="com.Product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int productId;
    
    @Column(name="product_brand_name", length = 300, unique = true)
    private String productName;
    
    private String productDesc;
    
    private double productPrice;
    
    private boolean stock = true;
    
    private int productQuantity;
    
    private boolean live;
    
    private String imageName;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;
    
    public void setImageName(String imageName) {
        System.out.println(imageName);
        this.imageName = imageName;
    }
}
