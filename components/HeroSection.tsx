// components/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => (
    <section className="bg-blue-600 text-white py-20 flex flex-col items-center justify-center text-center h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Seamless Logistics, Anytime, Anywhere</h1>
        <p className="text-lg md:text-2xl mb-6">Connecting clients and couriers for fast, reliable deliveries.</p>
        <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">Get Started</button>
            <button className="bg-gray-100 text-blue-600 px-6 py-2 rounded-lg font-semibold">Become a Courier</button>
        </div>
    </section>
);

export default HeroSection;
