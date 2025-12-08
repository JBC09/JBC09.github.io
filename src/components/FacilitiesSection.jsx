import { motion } from "framer-motion";

export default function FacilitiesSection() {
    const facilities = [
        { name: "무선인터넷", icon: WifiIcon },
        { name: "바베큐", icon: GrillIcon },
        { name: "객실 내 취사", icon: CookIcon },
        { name: "전기밥솥", icon: RiceCookerIcon },
        { name: "TV", icon: TvIcon },
        { name: "욕실용품", icon: BathIcon },
        { name: "무료주차", icon: ParkingIcon },
        { name: "에어컨", icon: AirconIcon },
        { name: "냉장고", icon: FridgeIcon },
        { name: "샤워실", icon: ShowerIcon },
        { name: "금연", icon: NoSmokingIcon },
        { name: "드라이기", icon: DryerIcon },
        { name: "주차장", icon: ParkingLotIcon },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4       py-5         /* 기본: 모바일은 작게 */
        sm:py-20      /* 데스크탑 ↑ 가장 넓게 */">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center tracking-tight text-gray-900">
                서비스 및 부대시설
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {facilities.map(({ name, icon: Icon }, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.03 }}

                        whileHover={{
                            scale: 1.04,
                            borderColor: "rgb(229,231,235)", // gray-300
                        }}

                        className="
                            p-2 rounded-xl border border-gray-200 bg-white
                            shadow-sm transition-all duration-300 cursor-pointer
                            flex items-center gap-4
                        "
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50">
                            <Icon className="w-6 h-6 text-gray-700" />
                        </div>

                        <span className="text-gray-800 text-sm font-medium">
                            {name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}


// 아래는 아이콘들임

/* Wifi */
function WifiIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12a8.5 8.5 0 0 1 14 0" />
            <path d="M8.5 15.5a4.5 4.5 0 0 1 7 0" />
            <circle cx="12" cy="19" r="1" />
        </svg>
    );
}

/* 바베큐 */
function GrillIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="7" r="5" />
            <path d="M5 21h14M12 12v9" />
        </svg>
    );
}

/* 취사 */
function CookIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="6" width="18" height="13" rx="2" />
            <path d="M8 6V4h8v2" />
        </svg>
    );
}

/* 전기밥솥 */
function RiceCookerIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="12" rx="2" />
            <path d="M9 7V5h6v2" />
        </svg>
    );
}

/* TV */
function TvIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="11" rx="2" />
            <path d="M8 21h8" />
        </svg>
    );
}

/* 욕실용품 */
function BathIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14" />
            <path d="M3 12h2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5h2" />
        </svg>
    );
}

/* 무료주차 */
function ParkingIcon({ className }) {
    return (
        <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 4h6a4 4 0 1 1 0 8H6z" />
            <path d="M6 12v8" />
        </svg>
    );
}

/* 주차장 */
function ParkingLotIcon({ className }) {
    return (
        <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="M8 9h4a2 2 0 0 1 0 4H8z" />
        </svg>
    );
}

/* 에어컨 */
function AirconIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="6" width="18" height="6" rx="2" />
            <path d="M6 17l2 2l2-2" />
            <path d="M12 17l2 2l2-2" />
        </svg>
    );
}

/* 냉장고 */
function FridgeIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="7" y="3" width="10" height="18" rx="2" />
            <path d="M7 10h10" />
        </svg>
    );
}

/* 샤워실 */
function ShowerIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <path d="M8 11h8" />
        </svg>
    );
}

/* 금연 */
function NoSmokingIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M15 9h1a2 2 0 0 1 0 4h-1" />
            <path d="M7 13h5" />
            <path d="M6 6l12 12" />
        </svg>
    );
}

/* 드라이기 */
function DryerIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="14" cy="12" r="3" />
            <path d="M2 12h5" />
            <path d="M16.5 9.5l2-2" />
        </svg>
    );
}

