import React from "react";
import BigCommerce from "../assets/brands/BigCommerce.webp";
import Contentful from "../assets/brands/Contentful.webp";
import DatoCMS from "../assets/brands/DatoCMS.webp";
import Prismic from "../assets/brands/Prismic.webp";
import Sanity from "../assets/brands/Sanity.webp";
import Shopify from "../assets/brands/Shopify.webp";
import Snipcart from "../assets/brands/Snipcart.webp";
import Strapi from "../assets/brands/Strapi.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
const images = [
    Strapi,
    Shopify,
    BigCommerce,
    Contentful,
    Prismic,
    Sanity,
    Snipcart,
    DatoCMS,
];

const Carousel = () => {
    return (
        <div className="relative py-40 px-4">
            <div className="carousel-container">
                <Swiper
                    loop={true}
                    autoplay
                    speed={600}
                    modules={[Autoplay]}
                    grabCursor
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        // when window width is >= 640px
                        540: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 768px
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 75,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 100,
                        },
                        1770: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={image}
                                className="block h-auto w-full max-h-[80px] max-w-[250px]"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="carousel-shadow"></div>
            </div>
        </div>
    );
};

export default Carousel;
