package com.ulogicit.school.service.authentication.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */

@Data
@Document(collection = "school_users")
public class AuthUser {

    @Id
    private String id;
    private String name;
    private String lastName;
    private String email;
    private String password;


    public AuthUser() {
    }


    public AuthUser(String name, String lastName, String email, String encode) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = encode;
    }
}
