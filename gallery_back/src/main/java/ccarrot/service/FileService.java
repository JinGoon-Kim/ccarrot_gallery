package ccarrot.service;

import ccarrot.Repositories.FileRepository;
import ccarrot.Repositories.GalleryRepository;
import ccarrot.domain.File;
import ccarrot.domain.FileType;
import ccarrot.domain.Gallery;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Objects;
import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FileService {

    private FileRepository fileRepository;
    private GalleryRepository galleryRepository;

    @Transactional
    public void save_file (MultipartFile mtf, Long gallery_id) throws Exception{
        if (mtf == null || mtf.isEmpty()) {
            System.out.println("mtf = " + mtf);
        }
        String file_dir = "/resources/static/_upload";
        UUID uuid = UUID.randomUUID();
        String file_origin_name = mtf.getOriginalFilename();
        String file_name = uuid + "_" + mtf.getOriginalFilename();
        java.io.File saveFile = new java.io.File(file_dir, file_name);
        mtf.transferTo(saveFile);

        String temp_arr[] = mtf.getContentType().split("/");
        FileType file_type = null;
        if (Objects.equals(temp_arr[0], "image")) file_type = FileType.IMG;

        File file = new File();
        file.setFile_dir(file_dir);
        file.setFile_origin_name(file_origin_name);
        file.setFile_name(file_name);
        file.setFile_type(file_type);

        Gallery target_gallery = galleryRepository.findOne(gallery_id);

        file.setGallery_seq(target_gallery);

        fileRepository.save(file);
    }

}
