package ccarrot.Repositories;

import ccarrot.domain.Gallery;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class GalleryRepository {

    @PersistenceContext
    private EntityManager em;

    public void save (Gallery gallery) {
        em.persist(gallery);
    }

    public Gallery findOne(Long id) {
        em.createQuery("SELECT g FROM Gallery g WHERE g.id = :id", Gallery.class)
                .getResultList();
        return em.find(Gallery.class, id);
    }

    public List<Gallery> findAll() {
        return em.createQuery("SELECT g FROM Gallery g", Gallery.class)
                .getResultList();
    }

    public List<Gallery> findByName(String gallery_title) {
        return em.createQuery("SELECT g FROM Gallery g WHERE g.gallery_title = :gallery_title", Gallery.class)
                .setParameter("gallery_title", gallery_title)
                .getResultList();
    }
}
