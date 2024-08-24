package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentOrderResponse {

    private String message;
    private String orderId;
    private Double amount; 
    private String orderInformation;

}
