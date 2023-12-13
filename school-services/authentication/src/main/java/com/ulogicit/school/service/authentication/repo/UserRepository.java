package com.ulogicit.school.service.authentication.repo;


import com.ulogicit.school.service.authentication.model.AuthUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */
public interface UserRepository extends MongoRepository<AuthUser, Integer> {
    Optional<AuthUser> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

}
