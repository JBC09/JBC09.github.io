import { motion } from "framer-motion";

const wrapperVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

export default function SlideContent({ active, title, subtitle, desc }) {
    return (
        <motion.div
            className="absolute inset-0 flex items-center z-10 px-6 sm:px-10 md:px-20 lg:px-32 justify-center"
            variants={wrapperVariants}
            initial="hidden"
            animate={active ? "show" : "hidden"}
        >
            {/* ▒▒▒ 배경 오버레이 (가독성 강화) ▒▒▒ */}
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] pointer-events-none" />

            {/* 텍스트 묶음 */}
            <motion.div
                className="relative flex flex-col text-left max-w-3xl"
                variants={wrapperVariants}
                style={{
                    transform: `translateX(
                        calc(
                            0% 
                            - (2% * (min(1, (100vw - 640px) / 300))) 
                            - (10% * (min(1, (100vw - 768px) / 600)))
                        )
                    )`,
                }}
            >
                {/* TITLE */}
                <motion.h2
                    variants={textVariants}
                    className="
                        text-white font-extrabold tracking-tight
                        text-3xl sm:text-4xl md:text-6xl
                        mb-4
                    "
                >
                    {title}
                </motion.h2>

                {/* SUBTITLE */}
                <motion.p
                    variants={textVariants}
                    className="
                        text-gray-200/90 font-medium
                        text-sm sm:text-lg md:text-3xl
                        mb-6
                    "
                >
                    {subtitle}
                </motion.p>

                {/* DESCRIPTION */}
                <motion.p
                    variants={textVariants}
                    className="
                        text-gray-200/85
                        text-xs sm:text-sm md:text-lg
                        leading-relaxed max-w-lvw md:text-3xl
                    "
                >
                    {desc}
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
