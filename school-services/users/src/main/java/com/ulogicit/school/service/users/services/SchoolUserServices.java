package com.ulogicit.school.service.users.services;

import com.ulogicit.school.service.users.model.SchoolUser;

import java.util.List;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project users
 */
public interface SchoolUserServices {

    public List<SchoolUser> getAllUsers();

    SchoolUser addSchoolUsers(SchoolUser schoolUser);

    SchoolUser deleteSchoolUserById(String id);

    public SchoolUser updateSchoolUser(String id, SchoolUser schoolUser);

    public SchoolUser findUserByEmail(String email);
}
