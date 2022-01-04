package ccarrot.service;

import ccarrot.Repositories.GalleryRepository;
import ccarrot.domain.Gallery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GalleryService {

    private final GalleryRepository galleryRepository;

    @Transactional
    public Long insert_gallery (Gallery gallery) {
        galleryRepository.save(gallery);
        return gallery.getId();
    }

    public List<Gallery> findGallery() {
        return galleryRepository.findAll();
    }

    public Gallery findOne(Long galleryId) {
        return galleryRepository.findOne(galleryId);
    }

    public List<Gallery> findGalleryByTitle(String title) {
        return galleryRepository.findByName(title);
    }

}
