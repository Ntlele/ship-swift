// components/Features.tsx

import React from 'react';
import { MapPin, Fingerprint, ShieldCheck } from "lucide-react";

const features = [
    { title: "Parcel Tracking", description: "Monitor deliveries from start to finish.", icon: <MapPin className="w-6 h-6 text-blue-600 mb-4" /> },
    { title: "Secure Deliveries", description: "Reliable service with verified couriers.", icon: <ShieldCheck className="w-6 h-6 text-blue-600 mb-4" /> },
    { title: "Identity Verification", description: "Ensuring a safe experience for everyone.", icon: <Fingerprint className="w-6 h-6 text-blue-600 mb-4" /> },
];

const Features: React.FC = () => (
    <section className="py-16 bg-slate-50 text-center px-6" id="Features">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                <div key={feature.title} className="bg-white p-6 shadow-md rounded-lg">
                    <div className="flex justify-center items-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
