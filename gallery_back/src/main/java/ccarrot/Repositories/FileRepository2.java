package ccarrot.Repositories;

import ccarrot.domain.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

@Repository
public interface FileRepository2 extends JpaRepository<File, Long> {

}
