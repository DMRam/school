package com.ulogicit.school.service.users.repo;

import com.ulogicit.school.service.users.model.SchoolUser;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project users
 */
public interface SchoolUserRepository extends MongoRepository<SchoolUser, String>, SchoolUserRepoCustom {
}