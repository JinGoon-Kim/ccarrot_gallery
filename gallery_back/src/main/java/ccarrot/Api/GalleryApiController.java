package ccarrot.Api;

import ccarrot.domain.File;
import ccarrot.domain.Gallery;
import ccarrot.domain.Member;
import ccarrot.service.FileService;
import ccarrot.service.GalleryService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class GalleryApiController {

    private final GalleryService galleryService;
    private final FileService fileService;

    @PostMapping("/api/gallery")
    public CreateGalleryResponse saveGallery (@Valid CreateGalleryRequest request, @RequestParam("files") MultipartFile mtf) {
        
        System.out.println(request);

        Gallery gallery = new Gallery();
        gallery.setMember_seq(request.getMember_seq());
        gallery.setGallery_title(request.getGallery_title());
        gallery.setGallery_content(request.getGallery_content());

        try {
           String file_name = fileService.save_file(mtf);
        } catch (Exception e) {
            e.printStackTrace();
        }

        Long id = galleryService.insert_gallery(gallery);

        return new CreateGalleryResponse(id);
    }

    @Data
    private class CreateGalleryResponse {
        private Long id;
        public CreateGalleryResponse(Long id) {
            this.id = id;
        }
    }

    @Data
    private class CreateGalleryRequest {
        private Member member_seq;
        private String gallery_title;
        private String gallery_content;
    }

    @Data
    @AllArgsConstructor
    static class GalleryDto {
        private Member member_seq;
        private String gallery_title;
        private String gallery_content;
    }

    @Data
    @AllArgsConstructor
    static class FileList<T> {
        private int total_record;
        private T data;
    }
}
