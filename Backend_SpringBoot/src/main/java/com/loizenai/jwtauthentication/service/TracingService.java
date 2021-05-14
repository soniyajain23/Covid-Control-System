package com.loizenai.jwtauthentication.service;

import com.loizenai.jwtauthentication.model.Tracing;

import java.util.List;

public interface TracingService {
    List<Tracing> findAll();

    Tracing save(Tracing outing);

    Tracing findById(Long id);

    void delete(Long id);
}
