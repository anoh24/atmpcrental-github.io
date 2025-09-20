package com.example.rentalApp.RentalApplication.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    public SecurityConfig(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // allow preflight
                        .requestMatchers("/apiBranchAdminRoomList/roomlist", "/apiBranchAdminRoomList/roomlist/**").permitAll()
                        .requestMatchers("/apiBranchAdminRoomList/room", "/apiBranchAdminRoomList/room/**").permitAll()
                        .requestMatchers("/apiUpdateUserClientProfile/{customerid}/profile-photo", "/apiUpdateUserClientProfile/{customerid}/profile-photo/**").permitAll()
                        .requestMatchers("/apiUpdateUserClientProfile/getAssignedRoom{customerid}", "/apiUpdateUserClientProfile/getAssignedRoom/{customerid}/**").permitAll()
                        .requestMatchers("/apiUpdateUserClientProfile/roomsavailable", "/apiUpdateUserClientProfile/roomsavailable/**").permitAll()
                        .requestMatchers("/apiUpdateUserClientProfile/{customerid}", "/apiUpdateUserClientProfile/{customerid}/**").permitAll()
                        .requestMatchers("/apiAuthentication/{customerid}", "/apiAuthentication/{customerid}/**").permitAll()
                        .requestMatchers("/apiAuthentication/login", "/apiAuthentication/login/**").permitAll()
                        .requestMatchers("/apiUserClientRegistration/userclients", "/apiUserClientRegistration/userclients/**").permitAll()
                        .requestMatchers("/apiUserClientRegistration/userclientslist/**").permitAll()
                        .requestMatchers("/apiValidationUserClient/{customerid}", "/apiValidationUserClient/{customerid}/**").permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
