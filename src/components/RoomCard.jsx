// src/components/RoomCard.jsx
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function RoomCard({ name, desc, img }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
                scale: 1.03,
                rotate: 0.3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            className="
                bg-white rounded-xl overflow-hidden shadow
                transition-all duration-300 flex flex-col
            "
        >
            <div className="relative w-full overflow-hidden">
                <LazyLoadImage
                    src={img}
                    effect="blur"
                    afterLoad={() => setLoaded(true)}
                    className={`
                        w-full h-56 sm:h-64 md:h-72 object-cover 
                        transition-all duration-700
                        ${loaded ? "blur-0 scale-100" : "blur-sm scale-105"}
                    `}
                />
            </div>

            <div className="p-5 flex flex-col gap-2">
                <h3
                    className="
                        text-xl sm:text-2xl font-semibold
                        tracking-wide text-amber-800
                    "
                >
                    {name}
                </h3>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}
