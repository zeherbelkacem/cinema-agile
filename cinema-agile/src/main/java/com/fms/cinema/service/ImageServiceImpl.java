package com.fms.cinema.service;

import com.fms.cinema.entities.Image;
import com.fms.cinema.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl implements ImageService{
    @Autowired
    private ImageRepository imageRepository;
    @Override
    public Image saveImage(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Image getImageByName(String name) {
        return imageRepository.findByName(name);
    }
}
