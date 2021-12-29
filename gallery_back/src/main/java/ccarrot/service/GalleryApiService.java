package ccarrot.service;

import ccarrot.domain.Gallery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class GalleryApiService {

    private final GalleryService galleryService;
    private final FileService fileService;

    @Transactional
    public Long save(Gallery gallery, MultipartFile mtf) {
        Long id = galleryService.insert_gallery(gallery);

        System.out.println("id = " + id);

        try {
            fileService.save_file(mtf, id);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return id;
    }

    public Long saveGalleryOnly(Gallery gallery) {
        return galleryService.insert_gallery(gallery);
    }
}
