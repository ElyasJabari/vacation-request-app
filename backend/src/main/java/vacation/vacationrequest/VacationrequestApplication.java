package vacation.vacationrequest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import vacation.vacationrequest.repository.EmployeeRepository;

@SpringBootApplication
public class VacationrequestApplication {

	public static void main(String[] args) {
		SpringApplication.run(VacationrequestApplication.class, args);
	}

	@Bean
    CommandLineRunner runner(EmployeeRepository repo) {
        return args -> {
            System.out.println("### EmployeesTest: " + repo.findAll());
        };
    }

}
