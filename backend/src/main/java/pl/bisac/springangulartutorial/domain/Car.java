package pl.bisac.springangulartutorial.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class Car {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_id_car")
  @SequenceGenerator(
      name="seq_id_car",
      sequenceName="seq_id_car",
      allocationSize = 1
  )
  private Long id;
  private String model;
  private String registrationNumber;
  private String vin;
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name =  "customerId")
  private Customer customer;

  @OneToMany(mappedBy = "car", fetch = FetchType.LAZY)
  private List<Reparation> reparations;
}
