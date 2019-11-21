package service;

import model.Watermeter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.WatermeterRepository;

import java.util.Optional;

@Service
public class WatermeterServiceImpl implements WatermeterService {

    @Autowired
    WatermeterRepository watermeterRepository;

    @Override
    public Optional<Watermeter> get(Long id) {
        return watermeterRepository.findById(id);
    }
}
