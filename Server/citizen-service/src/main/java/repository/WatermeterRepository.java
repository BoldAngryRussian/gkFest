package repository;

import model.Watermeter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatermeterRepository extends JpaRepository<Watermeter,Long> {

}
