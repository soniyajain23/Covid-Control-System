package com.loizenai.jwtauthentication.service;

import com.loizenai.jwtauthentication.repository.TracingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.loizenai.jwtauthentication.model.Tracing;

import java.util.List;

@Service
public class TracingServiceImpl implements TracingService{

    @Autowired
    TracingRepository tracingRepository;

    @Override
    public List<Tracing> findAll() {
        return tracingRepository.findAll();
    }

    @Override
    public Tracing save(Tracing tracing) {
        tracingRepository.save(tracing);
        return tracing;
    }

    @Override
    public Tracing findById(Long id) {
        if(tracingRepository.findById(id).isPresent()) {
            return tracingRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Tracing tracing = findById(id);
        tracingRepository.delete(tracing);
    }
}
