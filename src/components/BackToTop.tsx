"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <m.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-[0_4px_20px_rgba(10,126,154,0.4)] hover:bg-primary-700 hover:shadow-[0_8px_30px_rgba(10,126,154,0.5)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                </m.button>
            )}
        </AnimatePresence>
    );
}
