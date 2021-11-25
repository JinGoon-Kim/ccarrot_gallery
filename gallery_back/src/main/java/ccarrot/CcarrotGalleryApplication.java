package ccarrot;

import ccarrot.member.Member;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

@SpringBootApplication
public class CcarrotGalleryApplication {

    public static void main(String[] args) {
        SpringApplication.run(CcarrotGalleryApplication.class, args);
    }

}
