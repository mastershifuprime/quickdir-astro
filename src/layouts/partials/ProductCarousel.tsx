"use client";

import { useRef } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel = ({ products }: { products: any[] }) => {
  const swiperRef = useRef(null) as any;

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="section lg:pt-12 lg:pb-20">
      <div className="container">
        <div className="relative group/item">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            loop={true}
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
          >
            {products.map((listing) => (
              <SwiperSlide key={listing.slug} className="max-w-[300px]">
                <div className="border-1 border-border rounded-2xl flex flex-col justify-center items-center xl:p-8 p-4 text-center h-full relative">
                  <figure className="border border-border rounded-lg p-2">
                    <img
                      src={listing.frontmatter.logo}
                      width={38}
                      height={38}
                      className="rounded-full"
                      alt={listing.frontmatter.title}
                    />
                  </figure>
                  <h3 className="text-base mt-4 mb-2">
                    {listing.frontmatter.title}
                  </h3>
                  <p className="line-clamp-2">
                    {listing.frontmatter.description}
                  </p>
                  <a
                    aria-label="link"
                    href={`/products/${listing.slug}`}
                    className="stretch-link"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="testimonial-button-next hidden md:group-hover/item:grid cursor-pointer z-10 absolute bottom-1/2 translate-y-1/2 -left-5 bg-light rounded-full size-10 p-2 place-items-center transition-all duration-500 border border-transparent hover:border-border"
            aria-label="slider next"
            onClick={handlePrev}
          >
            <svg
              className="text-text-dark"
              width="10"
              height="16"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.52762 9.00006L11.4004 2L9.43675 0L0.60039 9.00006L9.43675 18L11.4004 16L4.52762 9.00006Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>

          <button
            className="testimonial-button-prev group-hover:block hidden md:group-hover/item:grid cursor-pointer z-10 absolute bottom-1/2 translate-y-1/2 -right-5 rotate-180 bg-light rounded-full size-10 p-2 place-items-center transition-all duration-500 border border-transparent hover:border-border"
            aria-label="slider previous"
            onClick={handleNext}
          >
            <svg
              className="text-text-dark"
              width="7"
              height="14"
              viewBox="0 0 7 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L1.40683 5.93939C0.864388 6.52273 0.864388 7.47727 1.40683 8.06061L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
