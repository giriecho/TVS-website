import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import project images
import project1 from '@/assets/img_p1_3.jpg';
import project2 from '@/assets/img_p2_2.jpg';
import project3 from '@/assets/img_p3_1.jpg';

interface SlideData {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: project1,
    alt: 'Trishul Visionary Studios Project 1',
    title: 'Cinematic Excellence',
    subtitle: 'Crafting powerful narratives that resonate globally'
  },
  {
    id: 2,
    image: project2,
    alt: 'Trishul Visionary Studios Project 2',
    title: 'Visual Storytelling',
    subtitle: 'Where imagination meets the screen'
  },
  {
    id: 3,
    image: project3,
    alt: 'Trishul Visionary Studios Project 3',
    title: 'Production Excellence',
    subtitle: 'State-of-the-art production and post-production'
  }
];

export function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Preload images for better performance
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div className="hero-slider-wrapper absolute inset-0 w-full h-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={600}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          bulletClass: 'hero-slider-bullet',
          bulletActiveClass: 'hero-slider-bullet-active'
        }}
        navigation={{
          nextEl: '.hero-slider-next',
          prevEl: '.hero-slider-prev'
        }}
        touchEventsTarget="container"
        touchRatio={1}
        simulateTouch={true}
        allowTouchMove={true}
        preventInteractionOnTransition={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          // Force start autoplay
          if (swiper.autoplay) {
            swiper.autoplay.start();
          }
        }}
        onSlideChange={() => {
          // Ensure autoplay continues after slide change
          if (swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.start();
          }
        }}
        className="hero-swiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              loading={slide.id === 1 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button
        className="hero-slider-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="hero-slider-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style>{`
        .hero-slider-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-swiper {
          width: 100%;
          height: 100%;
        }

        .hero-swiper .swiper-wrapper {
          width: 100%;
          height: 100%;
        }

        .hero-swiper .swiper-slide {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .hero-swiper .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Pagination Dots Styling */
        .hero-swiper :global(.swiper-pagination) {
          bottom: 2rem !important;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          z-index: 10;
        }

        .hero-slider-bullet {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .hero-slider-bullet:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        .hero-slider-bullet-active {
          width: 32px;
          border-radius: 5px;
          background: linear-gradient(135deg, #d4af37 0%, #f4e4a6 100%);
          border-color: rgba(212, 175, 55, 0.8);
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .hero-slider-prev,
          .hero-slider-next {
            width: 40px;
            height: 40px;
          }

          .hero-swiper :global(.swiper-pagination) {
            bottom: 1rem !important;
          }
          
          .hero-slider-bullet {
            width: 8px;
            height: 8px;
          }
          
          .hero-slider-bullet-active {
            width: 24px;
          }
        }

        /* Show arrows on mobile always, hide on desktop hover devices */
        @media (hover: hover) and (min-width: 640px) {
          .hero-slider-prev,
          .hero-slider-next {
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .hero-slider-wrapper:hover .hero-slider-prev,
          .hero-slider-wrapper:hover .hero-slider-next {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
