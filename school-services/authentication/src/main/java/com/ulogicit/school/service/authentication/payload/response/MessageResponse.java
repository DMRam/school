package com.ulogicit.school.service.authentication.payload.response;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-13
 * @project authentication
 */
public class MessageResponse {
    private String message;

    public MessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
