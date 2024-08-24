package com.app.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Service
public class FileUploadImpl implements FileUpload {

    @Override
    public String uploadFile(String path, MultipartFile file) throws Exception {
        // Create the directory if it does not exist
        File directory = new File(path);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        // Generate the file path
        String fileName = file.getOriginalFilename();
        Path filePath = Paths.get(path + File.separator + fileName);

        // Copy the file to the target location
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return fileName;
    }

    @Override
    public InputStream getResource(String path) throws FileNotFoundException {
        Path filePath = Paths.get(path);
        if (Files.exists(filePath)) {
            return new FileInputStream(filePath.toFile());
        } else {
            throw new FileNotFoundException("File not found at path: " + path);
        }
    }

    @Override
    public void deleteFile(String filePath) {
        try {
            Path path = Paths.get(filePath);
            Files.deleteIfExists(path);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to delete file at path: " + filePath);
        }
    }
}
