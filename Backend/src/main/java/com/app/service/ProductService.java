package com.app.service;

import com.app.dto.ProductDTO;
import java.util.List;

public interface ProductService {
    ProductDTO createProduct(ProductDTO productDTO);
    ProductDTO getProductById(int productId);
    List<ProductDTO> getAllProducts();
    ProductDTO updateProduct(int productId, ProductDTO productDTO);
    void deleteProduct(int productId);
}
