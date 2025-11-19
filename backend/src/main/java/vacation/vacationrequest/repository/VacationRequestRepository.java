package vacation.vacationrequest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vacation.vacationrequest.model.VacationRequest;

public interface VacationRequestRepository extends JpaRepository<VacationRequest, Long>{
}
