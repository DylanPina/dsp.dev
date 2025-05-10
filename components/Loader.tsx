"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
    children: React.ReactNode;
};

const Loader: React.FC<Props> = ({ children }) => {
    const loadingRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const container = loadingRef.current;
        if (!container) return;

        const q = gsap.utils.selector(container);

        // 1) Hide immediately & set start position
        gsap.set(q(".loading-text"), { opacity: 0, y: 120 });

        // 2) Build timeline
        const tl = gsap.timeline({
            defaults: { duration: 0.8, ease: "power2.out" },
        });
        tl.to(q(".loading-text"), { opacity: 1, y: -10 }, /* at time=0 */ 0)
            .to(q(".white-bg"), { y: "-100%" })
            .to(q(".dark-bg"), { y: "-100%", duration: 0.6 }, "-=0.6");

        return () => {
            tl.kill();
            gsap.set(q(".loading-text, .white-bg, .dark-bg"), { clearProps: "all" });
        };
    }, []);

    return (
        <div ref={loadingRef} aria-hidden="true">
            <div className="white-bg fixed inset-0 bg-[#f0f5fa] dark:bg-[#0e141a] z-[9999] flex justify-center items-center">
                <div className="overflow-hidden">
                    <span
                        className="loading-text inline-block text-bgdark dark:text-bglight text-4xl sm:text-5xl lg:text-7xl tracking-widest"
                        style={{ opacity: 0 }}
                    >
                        {children}
                    </span>
                </div>
            </div>
            <div className="dark-bg fixed inset-0 z-[9998]" />
        </div>
    );
};

export default Loader;
