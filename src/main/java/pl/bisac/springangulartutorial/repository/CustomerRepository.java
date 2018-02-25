package pl.bisac.springangulartutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.bisac.springangulartutorial.domain.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
