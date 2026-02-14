"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ images }) {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="skills-swiper"
      >
        {images?.images?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full rounded-2xl border border-primary-border bg-primary-surface p-6 sm:p-8 flex flex-col items-center text-center min-h-[280px]">
              <div className="flex flex-wrap justify-center gap-4 mb-5">
                {item.img.map((imgItem, i) => (
                  <Image
                    key={i}
                    src={imgItem?.path}
                    alt=""
                    className="h-10 w-auto object-contain"
                    width={120}
                    height={40}
                    quality={100}
                  />
                ))}
              </div>
              <p className="text-primary-muted text-sm sm:text-base leading-relaxed flex-1">
                {item?.experience}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
