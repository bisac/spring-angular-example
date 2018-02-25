package pl.bisac.springangulartutorial.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_id_customer")
  @SequenceGenerator(
      name="seq_id_customer",
      sequenceName="seq_id_customer",
      allocationSize = 1
  )
  private Long id;
  private String customerName;
  private String email;
  private String phone;
  private String street;
  private String city;
  private String zipCode;
  private String taxNumber;
}
