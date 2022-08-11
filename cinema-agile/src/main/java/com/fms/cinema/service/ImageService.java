package com.fms.cinema.service;

import com.fms.cinema.entities.Image;

import java.util.Optional;

public interface ImageService {

    public Image saveImage(Image image);
    public Image getImageByName(String name);
}
