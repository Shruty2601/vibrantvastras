package com.app.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int categoryId;
    
    private String title;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "category")
    private Set<Product> product = new HashSet<>();
}
