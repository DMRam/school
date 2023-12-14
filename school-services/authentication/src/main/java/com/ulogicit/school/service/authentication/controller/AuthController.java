package com.ulogicit.school.service.authentication.controller;

import com.ulogicit.school.service.authentication.model.AuthUser;
import com.ulogicit.school.service.authentication.payload.request.LoginRequest;
import com.ulogicit.school.service.authentication.payload.request.SignupRequest;
import com.ulogicit.school.service.authentication.payload.response.MessageResponse;
import com.ulogicit.school.service.authentication.payload.response.UserInfoResponse;
import com.ulogicit.school.service.authentication.repo.UserRepository;
import com.ulogicit.school.service.authentication.security.jwt.JwtUtil;
import com.ulogicit.school.service.authentication.security.services.AuthUserDetailsImp;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */
//for Angular Client (withCredentials)
//@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@CrossOrigin(origins = "*", maxAge = 3600)
//@CrossOrigin(origins = {"http://localhost:3000", "192.168.2.16:3000"}, maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtil jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        System.out.println(loginRequest + " ***************");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        AuthUserDetailsImp userDetails = (AuthUserDetailsImp) authentication.getPrincipal();

        ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new UserInfoResponse(
                        userDetails.getUsername(),
                        userDetails.getEmail()));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account without handling roles
        AuthUser user = new AuthUser(signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/api/auth/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        // Extract JWT token from the authorization header
        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwtToken = authorizationHeader.substring(7); // Extract the token after "Bearer "

            // Validate or check the JWT token as needed
            // For example, validate and extract claims

            // Generate a clean JWT cookie (with immediate expiration)
            ResponseCookie expiredJwtCookie = ResponseCookie.from("JWT_TOKEN", "")
                    .path("/")
                    .maxAge(0)
                    .httpOnly(true)
                    .secure(true) // Set to true if your application uses HTTPS
                    .sameSite("Strict") // Adjust according to your requirements
                    .build();

            // Add the cookie to the response to invalidate the client-side session
            response.setHeader(HttpHeaders.SET_COOKIE, expiredJwtCookie.toString());

            return ResponseEntity.ok(new MessageResponse("Logout successful"));
        }

        return ResponseEntity.badRequest().body(new MessageResponse("Invalid or missing JWT token"));
    }


}
