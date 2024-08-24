package com.app.custom_exception;

public class BadUserLoginDetailsException extends RuntimeException {

    // Default constructor with a generic message
    public BadUserLoginDetailsException() {
        super("Invalid login details. Please check your email and password.");
    }

    // Constructor that allows a custom message
    public BadUserLoginDetailsException(String message) {
        super(message);
    }
}
