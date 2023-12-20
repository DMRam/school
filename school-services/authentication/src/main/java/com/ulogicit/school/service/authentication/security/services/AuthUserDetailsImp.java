package com.ulogicit.school.service.authentication.security.services;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ulogicit.school.service.authentication.model.AuthUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Objects;

public class AuthUserDetailsImp implements UserDetails {

    private static final long serialVersionUID = 1L;

    private String id;
    private String name;
    private String email;
    @JsonIgnore
    private String password;

    public AuthUserDetailsImp(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static AuthUserDetailsImp build(AuthUser user) {
        return new AuthUserDetailsImp(
                user.getName(),
                user.getEmail(),
                user.getPassword());

    }


    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        AuthUserDetailsImp user = (AuthUserDetailsImp) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
