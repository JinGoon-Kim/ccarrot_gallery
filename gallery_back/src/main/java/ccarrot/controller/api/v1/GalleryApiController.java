package ccarrot.controller.api.v1;

import ccarrot.domain.Gallery;
import ccarrot.domain.Member;
import ccarrot.service.GalleryUploadService;
import ccarrot.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("v1/api")
public class GalleryApiController {

    private final MemberService memberService;
    private final GalleryUploadService galleryUploadService;

    @PostMapping("/gallery")
    @Transactional
    public CreateGalleryResponse saveGallery (Long member_seq,
                                              String gallery_title,
                                              String gallery_content,
                                              @RequestParam("files") MultipartFile mtf) {

        Member write_member = memberService.findOne(member_seq);

        Gallery gallery = Gallery.builder()
                .member_seq(write_member)
                .gallery_title(gallery_title)
                .gallery_content(gallery_content)
                .build();

        Long id = galleryUploadService.save(gallery, mtf);

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
