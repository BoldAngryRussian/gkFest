package service;

import model.Watermeter;

import java.util.Optional;

public interface WatermeterService {
    public abstract Optional<Watermeter> get(Long id);
}
