/*
 * package com.app.controller;
 * 
 * import com.app.dto.OrderDTO; import com.app.dto.PaymentSuccessResponse;
 * import com.app.dto.PaymentOrderResponse; import com.app.service.OrderService;
 * import import com.razorpay.RazorpayClient; import
 * com.razorpay.RazorpayException; import org.json.JSONObject; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.http.HttpStatus; import
 * org.springframework.http.ResponseEntity; import
 * org.springframework.security.access.prepost.PreAuthorize; import
 * org.springframework.web.bind.annotation.*;
 * 
 * @RestController
 * 
 * @RequestMapping("/api/payments") public class PaymentController {
 * 
 * @Autowired private OrderService orderService;
 * 
 * // Create Order
 * 
 * @PreAuthorize("hasRole('USER')") // Assuming users are allowed to create
 * orders
 * 
 * @PostMapping("/create") public ResponseEntity<PaymentOrderResponse>
 * createOrder(@RequestParam("price") double price) { try { RazorpayClient
 * client = new RazorpayClient("rzp_test_SJbSE1ULGg8Kqg",
 * "CY3E379plxtIUuQhomelNMVq");
 * 
 * JSONObject options = new JSONObject(); options.put("amount", price * 100); //
 * amount in paise options.put("currency", "INR"); options.put("receipt",
 * "receipt_" + System.currentTimeMillis()); Order order =
 * client.Orders.create(options);
 * 
 * PaymentOrderResponse response = new PaymentOrderResponse();
 * response.setMessage("Order created successfully");
 * response.setOrderId(order.get("id"));
 * response.setOrderInformation("Order created from Razorpay server");
 * 
 * return new ResponseEntity<>(response, HttpStatus.CREATED); } catch
 * (RazorpayException e) { e.printStackTrace(); return new
 * ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); } }
 * 
 * // Capture Payment
 * 
 * @PreAuthorize("hasRole('USER')")
 * 
 * @PostMapping("/success") public ResponseEntity<PaymentSuccessResponse>
 * capturePayment(
 * 
 * @RequestParam("razorpay_payment_id") String razorpayPaymentId,
 * 
 * @RequestParam("razorpay_order_id") String razorpayOrderId,
 * 
 * @RequestParam("razorpay_signature") String razorpaySignature,
 * 
 * @RequestParam("user_order_id") int userOrderId ) { try { // Update the order
 * status to "PAID" OrderDTO orderDTO = new OrderDTO();
 * orderDTO.setPaymentStatus("PAID"); orderService.updateOrder(userOrderId,
 * orderDTO);
 * 
 * PaymentSuccessResponse response = new PaymentSuccessResponse();
 * response.setUserOrderId(String.valueOf(userOrderId));
 * response.setCapture(true); response.setPaymentStatus("PAID");
 * 
 * return new ResponseEntity<>(response, HttpStatus.OK); } catch (Exception e) {
 * e.printStackTrace(); return new
 * ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); } } }
 */