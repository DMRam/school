package com.ulogicit.school.service.users.controller;

import com.ulogicit.school.service.users.model.SchoolUser;
import com.ulogicit.school.service.users.services.SchoolUserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project users
 */
@RestController
@RequestMapping("/api") // Base path for API endpoints
public class SchoolUserController {

    private final SchoolUserServices userService;

    @Autowired
    public SchoolUserController(SchoolUserServices userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public ResponseEntity<List<SchoolUser>> defaultUrl() {
        List<SchoolUser> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<SchoolUser>> getAllUsers() {
        List<SchoolUser> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<SchoolUser> getUserId(@PathVariable String email) {
        SchoolUser users = userService.findUserByEmail(email);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<SchoolUser> addUser(@RequestBody SchoolUser schoolUser) {
        SchoolUser savedUser = userService.addSchoolUsers(schoolUser);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<SchoolUser> deleteUserById(@PathVariable String id) {
        SchoolUser deletedUser = userService.deleteSchoolUserById(id);
        if (deletedUser != null) {
            return new ResponseEntity<>(deletedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<SchoolUser> updateUser(@PathVariable String id, @RequestBody SchoolUser updatedUser) {
        SchoolUser updatedUserResult = userService.updateSchoolUser(id, updatedUser);
        if (updatedUserResult != null) {
            return new ResponseEntity<>(updatedUserResult, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        // Log the exception for debugging purposes
        // logger.error("An unexpected error occurred: {}", e.getMessage(), e);

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("An unexpected error occurred: " + e.getMessage());
    }
}

