package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.repository.TracingRepository;
import com.loizenai.jwtauthentication.model.Tracing;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RequestMapping("/api/tracing")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TracingController {

    // standard constructors

    private final TracingRepository tracingRepository;

    public TracingController(TracingRepository tracingRepository) {
        this.tracingRepository = tracingRepository;
    }

    @GetMapping("/show")
    public List<Tracing> getTracing() {
        return (List<Tracing>) tracingRepository.findAll();
    }
    @PostMapping("/add")
    void addTracing(@RequestBody Tracing tracing) {
        tracingRepository.save(tracing);
    }
}
