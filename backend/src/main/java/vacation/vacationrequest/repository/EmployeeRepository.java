package vacation.vacationrequest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vacation.vacationrequest.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
