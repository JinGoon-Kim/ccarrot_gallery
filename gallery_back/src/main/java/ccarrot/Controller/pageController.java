package ccarrot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class pageController {

    @GetMapping("/api_test")
    public String get_test() {
        System.out.println("pageController.get_test");
        return "Hello Spring";
    }
    @PostMapping("/api_test")
    public String post_test() {
        System.out.println("pageController.post_test");
        return "PostMapping_ok";
    }
    @PutMapping("/api_test")
    public String put_test() {
        System.out.println("pageController.put_test");
        return "PutMapping_ok";
    }
    @DeleteMapping("/api_test")
    public String delete_test() {
        System.out.println("pageController.delete_test");
        return "DeleteMapping_ok";
    }
}
