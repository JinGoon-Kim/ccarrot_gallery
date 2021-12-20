package ccarrot.Api;

import ccarrot.domain.File;
import ccarrot.domain.Gallery;
import ccarrot.domain.Member;
import ccarrot.service.FileService;
import ccarrot.service.GalleryService;
import ccarrot.service.MemberService;
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

    private final MemberService memberService;
    private final GalleryService galleryService;
    private final FileService fileService;

    @PostMapping("/api/gallery")
    public CreateGalleryResponse saveGallery (Long member_seq,
                                              String gallery_title,
                                              String gallery_content,
                                              @RequestParam("files") MultipartFile mtf) {

        Member write_member = new Member();
        write_member = memberService.findOne(member_seq);

        System.out.println("mtf = " + mtf);

        Gallery gallery = new Gallery();
        gallery.setMember_seq(write_member);
        gallery.setGallery_title(gallery_title);
        gallery.setGallery_content(gallery_content);
        Long id = galleryService.insert_gallery(gallery);

        System.out.println("id = " + id);

        try {
           String file_name = fileService.save_file(mtf, id);
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
