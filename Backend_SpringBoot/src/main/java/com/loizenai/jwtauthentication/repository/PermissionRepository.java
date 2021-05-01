package com.loizenai.jwtauthentication.repository;

import com.loizenai.jwtauthentication.model.Permission;
import com.loizenai.jwtauthentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PermissionRepository extends JpaRepository<Permission, Long> {
    //Permission findByemail(String email);
    Permission findBypid(Long pid);
}
