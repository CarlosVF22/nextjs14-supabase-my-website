"use client";

import Image from "next/image";
import React, { useState } from "react";

// Supongamos que tienes tres imágenes diferentes para cada proyecto
import ProjectIcon from "../app/icons/project-icon-512.png";
import JobsExperienceIcon from "../app/icons/jobs-experience-icon-512.png";
import AboutMeIcon from "../app/icons/about-me-icon-512.png";

export default function NavBar() {
    // Estado para los tooltips de cada elemento con su imagen, mensaje y visibilidad
    const [tooltips, setTooltips] = useState([
        { isVisible: false, message: "My Projects", icon: ProjectIcon },
        {
            isVisible: false,
            message: "Jobs experience",
            icon: JobsExperienceIcon,
        },
        { isVisible: false, message: "About me", icon: AboutMeIcon },
    ]);

    // Funciones para mostrar y ocultar tooltips
    const showTooltip = (index: number) => {
        setTooltips(
            tooltips.map((tooltip, i) => ({
                ...tooltip,
                isVisible: i === index,
            }))
        );
    };

    const hideTooltip = (index: number) => {
        setTooltips(
            tooltips.map((tooltip, i) => ({
                ...tooltip,
                isVisible: i === index ? false : tooltip.isVisible,
            }))
        );
    };

    return (
        <nav className="nav-bar w-2/3 md:w-1/5 rounded-full flex justify-center">
            {tooltips.map((tooltip, index) => (
                <div
                    key={index}
                    className="w-12 p-2 md:p-2 md:w-14 transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300 relative"
                    onMouseEnter={() => showTooltip(index)}
                    onMouseLeave={() => hideTooltip(index)}
                >
                    <Image
                        src={tooltip.icon}
                        alt={`Project ${index + 1}`}
                        objectFit="cover"
                    />
                    {tooltip.isVisible && (
                        <div className="absolute bottom-full mb-2 px-3 py-1 bg-black text-white text-xs rounded-md">
                            {tooltip.message}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}
