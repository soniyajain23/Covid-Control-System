package com.loizenai.jwtauthentication.repository;
import com.loizenai.jwtauthentication.model.Tracing;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface TracingRepository extends JpaRepository<Tracing, Long>{}

