package ccarrot.service;

import ccarrot.Repositories.GalleryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GalleryService {

    private final GalleryRepository galleryRepository;
}
