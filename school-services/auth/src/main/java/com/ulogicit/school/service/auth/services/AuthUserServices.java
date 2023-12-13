package com.ulogicit.school.service.auth.services;

import com.ulogicit.school.service.auth.model.AuthUser;

import java.util.List;

/**
 * <p>
 * </p>
 *
 * @author dannymunoz on 2023-12-12
 * @project auth
 */
public interface AuthUserServices {

    public List<AuthUser> getUsersLoggedIn();


}
