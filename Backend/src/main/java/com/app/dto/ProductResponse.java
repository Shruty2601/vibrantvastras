package com.app.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {

    private List<ProductDTO> content;      // List of ProductDto objects to be returned in the response
    private int pageSize;                  // Number of items per page
    private long totalElements;            // Total number of items
    private int totalPages;                // Total number of pages
    private boolean isLastPage;            // Indicator if this is the last page
    private int pageNumber;                // Current page number

}
