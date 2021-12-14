package ccarrot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class pageController {

    @GetMapping("/api_test")
    public String get_test() {
        System.out.println("pageController.get_test");
        return "Index";
    }
}
