package ccarrot.Repositories;

import ccarrot.domain.File;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.List;

@Repository
public class FileRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(File file) {
        em.persist(file);
    }

    public File findOne(Long id) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("db");
        EntityManager em = emf.createEntityManager();

        return em.find(File.class, id);
    }

    public List<File> findAll() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("db");
        EntityManager em = emf.createEntityManager();

        return em.createQuery("SELECT f FROM File f", File.class)
                .getResultList();
    }
}
