package com.example.rentalApp.RentalApplication.implementation;


import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.beans.factory.annotation.Value;
@Configuration
public class UserClientProfilePhotoDirectory implements WebMvcConfigurer {

    @Value("${upload.dir}")
    private String uploadDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/userClientProfilePhoto/**")
                .addResourceLocations("file:" + uploadDir + "/");
    }
}
