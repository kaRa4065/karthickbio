"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ images }) {
  return (
    <div className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
      >
        {images?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center w-full border border-[#E4E4E4] rounded-[24px] pb-6 px-[25px] py-[35px] h-[300px] mb-16"
              key={index}
            >
              <div className="flex">
                {image.img.map((item, i) => (
                  <img
                    key={i}
                    src={item?.path}
                    alt={`Slide ${index + 1}`}
                    className="w-[150px] h-[44px] mb-5"
                  />
                ))}
              </div>
              <p className="text-[#0F1125] font-medium leading-[28px] text-[16px] text-center">
                {image?.experience}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
