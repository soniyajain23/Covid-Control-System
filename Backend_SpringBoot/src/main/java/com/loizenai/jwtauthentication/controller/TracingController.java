package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.repository.TracingRepository;
import com.loizenai.jwtauthentication.model.Tracing;
import com.loizenai.jwtauthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/tracing")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TracingController {

    // standard constructors

    //private final TracingRepository tracingRepository;
    @Autowired
    TracingRepository tracingRepository;

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

    // get tracing by id rest api
    @GetMapping("/show/{id}")
    public ResponseEntity<Optional<Tracing>> getTracingById(@PathVariable long id) {

        Optional<Tracing> tracing = tracingRepository.findById(id);
        return ResponseEntity.ok(tracing);
    }

    // update tracing rest api
//    @PutMapping("/show/{id}")
//    public ResponseEntity<Optional<Tracing>> updateTracing(@PathVariable Long id, @RequestBody Tracing tracingDetails) {
//        Optional<Tracing> tracing = tracingRepository.findById(id);
//
//        tracing.set
//
//    }
}
