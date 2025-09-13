package com.example.rentalApp.RentalApplication.implementation;

import com.example.rentalApp.RentalApplication.dto.UserClientChangeProfilePhotoResponseDto;
import com.example.rentalApp.RentalApplication.entity.UserClientRegistrationForValidationEntity;
import com.example.rentalApp.RentalApplication.mapper.UserClientChangeProfilePhotoMapper;
import com.example.rentalApp.RentalApplication.repository.UserClientChangeProfilePhotoRepository;
import com.example.rentalApp.RentalApplication.service.UserClientChangeProfilePhotoService;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;
@Service
@Transactional
public class UserClientChangeProfilePhotoServiceImplementation implements UserClientChangeProfilePhotoService {

    private final UserClientChangeProfilePhotoMapper userClientChangeProfilePhotoMapper;
    private final UserClientChangeProfilePhotoRepository userClientChangeProfilePhotoRepository;

    @Value("${upload.dir}")
    private String uploadDir;

    @Autowired
    public UserClientChangeProfilePhotoServiceImplementation(
            UserClientChangeProfilePhotoMapper userClientChangeProfilePhotoMapper,
            UserClientChangeProfilePhotoRepository userClientChangeProfilePhotoRepository) {
        this.userClientChangeProfilePhotoMapper = userClientChangeProfilePhotoMapper;
        this.userClientChangeProfilePhotoRepository = userClientChangeProfilePhotoRepository;
    }

    @Override
    public UserClientChangeProfilePhotoResponseDto updateProfile(Integer id, MultipartFile file) {
        try {
            if (file == null || file.isEmpty()) {
                throw new RuntimeException("File is empty");
            }

            // Ensure folder exists
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Generate unique filename
            String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();

            // Save file to folder
            Path filePath = uploadPath.resolve(filename);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Fetch user and update filename
            UserClientRegistrationForValidationEntity user = userClientChangeProfilePhotoRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("User not found with id " + id));

            user.setProfilephoto(filename);
            userClientChangeProfilePhotoRepository.save(user); // Hibernate updates the DB

            return userClientChangeProfilePhotoMapper.toDto(user);

        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }
    }
}

