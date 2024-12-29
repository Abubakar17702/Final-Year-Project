import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"; 
import "swiper/css/effect-cube"; 
import "swiper/css/effect-flip"; 

const VirtualTour = () => {
  const images = [
    "https://i.pinimg.com/564x/f3/1d/98/f31d9874feaf765614c412e489115b11.jpg",
    "https://i.pinimg.com/564x/f3/1d/98/f31d9874feaf765614c412e489115b11.jpg",
    "https://i.pinimg.com/564x/f3/1d/98/f31d9874feaf765614c412e489115b11.jpg",
    "https://i.pinimg.com/564x/f3/1d/98/f31d9874feaf765614c412e489115b11.jpg",
    "https://i.pinimg.com/564x/f3/1d/98/f31d9874feaf765614c412e489115b11.jpg",
  ];

  return (
    <div
      className="mt-10 mb-10 text-black p-10"
      style={{
        width: "100%",
        maxWidth: "2000px",
        margin: "auto",
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ width: "100%", height: "500px" }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Restaurant view ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%", // Set height to fill slide
                  objectFit: "cover", // Maintain image aspect ratio
                  borderRadius: "8px",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VirtualTour;
