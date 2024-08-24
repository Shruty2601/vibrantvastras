package com.app.dto;

import lombok.Data;
import java.util.Date;
import java.util.Set;

@Data
public class OrderDTO {
    private int orderId;
    private String orderStatus;
    private String paymentStatus;
    private Date orderCreated;
    private Double orderAmount;
    private String billingAddress;
    private Date orderDelivered;
    private UserDTO user;
    private Set<OrderItemDTO> items;
}
