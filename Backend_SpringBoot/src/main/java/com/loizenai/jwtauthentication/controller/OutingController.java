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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/outing")
@RestController
public class OutingController {
//    private final OutingRepository outingRepository;
    @Autowired
    OutingService outingService;

//    public OutingController(OutingRepository outingRepository) {
//        this.outingRepository = outingRepository;
//    }
    // get all outing list
    @GetMapping("/show")
    public ResponseEntity<List<Outing>> getOuting() {
        List<Outing> outing = outingService.findAll();
        return new ResponseEntity<List<Outing>> (outing, HttpStatus.OK);
    }
    //add outing details
    @PostMapping("/add")
    void addOuting(@RequestBody Outing outing) {
        outingService.save(outing);
    }

    @GetMapping("/show/{id}")
    public ResponseEntity<Outing> getOutingById(@PathVariable(value = "id") Long id) {
        Outing outing = outingService.findById(id);
        return ResponseEntity.ok().body(outing);
    }
    //update outing details rest api
    @PutMapping("/show/{id}")
    public ResponseEntity<Outing> updateOuting(@PathVariable(value = "id") Long id,
                                                @RequestBody Outing outingDetails) {
        Outing outing = outingService.findById(id);

        outing.setId(outingDetails.getId());
        outing.setEmail(outingDetails.getEmail());
        outing.setName(outingDetails.getName());
        outing.setReason(outingDetails.getReason());
        outing.setDay(outingDetails.getDay());
        outing.setDuration(outingDetails.getDuration());
        outing.setOutgoingtime(outingDetails.getOutgoingtime());
        outing.setReturningtime(outingDetails.getReturningtime());
        Outing updatedOuting = outingService.save(outing);
        return ResponseEntity.ok().body(updatedOuting);
    }

    //delete outing rest api
    @DeleteMapping("/show/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOuting(@PathVariable Long id){
        Outing outing = outingService.findById(id);

        outingService.delete(outing);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok().body(response);
    }

}
