import {Map, MapMarker, CustomOverlayMap} from "react-kakao-maps-sdk";
import {useEffect, useState, useRef} from "react";

export function Location() {
    const [isLoaded, setIsLoaded] = useState(false);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const lat = 35.7078436754208;
    const lng = 128.987869478893;

    // 카카오맵 로드
    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => setIsLoaded(true));
        }
    }, []);

    // 스크롤 애니메이션
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            });
        }, {threshold: 0.2});

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const copyAddress = () => {
        navigator.clipboard.writeText("경북 청도군 운문면 오진리 318");
        alert("주소가 복사되었습니다.")
    };


    return (<section
        id="location"
        ref={sectionRef}
        className={`
            py-5         /* 기본: 모바일은 작게 */
        sm:py-20      /* 데스크탑 ↑ 가장 넓게 */
         max-w-6xl mx-auto px-4 transition-all duration-1000
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
    >
        <h2 className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    font-semibold mb-10 text-center tracking-tight text-gray-900
">
            오시는 길
        </h2>

        {/* 지도 */}
        <div
            className={`
                    w-full h-[420px] rounded-xl overflow-hidden border border-gray-200 shadow-sm
                    transition-all duration-700
                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
        >
            {isLoaded && (<Map
                center={{lat: lat, lng: lng}}
                style={{width: "100%", height: "100%"}}
                level={5}
            >
                {/* 미니멀 커스텀 마커 */}
                <CustomOverlayMap position={{lat, lng}} yAnchor={1}>
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-black rounded-2xl shadow-sm"/>
                        <div
                            className="mt-1 px-3 py-1 bg-white border border-gray-300 text-xs rounded-full shadow-sm text-gray-800 whitespace-nowrap">
                            청도 생태마을 펜션
                        </div>
                    </div>
                </CustomOverlayMap>
            </Map>)}
        </div>

        {/* 설명 패널 */}
        <div
            className={`
        mt-10 p-8 rounded-xl bg-white border border-gray-200 shadow-sm
        transition-all duration-1000
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    `}
        >
            {/* 주소 */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                위치 안내
            </h3>

            <div className="flex items-start gap-3 mb-10">
                {/* 심플 아이콘 */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-700 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 21s-6-5.686-6-10a6 6 0 0 1 12 0c0 4.314-6 10-6 10z"/>
                    <circle cx="12" cy="11" r="2"/>
                </svg>

                <div>
                    <p className="text-gray-900 font-medium">
                        경북 청도군 운문면 오진리 318
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                        내비게이션에서 “청도 생태마을 펜션” 검색 가능합니다.
                    </p>

                    <button  className="
            text-sm text-gray-600 border border-gray-300
            px-3 py-1 rounded-lg hover:bg-yellow-400 hover:text-white
            transition-all duration-100 mt-2 mr-2
        "
                             onClick={()=>{
                                 window.open("https://kko.to/CVkOCZx8kp")
                             }}>
                        카카오 맵
                    </button>

                    <button
                        onClick={() => copyAddress()}
                        className="
            text-sm text-gray-600 border border-gray-300
            px-3 py-1 rounded-lg hover:bg-gray-100
            transition-all duration-100 mt-2
        "
                    >
                        주소 복사
                    </button>
                </div>


            </div>

            {/* 주변 정보 카드 */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 tracking-tight">
                주변 정보
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
                {/* 카드 1 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a8 8 0 1 1-1.9-9.4"/>
                        </svg>
                        <h4 className="text-gray-900 font-medium">운문사</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        깊은 산 속에 위치한 고즈넉한 사찰로, 조용한 산책과 힐링에 좋습니다. (차량 13분)
                    </p>
                </div>

                {/* 카드 2 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                    <div className="flex items-center gap-3 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a8 8 0 1 1-1.9-9.4"/>
                        </svg>
                        <h4 className="text-gray-900 font-medium">운문댐 하류보 휴게소</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        물가를 따라 산책하기 좋은 여유로운 풍경이 매력적입니다. (차량 15분)
                    </p>
                </div>

                {/* 카드 3 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a8 8 0 1 1-1.9-9.4"/>
                        </svg>
                        <h4 className="text-gray-900 font-medium">망향정</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        주변 경관이 탁 트여 드라이브 코스로도 유명한 전망 명소입니다. (차량 15분)
                    </p>
                </div>
            </div>
        </div>

    </section>);
}
