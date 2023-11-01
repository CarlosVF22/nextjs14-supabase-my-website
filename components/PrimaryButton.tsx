"use client";

import React from "react";

interface PrimaryButtonProps {
    onClick?: () => void; // Esto permite que onClick sea opcional
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick }) => {
    return (
        <button
            // className="w-32 h-7 md:w-48 md:h-10 bg-emerald-500 hover:bg-emerald-300 rounded-md"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-full w-36 h-8 md:w-48 md:h-10 lg:w-56 lg:h-12 primary-color text-lg md:text-xl lg:text-2xl font-medium"
            // className="w-32 h-7 md:w-48 md:h-10 bg-rose-500	 hover:bg-rose-300 rounded-md"
            // className="w-32 h-7 md:w-48 md:h-10 bg-indigo-500 hover:bg-indigo-300 rounded-md"
            // className="w-32 h-7 md:w-48 md:h-10 bg-blue-400 hover:bg-blue-200 rounded-md"
            type="button"
            onClick={onClick}
        >
            Contact me !
        </button>
    );
};

export default PrimaryButton;
