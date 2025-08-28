package com.example.rentalApp.RentalApplication.GlobalExceptionHandler.UserClientLoginRequestHandler;

public class InvalidPasswordException extends RuntimeException{
    public InvalidPasswordException(String Message ){
        super(Message);
    }
}
