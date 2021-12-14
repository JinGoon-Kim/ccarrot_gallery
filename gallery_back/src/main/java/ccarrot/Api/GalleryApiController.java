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

@RestController
@RequiredArgsConstructor
public class GalleryApiController {

    private final GalleryService galleryService;
    private final FileService fileService;

    @PostMapping("/api/gallery")
    public CreateGalleryResponse saveGallery (@Valid CreateGalleryRequest request, @RequestParam("file") MultipartFile mtf) {

        Gallery gallery = new Gallery();
        gallery.setMember_seq(request.getMember_seq());
        gallery.setGallery_title(request.getGallery_title());
        gallery.setGallery_content(request.getGallery_content());

        Long id = galleryService.insert_gallery(gallery);

        try {
            fileService.save_file(mtf);
        } catch (Exception e) {
            e.printStackTrace();
        }

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
        private String file_origin_name;
    }

    @Data
    @AllArgsConstructor
    static class GalleryDto {
        private Member member_seq;
        private String gallery_title;
        private String gallery_content;
        private String file_origin_name;
    }

    @Data
    @AllArgsConstructor
    static class FileList<T> {
        private int total_record;
        private T data;
    }
}
