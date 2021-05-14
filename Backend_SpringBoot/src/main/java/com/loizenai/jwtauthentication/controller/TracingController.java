package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.model.Outing;
import com.loizenai.jwtauthentication.repository.TracingRepository;
import com.loizenai.jwtauthentication.model.Tracing;
import com.loizenai.jwtauthentication.repository.UserRepository;
import com.loizenai.jwtauthentication.service.TracingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @Autowired
    TracingService tracingService;

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
    public ResponseEntity<Tracing> getTracingById(@PathVariable long id) {

        Tracing tracing = tracingService.findById(id);
        return ResponseEntity.ok(tracing);
    }

    // update tracing rest api
    @PutMapping("/show/{id}")
    public ResponseEntity<Tracing> updateTracing(@PathVariable Long id, @RequestBody Tracing tracingDetails) {
        Tracing tracing = tracingService.findById(id);

        tracing.setId((int) tracingDetails.getId());
        tracing.setEmail(tracingDetails.getEmail());
        tracing.setName(tracingDetails.getName());
        tracing.setRoom(tracingDetails.getRoom());
        tracing.setDrivername(tracingDetails.getDrivername());
        tracing.setDrivercontact(tracingDetails.getDrivercontact());
        Tracing updatedTracing = tracingService.save(tracing);
        return ResponseEntity.ok().body(updatedTracing);
    }

    //delete outing rest api
    @DeleteMapping("/show/{id}")
    public ResponseEntity<String> deleteTracing(@PathVariable Long id){
        tracingService.delete(id);
        return new ResponseEntity<String>("A record is deleted successfully!", HttpStatus.OK);
    }
}
