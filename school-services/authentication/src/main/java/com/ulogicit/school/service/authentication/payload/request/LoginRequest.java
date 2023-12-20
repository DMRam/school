package com.ulogicit.school.service.authentication.payload.request;

import jakarta.validation.constraints.NotBlank;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-13
 * @project authentication
 */
public class LoginRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
