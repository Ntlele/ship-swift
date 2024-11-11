// components/Features.tsx

import React from 'react';

const features = [
    { title: "Real-Time Tracking", description: "Monitor deliveries from start to finish." },
    { title: "Secure Deliveries", description: "Reliable service with verified couriers." },
    { title: "Identity Verification", description: "Ensuring a safe experience for everyone." }
];

const Features: React.FC = () => (
    <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
