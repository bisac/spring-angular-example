package pl.bisac.springangulartutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.bisac.springangulartutorial.domain.Reparation;

public interface ReparationRepository extends JpaRepository<Reparation,Long>{
}
