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
    private String name;
    private String email;

    public UserInfoResponse(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
