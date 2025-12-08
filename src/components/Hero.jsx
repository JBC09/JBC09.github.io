import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import SlideContent from "./SlideContent";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: "./images/hero1.webp",
            title: "자연과 휴식이 함께하는 공간",
            subtitle: "청도 생태마을 펜션에서의 특별한 하루",
            desc: "푸른 산과 맑은 공기 속에서 편안한 쉼을 즐길 수 있는 자연 속 힐링 스테이.",
        },
        {
            image: "./images/hero2.webp",
            title: "머무는 순간이 편안해지는 곳",
            subtitle: "프라이빗한 휴식, 온전히 나에게 집중하는 시간",
            desc: "답답했던 일상을 벗어나 조용한 자연 속에서 나만의 공간을 즐겨보세요.",
        },
        {
            image: "./images/hero3.webp",
            title: "여행의 순간이 특별해지는 곳",
            subtitle: "청도의 자연, 문화를 담은 힐링 스테이",
            desc: "산책·관광·휴식을 모두 누릴 수 있는 최적의 위치.",
        },
    ];

    return (
        <section
            id="home"
            className="
                w-full
                h-[70vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh]
                relative overflow-hidden
            "
        >
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3500 }}
                loop={true}
                speed={2000}
                className="h-full w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="
                                h-full w-full bg-cover bg-center bg-no-repeat
                                transition-transform duration-[6000ms]
                                scale-105 animate-slowZoom   /* A 옵션 적용 */
                            "
                            style={{
                                backgroundImage: `url(${slide.image})`,
                            }}
                        >
                            {/* Improved Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/15"></div>

                            {/* Left/Right subtle vignette */}
                            <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black/15 to-transparent"></div>
                            <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black/15 to-transparent"></div>

                            {/* Updated Slide Text */}
                            <SlideContent
                                active={activeIndex === idx}
                                title={slide.title}
                                subtitle={slide.subtitle}
                                desc={slide.desc}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
