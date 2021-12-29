package ccarrot.controller.api.v1;

import ccarrot.domain.Gallery;
import ccarrot.domain.Member;
import ccarrot.service.FileService;
import ccarrot.service.GalleryApiService;
import ccarrot.service.GalleryService;
import ccarrot.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class GalleryApiController {

    private final MemberService memberService;
    private final GalleryService galleryService;
    private final FileService fileService;

    private final GalleryApiService galleryApiService;

    @GetMapping("/test/{filePath}")
    public HttpEntity<byte[]> saveGallery (@PathVariable String filePath) {

        System.out.println("!! " + filePath);

        File file = new File("E:\\Dropbox\\GitHub\\ccarrot_gallery\\gallery_back\\src\\main\\resources\\static\\_upload\\" + filePath);
        try {
            BufferedImage img = ImageIO.read(file);

            System.out.println("!! 넓이" + img.getWidth());
            System.out.println("!! 높이" + img.getHeight());

        } catch (IOException e) {
            e.printStackTrace();
        }

        byte[] media = null;
        try {
            InputStream targetStream = new FileInputStream(file);
            media = targetStream.readAllBytes();

        } catch (IOException e) {
            e.printStackTrace();
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setCacheControl(CacheControl.noCache().getHeaderValue());

        return new ResponseEntity<>(media, headers, HttpStatus.OK);
    }

    @PostMapping("/gallery")
    public CreateGalleryResponse saveGallery (Long member_seq,
                                              String gallery_title,
                                              String gallery_content,
                                              @RequestParam("files") MultipartFile mtf) {

        Member write_member = memberService.findOne(member_seq);

        Gallery gallery = new Gallery();
        gallery.setMember_seq(write_member);
        gallery.setGallery_title(gallery_title);
        gallery.setGallery_content(gallery_content);

        Gallery gallery2 = new Gallery(null, write_member, gallery_title, gallery_content);

        Gallery gallery3 = Gallery.builder()
                .member_seq(write_member)
                .gallery_title(gallery_title)
                .gallery_content(gallery_content)
                .build();

//        Long id = galleryApiService.save(gallery, mtf);

        Long id = galleryService.insert_gallery(gallery);

        System.out.println("id = " + id);

        try {
           fileService.save_file(mtf, id);
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
