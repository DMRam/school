package com.ulogicit.school.service.authentication.payload.response;

import java.util.List;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-13
 * @project authentication
 */
public class UserInfoResponse {
    private String username;
    private String email;

    public UserInfoResponse(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
