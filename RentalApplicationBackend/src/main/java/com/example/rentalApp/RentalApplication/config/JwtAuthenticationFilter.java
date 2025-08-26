package com.example.rentalApp.RentalApplication.config;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import com.example.rentalApp.RentalApplication.repository.UserClientLoginRequestRepository;

import java.util.Optional;
import java.util.List;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{
    private final JwtUtil jwtUtil;
    private final UserClientLoginRequestRepository userClientLoginRequestRepository;

    public JwtAuthenticationFilter(JwtUtil jwtUtil, UserClientLoginRequestRepository userClientLoginRequestRepository){
        this.jwtUtil = jwtUtil;
        this.userClientLoginRequestRepository = userClientLoginRequestRepository;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String email = jwtUtil.extractEmail(token);

        Optional.ofNullable(email)
                .filter(e -> SecurityContextHolder.getContext().getAuthentication() == null)
                .filter(e -> jwtUtil.validateToken(token))
                .flatMap(e -> userClientLoginRequestRepository.findByEmail(e))
                .ifPresent(user -> {
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    user.getEmail(), null, List.of());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                });

        filterChain.doFilter(request, response);
    }
}
