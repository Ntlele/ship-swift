"use client"
import React, { useEffect, useState } from "react";

const steps = [
    {
        title: "Client",
        description: "How to become a client.",
        guide: {
            1: "Sign up by creating a client account with your email or phone number.",
            2: "Fill out your profile with personal details and preferences.",
            3: "Explore available services and place a request for what you need.",
            4: "Track your orders and communicate with service providers directly."
        },
        video: "/assets/client_app.mp4"
    },
    {
        title: "Driver",
        description: "How to become a driver.",
        guide: {
            1: "Register as a driver by signing up on the platform.",
            2: "Upload necessary documents, such as ID and driver’s license.",
            3: "Complete the onboarding process, including a brief training or orientation.",
            4: "Start accepting delivery or service requests in your area.",
            5: "Maintain high ratings by providing timely and quality service."
        },
        video: "/assets/client_app.mp4"
    },
    {
        title: "Admin",
        description: "How to become an admin.",
        guide: {
            1: "Apply for an admin role through the admin portal.",
            2: "Submit proof of identity and credentials for verification.",
            3: "Complete the admin training provided by the platform.",
            4: "Manage user accounts, including approving or dismissing registration requests.",
            5: "Monitor platform activity to ensure compliance with policies."
        },
        video: "/assets/client_app.mp4"
    }
];

const HowItWorks: React.FC = () => {
    useEffect(() => {
        // Ensure the IntersectionObserver is defined correctly
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in-scale");
                    }
                });
            },
            {
                threshold: 0.05, // Trigger when 30% of the element is visible
            }
        );

        // Observe all elements with the 'scroll-animate' class
        const elements = document.querySelectorAll(".scroll-animate");
        elements.forEach((el) => observer.observe(el));

        // Cleanup the observer when the component unmounts
        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <section className="py-16 bg-gray-50 text-center pt-20" id="how-it-works">
            <h1 className="lg:text-6xl text-3xl font-bold mb-10">How It Works</h1>
            <div className="flex flex-col gap-12">
                {steps.map((step, index) => (
                    <div
                        key={step.title}
                        className={`bg-white gap-x-48 p-6 rounded-lg flex flex-col md:flex-row ${
                            step.title === "Driver" ? "md:flex-row-reverse" : "md:flex-row"
                        } items-center gap-8 scroll-animate`}
                    >
                        {/* Video Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center ">
                            <video
                                src={step.video}
                                className="object-cover mb-4 rounded-xl border w-full h-auto"
                                autoPlay
                                loop
                                muted
                            />
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 text-left p-10 flex flex-col items-center gap-8 bg-gray-50 rounded-2xl">
                            <h2 className="text-3xl font-semibold mb-4">{step.title}</h2>
                            {step.guide && (
                                <ol className="pl-6 space-y-10 list-decimal lg:text-xl">
                                    {Object.entries(step.guide).map(([key, value]) => (
                                        <li key={key}>{value}</li>
                                    ))}
                                </ol>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
