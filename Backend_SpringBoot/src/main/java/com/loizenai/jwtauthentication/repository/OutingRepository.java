package com.loizenai.jwtauthentication.repository;
import com.loizenai.jwtauthentication.model.Outing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutingRepository extends JpaRepository<Outing, Long>{}

