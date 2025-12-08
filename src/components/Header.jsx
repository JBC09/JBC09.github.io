import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "홈", href: "#home" },
        { name: "펜션 소개", href: "#about" },
        { name: "객실 안내", href: "#rooms" },
        { name: "오시는 길", href: "#location" },
        { name: "숙소 이용 정보", href: "#info" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

                {/* 로고 (심플, 모노톤) */}
                <div className="font-semibold text-lg tracking-tight text-gray-900">
                    청도 생태마을 펜션
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 text-gray-700 text-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="
                                relative pb-1
                                hover:text-black transition
                                after:content-['']
                                after:absolute after:left-0 after:bottom-0
                                after:w-full after:h-[1px]
                                after:bg-gray-800
                                after:scale-x-0
                                hover:after:scale-x-100
                                after:transition-transform
                                after:duration-200
                                after:origin-left
                            "
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setOpen(!open)}
                >
                    <FaBars size={20} />
                </button>
            </div>

            {/* Mobile Menu */}
            <nav
                className={`
                    md:hidden border-t border-gray-200 bg-white overflow-hidden
                    transition-all duration-300
                    ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="
                            block py-3 px-5 text-gray-700 text-sm border-b border-gray-100
                            hover:text-black transition
                        "
                        onClick={() => setOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}
