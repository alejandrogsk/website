import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import { useLoaderData } from "@remix-run/react";
import { loader } from "~/routes/_index";

const Carousel = () => {
    const { results } = useLoaderData<typeof loader>();
    const { carouselCollection } = results.home
    return (
        <div className="relative py-6 md:py-12 lg:py-20  px-4">
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
                            spaceBetween: 15,
                        },
                        // when window width is >= 640px
                        540: {
                            slidesPerView: 3,
                            spaceBetween: 35
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
                    {carouselCollection.items.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img
                                src={image.url}
                                width={80} height={250}
                                className="block h-auto w-full max-h-[80px] max-w-[250px]"
                                alt={image.description??`Image number ${i}`}
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
