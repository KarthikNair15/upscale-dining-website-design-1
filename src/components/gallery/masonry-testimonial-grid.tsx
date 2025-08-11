"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, MessageCircle, Instagram, ChefHat, Camera, Utensils, Users } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'ambiance' | 'chef' | 'diners';
  caption: string;
  likes?: number;
  isInstagram?: boolean;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/api/placeholder/400/500",
    alt: "Signature ribeye steak with seasonal vegetables",
    category: "food",
    caption: "Our signature dry-aged ribeye, perfectly seared and served with roasted seasonal vegetables",
    likes: 124
  },
  {
    id: 2,
    src: "/api/placeholder/350/400",
    alt: "Elegant dining room ambiance",
    category: "ambiance",
    caption: "Intimate dining experience in our main dining room with warm candlelight",
    likes: 89
  },
  {
    id: 3,
    src: "/api/placeholder/300/600",
    alt: "Chef preparing signature dish",
    category: "chef",
    caption: "Head Chef Maria crafting our famous pan-seared scallops",
    likes: 156
  },
  {
    id: 4,
    src: "/api/placeholder/400/300",
    alt: "Artisanal dessert presentation",
    category: "food",
    caption: "House-made chocolate soufflé with vanilla bean ice cream",
    likes: 198
  },
  {
    id: 5,
    src: "/api/placeholder/350/450",
    alt: "Happy diners enjoying their meal",
    category: "diners",
    caption: "Celebrating life's special moments with exceptional cuisine",
    likes: 67
  },
  {
    id: 6,
    src: "/api/placeholder/400/350",
    alt: "Fresh seafood platter",
    category: "food",
    caption: "Daily catch featuring locally sourced oysters and prawns",
    likes: 142,
    isInstagram: true
  },
  {
    id: 7,
    src: "/api/placeholder/300/400",
    alt: "Wine cellar and sommelier",
    category: "ambiance",
    caption: "Our extensive wine collection curated by Master Sommelier James",
    likes: 78
  },
  {
    id: 8,
    src: "/api/placeholder/450/350",
    alt: "Kitchen brigade at work",
    category: "chef",
    caption: "Our talented culinary team preparing for evening service",
    likes: 103,
    isInstagram: true
  },
  {
    id: 9,
    src: "/api/placeholder/350/500",
    alt: "Handcrafted cocktail presentation",
    category: "food",
    caption: "Mixologist-crafted cocktails using house-infused spirits",
    likes: 87
  },
  {
    id: 10,
    src: "/api/placeholder/400/400",
    alt: "Private dining room setup",
    category: "ambiance",
    caption: "Our private dining space perfect for intimate gatherings",
    likes: 92,
    isInstagram: true
  }
];

const categoryFilters = [
  { key: 'all', label: 'All Photos', icon: Camera },
  { key: 'food', label: 'Culinary Art', icon: Utensils },
  { key: 'ambiance', label: 'Atmosphere', icon: Users },
  { key: 'chef', label: 'Kitchen', icon: ChefHat },
  { key: 'diners', label: 'Experiences', icon: Heart }
];

export default function RestaurantGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [imageLoading, setImageLoading] = useState<{ [key: number]: boolean }>({});

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleImageLoad = useCallback((id: number) => {
    setImageLoading(prev => ({ ...prev, [id]: false }));
  }, []);

  const handleImageLoadStart = useCallback((id: number) => {
    setImageLoading(prev => ({ ...prev, [id]: true }));
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Culinary Gallery
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Experience our culinary artistry through stunning visuals showcasing our dishes, 
            ambiance, and the passion behind every plate we serve.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categoryFilters.map((filter) => {
            const IconComponent = filter.icon;
            return (
              <button
                key={filter.key}
                onClick={() => setSelectedCategory(filter.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                  selectedCategory === filter.key
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg'
                    : 'bg-card text-card-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                <IconComponent size={18} />
                <span className="font-medium">{filter.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Instagram Feed Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Instagram className="text-primary" size={24} />
          <h3 className="text-2xl font-display font-semibold text-foreground">
            #TasteOfElegance
          </h3>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Loading Spinner */}
                {imageLoading[image.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoadStart={() => handleImageLoadStart(image.id)}
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  
                  {/* Instagram Badge */}
                  {image.isInstagram && (
                    <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground p-2 rounded-full">
                      <Instagram size={16} />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <div className="bg-primary/20 backdrop-blur-sm text-foreground px-4 py-2 rounded-full text-sm font-medium">
                        Click to view full size
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-6">
                  <p className="text-card-foreground text-sm leading-relaxed mb-3">
                    {image.caption}
                  </p>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center gap-4 text-muted text-sm">
                    <div className="flex items-center gap-1">
                      <Heart size={14} className="fill-current text-primary" />
                      <span>{image.likes}</span>
                    </div>
                    {image.isInstagram && (
                      <div className="flex items-center gap-1">
                        <MessageCircle size={14} />
                        <span>{Math.floor(Math.random() * 20) + 5}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative max-w-4xl max-h-[90vh] bg-card rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors duration-200"
                >
                  <X size={20} />
                </button>

                {/* Image */}
                <div className="relative">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  
                  {/* Instagram Badge */}
                  {selectedImage.isInstagram && (
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground p-3 rounded-full">
                      <Instagram size={20} />
                    </div>
                  )}
                </div>

                {/* Caption and Stats */}
                <div className="p-6 bg-card">
                  <p className="text-card-foreground leading-relaxed mb-4">
                    {selectedImage.caption}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-muted">
                      <div className="flex items-center gap-2">
                        <Heart size={16} className="fill-current text-primary" />
                        <span>{selectedImage.likes} likes</span>
                      </div>
                      {selectedImage.isInstagram && (
                        <div className="flex items-center gap-2">
                          <MessageCircle size={16} />
                          <span>{Math.floor(Math.random() * 20) + 5} comments</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted uppercase tracking-wider">
                      {selectedImage.category.replace('_', ' ')}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}