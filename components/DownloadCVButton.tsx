"use client";

import React from "react";

export default function DownloadCVButton() {
    const pdfPath = "/pdf/CV_developer_carlosVasquez_english.pdf"; // Cambia esto por la ruta real de tu archivo PDF dentro del proyecto

    return (
        <a
            href={pdfPath}
            download
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-full w-36 h-8 md:w-48 md:h-10 lg:w-56 lg:h-12 border-2 primary-border-color-text text-lg md:text-xl lg:text-2xl flex items-center justify-center"
        >
            Download CV
        </a>
    );
}
