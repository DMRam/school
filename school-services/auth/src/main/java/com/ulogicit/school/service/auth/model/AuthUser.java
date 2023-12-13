package com.ulogicit.school.service.auth.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "users")
public class AuthUser {

    @Id
    private Integer id;
    private String name;
    private String lastName;
    private String email;

}
