import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function FloatingNav() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: "홈", href: "#home" },
        { name: "펜션 소개", href: "#about" },
        { name: "객실 안내", href: "#rooms" },
        { name: "오시는 길", href: "#location" },
        { name: "숙소 이용 정보", href: "#info" },
    ];

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setOpen(!open)}
                className="
                    fixed bottom-6 right-6 z-[100]
                    w-15 h-15 rounded-full
                    bg-black
                     text-white
                    flex items-center justify-center
                    shadow-xl
                "
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200 }}
            >
                {open ? <FaTimes size={20} /> : <FaBars size={22} />}
            </motion.button>

            {/* Floating Menu Items */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="
                            fixed bottom-24 right-6 z-[99]
                            flex flex-col gap-3
                        "
                    >
                        {menuItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: index * 0.05 },
                                }}
                                exit={{ opacity: 0, x: 20 }}
                                className="
                                    px-4 py-2 rounded-lg bg-white shadow-md
                                    border border-gray-200
                                    text-sm text-gray-900
                                    hover:bg-gray-100 hover:shadow-lg
                                    transition
                                "
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
