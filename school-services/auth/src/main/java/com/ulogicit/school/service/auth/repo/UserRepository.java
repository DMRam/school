package com.ulogicit.school.service.auth.repo;

import com.ulogicit.school.service.auth.model.AuthUser;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */
public interface UserRepository extends MongoRepository<AuthUser, Integer> {

}
