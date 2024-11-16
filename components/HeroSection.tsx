// components/HeroSection.tsx

import React from 'react';
import Link from "next/link";
import {ArrowRight} from "lucide-react"

const HeroSection: React.FC = () => (
    <section id={"Hero"} className="relative text-white py-20 flex flex-col items-center justify-center text-center h-screen"
             style={{
                 backgroundImage: 'url("/assets/delivery-2.jpeg")',
                 backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'center center',
                 backgroundSize: 'cover',
             }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 z-10">Seamless Logistics, Anytime, Anywhere</h1>
        <p className="text-lg md:text-2xl mb-6 z-10">Connecting clients and couriers for fast, reliable deliveries.</p>
        <div className="flex z-10">
            <Link href="https://ship-swift-self.vercel.app" target="_blank">
                <button className="bg-white/70 text-blue-600 text-2xl px-6 py-2 rounded-lg font-semibold flex flex-row items-center gap-3">Check the Site <ArrowRight/> </button>
            </Link>
        </div>
    </section>
);

export default HeroSection;
