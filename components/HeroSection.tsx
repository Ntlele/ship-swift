"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 300); // Slight delay for cinematic effect
    }, []);

    return (
        <section
            id="Hero"
            className="relative text-white py-20 flex flex-col items-center justify-center text-center h-screen overflow-hidden"
            style={{
                backgroundImage: 'url("/assets/delivery-2.jpeg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}
        >
            {/* Background Overlay */}
            <div
                className={`absolute inset-0 bg-black ${
                    isLoaded ? "opacity-50" : "opacity-0"
                } transition-opacity duration-500 ease-in-out`}
            ></div>

            {/* Hero Title */}
            <h1
                className={`z-10 text-6xl mb-12 lg:text-9xl text-blue-500 bg-white/5 p-5 px-6 lg:px-20 rounded-2xl font-bold transform transition-all duration-1000 ease-in-out ${
                    isLoaded
                        ? "opacity-100 translate-y-0 rotate-0 scale-100"
                        : "opacity-0 translate-y-16 rotate-6 scale-95"
                }`}
            >
                Ship-Swift
            </h1>

            {/* Subtitle */}
            <h2
                className={`text-4xl md:text-6xl font-bold mb-4 z-10 transform transition-all duration-[1200ms] delay-200 ease-in-out ${
                    isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16"
                }`}
            >
                Seamless Logistics, Anytime, Anywhere
            </h2>

            {/* Description */}
            <p
                className={`text-lg md:text-2xl mb-6 z-10 transform transition-all duration-[1400ms] delay-400 ease-in-out ${
                    isLoaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                }`}
            >
                Connecting clients and couriers for fast, reliable deliveries.
            </p>

            {/* Call-to-Action Button */}
            <div className="z-10">
                <Link href="https://ship-swift-self.vercel.app" target="_blank">
                    <button
                        className={`bg-gradient-to-r mt-10 from-black/70 to-blue-300/70 text-slate-200 lg:text-2xl text-lg px-6 py-2 rounded-lg font-semibold flex items-center gap-3 transform transition-all duration-500 ease-in-out ${
                            isLoaded
                                ? "hover:scale-110 shadow-[0_0_20px_2px_rgba(255,255,255,.7)]"
                                : ""
                        }`}
                    >
                        Check the Site <ArrowRight />
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
