package pl.bisac.springangulartutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.bisac.springangulartutorial.domain.Car;

public interface CarRepository extends JpaRepository<Car, Long>{
}
