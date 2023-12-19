package com.ulogicit.school.service.users.repo;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-18
 * @project users
 */

import com.ulogicit.school.service.users.model.SchoolUser;

import java.util.List;

public interface SchoolUserRepoCustom {
    SchoolUser findByEmail(String email);
}
