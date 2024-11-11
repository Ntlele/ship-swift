// components/HowItWorks.tsx

import React from 'react';

const steps = [
    { title: "Book", description: "Schedule your delivery effortlessly." },
    { title: "Track", description: "Monitor your package in real-time." },
    { title: "Receive", description: "Get your delivery on time, every time." }
];

const HowItWorks: React.FC = () => (
    <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
                <div key={step.title} className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p>{step.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default HowItWorks;
