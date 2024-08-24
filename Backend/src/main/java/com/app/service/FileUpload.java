package com.app.service;

import java.io.FileNotFoundException;
import java.io.InputStream;

import org.springframework.web.multipart.MultipartFile;

public interface FileUpload {
    // Create a file on the server at the given path
    String uploadFile(String path, MultipartFile file) throws Exception;

    // Get the resource
    InputStream getResource(String path) throws FileNotFoundException;

    // Delete file
    void deleteFile(String file);
}
