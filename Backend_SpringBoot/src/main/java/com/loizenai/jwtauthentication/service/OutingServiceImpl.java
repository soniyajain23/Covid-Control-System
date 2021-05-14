package com.loizenai.jwtauthentication.service;
import com.loizenai.jwtauthentication.model.Outing;
import com.loizenai.jwtauthentication.repository.OutingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OutingServiceImpl implements OutingService{

    @Autowired
    OutingRepository outingRepository;

    @Override
    public List<Outing> findAll() {
        return outingRepository.findAll();
    }

    @Override
    public Outing save(Outing outing) {
        outingRepository.save(outing);
        return outing;
    }

    @Override
    public Outing findById(Long id) {
        if(outingRepository.findById(id).isPresent()) {
            return outingRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        Outing outing = findById(id);
        outingRepository.delete(outing);
    }

//    @Override
//    public Outing delete(Outing outing) {
//        outingRepository.save(outing);
//        return outing;
//    }
}
