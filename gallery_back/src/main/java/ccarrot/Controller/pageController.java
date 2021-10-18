package ccarrot.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class pageController {

    @GetMapping("api_test")
    public String get_test() {
        return "GetMapping_ok";
    }
    @PostMapping("api_test")
    public String post_test() {
        return "PostMapping_ok";
    }
    @PutMapping("api_test")
    public String put_test() {
        return "PutMapping_ok";
    }
    @DeleteMapping("api_test")
    public String delete_test() {
        return "DeleteMapping_ok";
    }
}
