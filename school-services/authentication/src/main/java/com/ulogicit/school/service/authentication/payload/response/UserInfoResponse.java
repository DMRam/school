package com.ulogicit.school.service.authentication.payload.response;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-13
 * @project authentication
 */
public class UserInfoResponse {

    private String id;
    private String username;
    private String email;

    public UserInfoResponse(String username, String email, String userDetailsEmail) {
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
