import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function InfoSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        {
            title: "일회용품 줄이기 안내",
            items: [
                "2024년 3월 29일부터 일부 숙소에서는 일회용 어메니티 무료 제공이 중단됩니다.",
                "필요 시 별도 구매 및 문의 바랍니다.",
            ],
        },
        {
            title: "기본 정보",
            items: [
                "입실 15:00 / 퇴실 11:00",
                "22시 이후 입실 시 사전 문의 필수",
                "무료 Wi-Fi 제공",
                "전 객실 금연",
                "주차 가능",
            ],
        },
        {
            title: "인원 추가 안내",
            items: [
                "추가요금 1인 10,000원",
                "영유아 포함, 최대 인원 초과 불가",
                "침구 추가(무료) / 현장 결제",
            ],
        },
        {
            title: "바비큐 이용 안내",
            items: [
                "숯+그릴 20,000원 / 숯 추가 5,000원",
                "이용시간 15:00~23:00",
                "사전 예약 필수",
                "개별 바비큐 가능",
            ],
        },
        {
            title: "취소 및 환불규정",
            items: [
                "숙박 6일 전 : 100% 환불",
                "1일 전 : 30% 환불",
                "당일/No-show : 환불 불가",
            ],
        },
        {
            title: "이용 규칙",
            items: [
                "최대 인원 초과 시 입실 불가",
                "객실 내 튀김·육류 조리 불가",
                "애완동물 출입 불가",
                "미성년자 보호자 동반 필수",
            ],
        },
    ];

    return (
        <section
            id="info"
            className="
        max-w-6xl mx-auto px-3
        py-14         /* 기본: 모바일은 작게 */
        sm:py-20      /* 데스크탑 ↑ 가장 넓게 */
    "
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-center tracking-tight text-gray-900">
                숙소 이용 정보 (필독)
            </h2>

            {/* CUSTOM NAVIGATION */}
            <div className="relative">
                <button className="swiper-button-prev text-black"></button>
                <button className="swiper-button-next text-black"></button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.3}
                    centeredSlides={true}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        el: ".info-pagination",
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 1.3 },
                        1024: { slidesPerView: 1.5 },
                    }}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                    }
                    className="pb-20"
                >
                    {sections.map((section, idx) => {
                        const active = activeIndex === idx;

                        return (
                            <SwiperSlide key={idx} className="flex">

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: active ? 1 : 0.5,
                                        y: active ? 0 : 4,
                                        scale: active ? 1 : 0.97,
                                    }}
                                    transition={{ duration: 0.4 }}
                                    className="
                                        rounded-2xl bg-white border border-gray-100
                                        shadow-sm p-6 md:p-8
                                        flex flex-col gap-4
                                        transition-all duration-300 h-[240px] md:h-[270px]
                                    "
                                >
                                    <h3 className="
                                        text-lg sm:text-xl md:text-2xl
                                        font-semibold text-gray-900 tracking-tight
                                    ">
                                        {section.title}
                                    </h3>

                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="
                                                    text-gray-700 text-sm sm:text-base
                                                    leading-relaxed flex gap-2
                                                "
                                            >
                                                <span className="mt-[6px] w-1 h-1 rounded-full bg-gray-400"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                <div className="info-pagination flex justify-center mt-4"></div>
            </div>
        </section>
    );
}
