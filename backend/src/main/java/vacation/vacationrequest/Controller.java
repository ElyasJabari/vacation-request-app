package vacation.vacationrequest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController

public class Controller {
    @GetMapping("/Hello")
    public String getMethodName() {
        return "Hello my data";
    }
    
}
