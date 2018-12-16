package pl.bisac.springangulartutorial.web;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import pl.bisac.springangulartutorial.repository.CustomerRepository;

import static org.mockito.Mockito.when;

public class testRestApiTest {

  @Mock
  private CustomerRepository customerRepository;

  testRestApi testRestApi;

  @Before
  public void setUp() throws Exception {
    MockitoAnnotations.initMocks(this);
    testRestApi = new testRestApi(null,null, customerRepository);
  }

  @Test
  public void test1() throws Exception {

    when(customerRepository.findAll()).thenReturn(null);
    testRestApi.test();

  }

}