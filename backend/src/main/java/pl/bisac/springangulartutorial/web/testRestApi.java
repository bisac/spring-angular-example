package pl.bisac.springangulartutorial.web;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.bisac.springangulartutorial.domain.Customer;
import pl.bisac.springangulartutorial.repository.CarRepository;
import pl.bisac.springangulartutorial.repository.CustomerRepository;
import pl.bisac.springangulartutorial.repository.ReparationRepository;

import java.util.List;

@RestController
public class testRestApi {
  private ReparationRepository reparationRepository;
  private CarRepository carRepository;
  private CustomerRepository customerRepository;

  public testRestApi(ReparationRepository reparationRepository, CarRepository carRepository,
      CustomerRepository customerRepository) {
    this.reparationRepository = reparationRepository;
    this.carRepository = carRepository;
    this.customerRepository = customerRepository;
  }



 // @CrossOrigin
    @GetMapping("hello")
  public String griding(){
    return "Witaj świecie";
  }

 // @CrossOrigin
  @Transactional
  @GetMapping("test")
  public List<Customer> test() {

    return customerRepository.findAll();
    /*Optional<Car> car = carRepository.findById(7l);
    Reparation reparation = new Reparation();

    reparation.setCar(car.get());
    reparation.setStartDate(new Date());
    reparation.setDescription("vcvd gdf gsd fgsdf gfsdgdfsgfsd");
    reparation.setDuration(12l);
    reparationRepository.save(reparation);*/
    //System.out.println(reparationRepository.findById(1l).get().getDescription());
    //return 1;
  }
}
