"use client"
import React, {useEffect, useState, useRef} from "react";
import {Typed} from "react-typed";
import { AspectRatio } from "@/components/ui/aspect-ratio"

const teamMembers = [
    { name: "Kamohelo Koali 8754", role: "Project Manager | Back-end Developer", github: "https://github.com/KamoheloKoali", linkedin: "https://ls.linkedin.com/in/kamohelo-koali-9b90542b4", picture: "https://avatars.githubusercontent.com/u/152155388?v=4" },
    { name: "Khiba Koenane 8804", role: "Front-end Developer | Back-end Developer", github: "https://github.com/khiba-k", linkedin: "https://ls.linkedin.com/in/khiba-koenane?trk=public_post_feed-actor-image", picture: "https://avatars.githubusercontent.com/u/159003452?v=4" },
    { name: "Langa Hoohlo 8854", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Langahoohlo", linkedin: "https://za.linkedin.com/in/langa-hoohlo-404608229", picture: "https://avatars.githubusercontent.com/u/112098278?v=4" },
    { name: "Mthawelanga Matross 8873", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Matross-20", linkedin: "https://ls.linkedin.com/in/mthawelanga-matross-a961412b4", picture: "https://avatars.githubusercontent.com/u/156658865?v=4" },
    { name: "Lebohang Mabataung Moletsane 9110", role: "Researcher | Back-end", github: "https://github.com/Lebohang1983", linkedin: "https://ls.linkedin.com/in/lebohang-moletsane-445ab7328?trk=people-guest_people_search-card", picture: "https://avatars.githubusercontent.com/u/159106208?s=100&v=4" },
    { name: "Pheello Ntlele 8906", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Ntlele", linkedin: "https://ls.linkedin.com/in/david-ntlele-32a0372aa?trk=people_directory", picture: "https://avatars.githubusercontent.com/u/142914150?v=4" },
];

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean[]>(new Array(teamMembers.length).fill(false));
    const [startTyping, setStartTyping] = useState(false);
    const paragraphRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const newIsVisible = [...isVisible];
        document.querySelectorAll('.team-card').forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                newIsVisible[index] = true;
            }
        });
        setIsVisible(newIsVisible);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check if elements are in view

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible]);


    const typedRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {

        const options = {
            strings: [
                "We were inspired to develop a logistics web application for our community because we noticed a gap in how courier services were being utilized.",
                "The drivers were already here, working hard to make ends meet, but they lacked a proper platform to connect with clients and streamline their jobs.",
                "At the same time, clients seemed to struggle with existing courier applications, which were either too complex, unreliable, or poorly suited to our local needs.",
                "We realized we could create something better—a platform tailored for Basotho communities, bridging the gap between clients and couriers.",
                "This project is about giving both sides the tools they need to thrive while strengthening our local economy.",
            ],
            typeSpeed: 40,
            backSpeed: 20,
            backDelay: 3000,
            loop: true,
            showCursor: true,
            cursorChar: "_",
        };

        const typed = new Typed(typedRef.current, options);

        // Cleanup on unmount
        return () => {
            typed.destroy();
        };
    }, []);



    return (
        <section id="About" className="py-16 bg-slate-200 text-center p-10">
            <h1 className="text-4xl font-bold mb-10">About</h1>

            <div className="text-left font-mono text-sm md:text-2xl text-green-500 h-52 mb-6 bg-black p-6 rounded-sm">
                <span ref={typedRef}></span>
            </div>

            <p className="text-2xl text-black font-bold mb-12">
                Meet the team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`team-card bg-white shadow-sm border-2 rounded-lg p-6 flex flex-col items-center transition-transform duration-500 ${
                            isVisible[index] ? "transform scale-105 opacity-100" : "transform opacity-0 translate-y-10"
                        }`}
                    >
                        <div className="w-32 h-32 bg-gray-200 rounded-full mb-4">
                            <img
                                src={member.picture}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4"
                            />
                        </div>
                        {/* Placeholder for profile picture */}
                        <h2 className="text-xl font-semibold">{member.name}</h2>
                        <p className="text-gray-500 mb-4">{member.role}</p>
                        <div className=" flex flex-row items-center gap-8">
                            <button
                                className="bg-black px-5 py-3 rounded-lg hover:shadow-xl hover:bg-slate-400  duration-200 ease-in-out">
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold "
                                >
                                    GitHub
                                </a>
                            </button>
                            <button
                                className="bg-blue-500 px-5 py-3 rounded-lg hover:shadow-xl hover:bg-slate-400  duration-200 ease-in-out">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold "
                                >
                                    Linkedin
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white p-3 my-20 rounded-lg">
            <button
                className="bg-black px-5 py-3 rounded-lg hover:shadow-xl hover:bg-slate-400  duration-200 ease-in-out">
                <a
                    href="https://github.com/KamoheloKoali/ship-swift.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold "
                >
                    The project git repository
                </a>
            </button>
            </div>
        </section>
    )
};

export default About;
