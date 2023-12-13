package com.ulogicit.school.service.users.services;

import com.ulogicit.school.service.users.model.SchoolUser;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project users
 */
@FeignClient(name = "auth-service", url = "${auth-service.url}") // Name of the auth-service
public interface AuthServiceClient {
    @PostMapping("/authenticate")
    ResponseEntity<String> authenticateUser(@RequestBody SchoolUser schoolUser);
    // Other methods for interacting with auth-service endpoints
}
