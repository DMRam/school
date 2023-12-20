package com.ulogicit.school.service.authentication.security.jwt;

import com.ulogicit.school.service.authentication.security.services.AuthUserDetailsImp;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Date;

@Component
public class JwtUtil {

    private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    @Value("${school.app.jwtSecret}") // JWT Secret key from application properties
    private String jwtSecret;

    @Value("${school.app.jwtExpirationMs}") // JWT expiration time from application properties
    private int jwtExpirationMs;

    @Value("${school.app.jwtCookieName}") // JWT cookie name from application properties
    private String jwtCookie;

    // Extract JWT from cookies
    public String getJwtFromCookies(HttpServletRequest request) {
        Cookie cookie = WebUtils.getCookie(request, jwtCookie);
        if (cookie != null) {
            return cookie.getValue();
        } else {
            return null;
        }
    }

    // Generate a JWT as a cookie
    public ResponseCookie generateJwtCookie(AuthUserDetailsImp authUserDetailsImp) {
        String jwt = generateTokenFromUsersEmail(authUserDetailsImp.getEmail());
        return ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
    }

    // Generate a clean JWT cookie (with immediate expiration)
    public ResponseCookie getCleanJwtCookie() {
        return ResponseCookie.from(jwtCookie, null).path("/api").maxAge(0).build();
    }

    // Get the username from a JWT token
    public String getUsersEmailFromJwtToken(String token) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .build()
                .parseSignedClaims(token).getPayload()
                .getSubject();
    }

    // Validate the JWT token
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser()
                    .verifyWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                    .build()
                    .parseSignedClaims(authToken);
            return true;
        } catch (JwtException e) {
            logger.error("Invalid JWT token: {}", e.getMessage());
            return false;
        }
    }

    // Generate a JWT token from the username
    public String generateTokenFromUsersEmail(String email) {
        return Jwts.builder().subject(email).issuedAt(new Date()).expiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(Keys.hmacShaKeyFor(jwtSecret.getBytes()))
                .compact();
    }
}
