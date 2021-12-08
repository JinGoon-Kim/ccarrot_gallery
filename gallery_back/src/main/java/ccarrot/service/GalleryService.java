package ccarrot.service;

import ccarrot.Repositories.GalleryRepository;
import ccarrot.domain.Gallery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.UUID;

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
