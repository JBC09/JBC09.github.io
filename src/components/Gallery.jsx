// src/components/Gallery.jsx
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Gallery() {
    const [selectedBg, setSelectedBg] = useState(null);

    const rooms = [
        {
            name: "편백숲 룸",
            desc: "편백나무 향기와 자연 채광이 어우러진 아늑한 감성 공간입니다.",
            img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=60",
        },
        {
            name: "소나무 하우스",
            desc: "우드톤 인테리어와 포근한 온기가 느껴지는 내추럴 룸입니다.",
            img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=60",
        },
        {
            name: "대나무정원 룸",
            desc: "대나무 정원을 바라보며 힐링할 수 있는 고요한 객실입니다.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=60",
        },
        {
            name: "자작나무 스위트",
            desc: "밝고 따뜻한 분위기의 우드톤 객실로 가족 여행에 적합합니다.",
            img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=60",
        },
    ];

    return (
        <section
            id="rooms"
            className="py-10 sm:py-20 max-w-6xl mx-auto px-4 rounded-xl transition-all duration-500"
            style={{
                backgroundImage: selectedBg ? `url(${selectedBg})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: selectedBg ? "overlay" : "normal",
                backgroundColor: selectedBg ? "rgba(255,255,255,0.86)" : "transparent",
            }}
        >
            <h2
                className="
                text-2xl sm:text-3xl md:text-4xl
                font-semibold mb-10 text-center tracking-tight text-gray-900
            "
            >
                객실 안내
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {rooms.map((room, i) => (
                    <div
                        key={i}
                        className="
                            bg-white rounded-xl overflow-hidden shadow
                            border border-gray-100 cursor-pointer
                        "
                        onClick={() => setSelectedBg(room.img)}
                    >
                        {/* 이미지 영역을 확실하게 꽉 채우도록 구조 변경 */}
                        <div className="w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                            <LazyLoadImage
                                src={room.img}
                                effect="blur"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-5 flex flex-col gap-2">
                            <h3
                                className="
                                    text-xl sm:text-2xl font-semibold
                                    tracking-wide text-amber-800
                                "
                            >
                                {room.name}
                            </h3>

                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {room.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
