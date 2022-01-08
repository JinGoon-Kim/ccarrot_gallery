package ccarrot.controller.api.v1;

import ccarrot.service.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/api")
public class FileApiController {

    private final FileService fileService;

    @Value("${spring.servlet.multipart.location}")
    private String ROOT_PATH;

    @GetMapping("/file/{file_name}")
    @Transactional
    public ResponseEntity<Resource> getOneFile(@PathVariable("file_name") String fileName) {

        String file_dir = ROOT_PATH + "/resources/static/_upload/";

        Resource resource = new FileSystemResource(file_dir + fileName);

        if (!resource.exists()) return new ResponseEntity<Resource>(HttpStatus.NOT_FOUND);

        HttpHeaders httpHeaders = new HttpHeaders();
        Path path = null;

        try{
            path = Paths.get(file_dir + fileName);
            httpHeaders.add("Content-Type", Files.probeContentType(path));
        }catch (IOException e) {
            e.printStackTrace();
        }

        return new ResponseEntity<Resource>(resource, httpHeaders, HttpStatus.OK);
    }
}
