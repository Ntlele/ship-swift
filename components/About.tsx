"use client"
import React, {useEffect, useState} from "react";

const teamMembers = [
    { name: "Kamohelo Koali 8754", role: "Project Manager | Back-end Developer", github: "https://github.com/KamoheloKoali", picture: "https://avatars.githubusercontent.com/u/152155388?v=4" },
    { name: "Khiba Koenane 8804", role: "Front-end Developer | Back-end Developer", github: "https://github.com/khiba-k", picture: "https://avatars.githubusercontent.com/u/159003452?v=4" },
    { name: "Langa Hoohlo 8854", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Langahoohlo", picture: "https://avatars.githubusercontent.com/u/112098278?v=4" },
    { name: "Mthawelanga Matross 8873", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Matross-20", picture: "https://avatars.githubusercontent.com/u/156658865?v=4" },
    { name: "Lebohang Mabataung Moletsane 9110", role: "Researcher | Back-end", github: "https://github.com/Lebohang1983", picture: "https://avatars.githubusercontent.com/u/159106208?s=100&v=4" },
    { name: "Pheello Ntlele 8906", role: "Front-end Developer | Back-end Developer", github: "https://github.com/Ntlele", picture: "https://avatars.githubusercontent.com/u/142914150?v=4" },
];

const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean[]>(new Array(teamMembers.length).fill(false));

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
    return (
        <section id="About" className="py-16 bg-gray-50 text-center p-10">
            <h1 className="text-4xl font-bold mb-10">About</h1>
            <p className="text-xl text-gray-600 mb-12">
                Meet the talented individuals who bring this project to life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`team-card bg-white shadow-sm border rounded-lg p-6 flex flex-col items-center transition-transform duration-500 ${
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
                    </div>
                ))}
            </div>
        </section>
    )
};

export default About;
