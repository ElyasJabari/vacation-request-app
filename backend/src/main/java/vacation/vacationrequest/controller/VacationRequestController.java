package vacation.vacationrequest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vacation.vacationrequest.model.VacationRequest;
import vacation.vacationrequest.repository.VacationRequestRepository;

@RestController
@RequestMapping("/vacation")
public class VacationRequestController {
    private VacationRequestRepository repository;

    public VacationRequestController(VacationRequestRepository repository) {
        this.repository = repository;
    }
    
    @GetMapping
    public List<VacationRequest> getAll() {
        return repository.findAll();
    }
}
