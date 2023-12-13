package com.ulogicit.school.service.users.services.imp;

import com.ulogicit.school.service.users.model.SchoolUser;
import com.ulogicit.school.service.users.repo.SchoolUserRepository;
import com.ulogicit.school.service.users.services.SchoolUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project users
 */
@Service
public class SchoolUserServiceImp implements SchoolUserServices {

    @Autowired
    SchoolUserRepository schoolUserRepository;

    @Override
    public List<SchoolUser> getAllUsers() {
        return schoolUserRepository.findAll();
    }

    @Override
    public SchoolUser addSchoolUsers(SchoolUser schoolUser) {
        return schoolUserRepository.save(schoolUser);
    }

    @Override
    public SchoolUser deleteSchoolUserById(int id) {
        Optional<SchoolUser> userToDelete = schoolUserRepository.findById(id);

        if (userToDelete.isPresent()) {
            schoolUserRepository.deleteById(id);
            return userToDelete.get();
        } else {
            // Handle scenario when the user with the given ID is not found
            return null;
        }
    }


    @Override
    public SchoolUser updateSchoolUser(int id, SchoolUser updatedUser) {
        Optional<SchoolUser> existingUserOptional = schoolUserRepository.findById(id);

        if (existingUserOptional.isPresent()) {
            SchoolUser existingUser = existingUserOptional.get();
            existingUser.setName(updatedUser.getName()); // Update fields as needed

            // Save the updated user
            return schoolUserRepository.save(existingUser);
        } else {
            // Handle scenario when the user with the given ID is not found
            return null;
        }
    }

}
