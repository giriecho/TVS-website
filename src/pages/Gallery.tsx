import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, Share2 } from "lucide-react";

// Import all images explicitly
import image001 from '@/assets/Gallery/image_001.png';
import image002 from '@/assets/Gallery/image_002.jpg';
import image003 from '@/assets/Gallery/image_003.jpg';
import image004 from '@/assets/Gallery/image_004.jpg';
import image005 from '@/assets/Gallery/image_005.jpg';
import image006 from '@/assets/Gallery/image_006.jpg';
import image007 from '@/assets/Gallery/image_007.jpg';
import image008 from '@/assets/Gallery/image_008.jpg';
import image009 from '@/assets/Gallery/image_009.jpg';
import image010 from '@/assets/Gallery/image_010.jpg';
import image011 from '@/assets/Gallery/image_011.png';
import image012 from '@/assets/Gallery/image_012.jpg';
import image013 from '@/assets/Gallery/image_013.jpg';
import image014 from '@/assets/Gallery/image_014.png';
import image015 from '@/assets/Gallery/image_015.jpg';
import image016 from '@/assets/Gallery/image_016.jpg';
import image017 from '@/assets/Gallery/image_017.png';
import image018 from '@/assets/Gallery/image_018.png';
import image019 from '@/assets/Gallery/image_019.jpg';
import image020 from '@/assets/Gallery/image_020.png';
import image021 from '@/assets/Gallery/image_021.jpg';
import image022 from '@/assets/Gallery/image_022.png';
import image023 from '@/assets/Gallery/image_023.jpg';
import image024 from '@/assets/Gallery/image_024.png';
import image025 from '@/assets/Gallery/image_025.jpg';
import image026 from '@/assets/Gallery/image_026.png';
import image027 from '@/assets/Gallery/image_027.jpg';
import image028 from '@/assets/Gallery/image_028.png';
import image029 from '@/assets/Gallery/image_029.png';
import image030 from '@/assets/Gallery/image_030.png';
import image031 from '@/assets/Gallery/image_031.png';
import image032 from '@/assets/Gallery/image_032.jpg';
import image033 from '@/assets/Gallery/image_033.jpg';
import image034 from '@/assets/Gallery/image_034.jpg';
import image035 from '@/assets/Gallery/image_035.jpg';
import image036 from '@/assets/Gallery/image_036.png';

// Create image data array
const galleryImagesArray = [
  image001, image002, image003, image004, image005, image006,
  image007, image008, image009, image010, image011, image012,
  image013, image014, image015, image016, image017, image018,
  image019, image020, image021, image022, image023, image024,
  image025, image026, image027, image028, image029, image030,
  image031, image032, image033, image034, image035, image036
];

// Extract image data with metadata
const imageData = galleryImagesArray.map((url, index) => {
  const imageNumber = index + 1;
  
  // Auto-categorize based on image numbers
  let category = 'Official Posters';
  let title = `Hey Bhagawan - ${imageNumber}`;
  
  if (imageNumber <= 5) {
    category = 'Official Posters';
    title = `Official Poster ${imageNumber}`;
  } else if (imageNumber <= 10) {
    category = 'Trailer & Promotions';
    title = `Promotional Creative ${imageNumber}`;
  } else if (imageNumber <= 15) {
    category = 'Songs';
    title = `Music Poster ${imageNumber}`;
  } else if (imageNumber <= 20) {
    category = 'Events & Premieres';
    title = `Event Moment ${imageNumber}`;
  } else if (imageNumber <= 25) {
    category = 'Movie Stills';
    title = `Scene ${imageNumber}`;
  } else if (imageNumber <= 30) {
    category = 'Behind The Scenes';
    title = `BTS Capture ${imageNumber}`;
  } else {
    category = 'Blockbuster Moments';
    title = `Success Story ${imageNumber}`;
  }
  
  return {
    id: index,
    url: url as string,
    title,
    category,
    filename: `image_${String(imageNumber).padStart(3, '0')}`,
    featured: index % 7 === 0, // Make every 7th image featured
  };
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : imageData.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < imageData.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0F] via-[#1a1a2e] to-[#0B0B0F] pt-24">
      {/* Gallery Grid - Masonry Layout */}
      <section className="max-w-7xl mx-auto px-6 py-12 pb-20">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          {imageData.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`group relative break-inside-avoid cursor-pointer overflow-hidden rounded-xl ${
                image.featured ? 'sm:col-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-white/10">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                      {image.category}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {image.title}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imageData[selectedImage]?.url}
                alt={imageData[selectedImage]?.title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-primary font-semibold uppercase tracking-wider mb-1">
                      {imageData[selectedImage]?.category}
                    </div>
                    <div className="text-xl font-bold text-white">
                      {imageData[selectedImage]?.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {selectedImage + 1} / {imageData.length}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = imageData[selectedImage]?.url || '';
                        link.download = imageData[selectedImage]?.filename || 'image';
                        link.click();
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                      aria-label="Download"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: imageData[selectedImage]?.title,
                            text: `Check out this image from Hey Bhagawan!`,
                            url: window.location.href,
                          });
                        }
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                      aria-label="Share"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
