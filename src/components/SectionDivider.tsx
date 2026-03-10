type DividerProps = {
    /** The fill color of the SVG wave */
    fillColor?: string;
    /** Whether the wave should overlap the previous section's bottom, or the next section's top */
    overlap?: "previous" | "next";
    /** Which wave variant to render */
    variant?: "wave1" | "wave2" | "wave3";
};

export default function SectionDivider({
    fillColor = "#f8fafb",
    overlap = "previous",
    variant = "wave1",
}: DividerProps) {
    const waves: Record<string, React.ReactNode> = {
        wave1: (
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full block">
                <path
                    d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
                    fill={fillColor}
                />
            </svg>
        ),
        wave2: (
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full block">
                <path
                    d="M0,40 C240,100 480,0 720,50 C960,100 1200,10 1440,60 L1440,100 L0,100 Z"
                    fill={fillColor}
                />
            </svg>
        ),
        wave3: (
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full block">
                <path
                    d="M0,30 C180,80 360,0 540,40 C720,80 900,10 1080,50 C1260,90 1380,30 1440,50 L1440,80 L0,80 Z"
                    fill={fillColor}
                />
            </svg>
        ),
    };

    // "previous" pulls this divider UP over the previous section.
    // "next" pushes the next section UP underneath it, and flips the wave vertically.
    const overlapClasses = overlap === "previous"
        ? "-mt-[60px] md:-mt-[80px] lg:-mt-[100px]"
        : "-mb-[60px] md:-mb-[80px] lg:-mb-[100px] scale-y-[-1]";

    return (
        <div
            className={`relative w-full h-[60px] md:h-[80px] lg:h-[100px] z-20 pointer-events-none ${overlapClasses}`}
            aria-hidden="true"
        >
            {waves[variant]}
        </div>
    );
}
