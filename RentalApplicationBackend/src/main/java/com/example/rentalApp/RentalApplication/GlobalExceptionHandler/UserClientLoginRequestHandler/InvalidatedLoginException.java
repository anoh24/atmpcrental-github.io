package com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler;

public class InvalidatedLoginException extends RuntimeException {
    public InvalidatedLoginException(String message) {
        super(message);
    }
}
