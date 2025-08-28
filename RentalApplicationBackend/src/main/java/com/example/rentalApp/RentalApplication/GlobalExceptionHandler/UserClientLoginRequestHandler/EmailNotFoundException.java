package com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler;

public class EmailNotFoundException extends RuntimeException{
    public EmailNotFoundException(String Message){
        super(Message);
    }
}
