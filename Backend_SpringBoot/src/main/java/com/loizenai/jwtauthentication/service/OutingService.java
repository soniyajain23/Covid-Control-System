package com.loizenai.jwtauthentication.service;
import com.loizenai.jwtauthentication.model.Outing;

import java.util.List;

public interface OutingService {
    List<Outing> findAll();

    Outing save(Outing outing);

    Outing findById(Long id);

    Outing delete(Outing outing);
}
