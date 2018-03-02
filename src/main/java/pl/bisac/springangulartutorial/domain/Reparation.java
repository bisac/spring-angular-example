package pl.bisac.springangulartutorial.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Reparation {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_id_reparation")
  @SequenceGenerator(
      name="seq_id_reparation",
      sequenceName="seq_id_reparation",
      allocationSize = 1
  )
  private Long id;
  @Temporal(TemporalType.TIMESTAMP)
  private Date startDate;
  private Long duration;
  @Lob
  private String description;
  private String state;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "carId")
  private Car car;
}
