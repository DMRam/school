package com.ulogicit.school.service.users.model;

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
 * @project users
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "school_users")
public class SchoolUser {

    @Id
    private String id;
    private String name;
    private String lastName;
    private String email;

}
