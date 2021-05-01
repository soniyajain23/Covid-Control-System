package com.loizenai.jwtauthentication.controller;
import com.loizenai.jwtauthentication.repository.OutingRepository;
import com.loizenai.jwtauthentication.model.Outing;
import com.loizenai.jwtauthentication.service.OutingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/outing")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class OutingController {

    // standard constructors

//    private final OutingRepository outingRepository;

    @Autowired
    OutingService outingService;

//    public OutingController(OutingRepository outingRepository) {
//        this.outingRepository = outingRepository;
//    }

    @GetMapping("/show")
    public ResponseEntity<List<Outing>> getOuting() {
        List<Outing> outing = outingService.findAll();
        return new ResponseEntity<List<Outing>> (outing, HttpStatus.OK);
    }
    @PostMapping("/add")
    void addOuting(@RequestBody Outing outing) {
        outingService.save(outing);
    }
//    @PostMapping("/add")
//    public ResponseEntity<Outing> addOuting(@RequestBody Outing outing) {
//        final Outing outing1 = outingService.save(outing);
//        return new ResponseEntity<Outing>(outing1, HttpStatus.OK);
//    }
    // update
//    @GetMapping("/show/{id}")
//    public ResponseEntity<Outing> updateOuting(@PathVariable("id") Long id) {
//        Outing outing = outingService. findById(id);
//        return new ResponseEntity<Outing> (outing, HttpStatus.OK);
//    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<Outing> getOutingById(@PathVariable(value = "id") Long id) {
        Outing outing = outingService.findById(id);
        return ResponseEntity.ok().body(outing);
    }

    @PutMapping("/show/{id}")
    public ResponseEntity<Outing> updateOuting(@PathVariable(value = "id") Long id,
                                               @Valid @RequestBody Outing outingDetails) {
        Outing outing = outingService.findById(id);

        outing.setId(outingDetails.getId());
        outing.setEmail(outingDetails.getEmail());
        outing.setName(outingDetails.getName());
        outing.setReason(outingDetails.getReason());
        outing.setDay(outingDetails.getDay());
        outing.setDuration(outingDetails.getDuration());
        outing.setOutgoingtime(outingDetails.getOutgoingtime());
        outing.setReturningtime(outingDetails.getReturningtime());
        //final Outing updatedOuting = OutingRepository.save(outing);
        //return ResponseEntity.ok(updatedOuting);
        final Outing outing2 = outingService.save(outing);
        //return new ResponseEntity<Outing> (outing2, HttpStatus.OK);
        return ResponseEntity.ok().body(outing2);
    }

}