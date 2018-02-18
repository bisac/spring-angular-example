package pl.bisac.springangulartutorial;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(value = "classpath:test.properties")
public class SpringAngularTutorialApplicationTests {

	@Test
	public void contextLoads() {
	}

}
