package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaymentSuccessResponse {

    private String paymentStatus;   // Indicates the status of payment (e.g., "PAID")
    private String userOrderId;     // Renamed from user_order_id for consistency with Java naming conventions
    private boolean capture;        // Indicates if the payment was successfully captured

}
