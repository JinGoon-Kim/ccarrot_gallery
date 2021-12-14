package ccarrot.service;

import ccarrot.Repositories.FileRepository;
import ccarrot.domain.File;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FileService {

    private FileRepository fileRepository;

    @Transactional
    public String save_file (MultipartFile mtf) throws Exception{
        if (mtf == null || mtf.isEmpty()) {
            System.out.println("mtf = " + mtf);
        }
        String file_dir = "/resources/static/_upload";
        UUID uuid = UUID.randomUUID();
        String file_origin_name = mtf.getOriginalFilename();
        String file_name = uuid + "_" + mtf.getOriginalFilename();
        java.io.File saveFile = new java.io.File(file_dir, file_name);
        mtf.transferTo(saveFile);

        File file = new File();
        file.setFile_dir(file_dir);
        file.setFile_origin_name(file_origin_name);
        file.setFile_name(file_name);

        fileRepository.save(file);

        return file_name;
    }

}
