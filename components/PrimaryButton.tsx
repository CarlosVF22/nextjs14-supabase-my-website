"use client";

import React from "react";

export default function PrimaryButton() {
    return (
        <button
            // className="w-32 h-7 md:w-48 md:h-10 bg-emerald-500 hover:bg-emerald-300 rounded-md"
            className="w-36 h-8 md:w-48 md:h-10 lg:w-56 lg:h-12 bg-amber-500 hover:bg-amber-300 rounded-md text-lg md:text-xl lg:text-2xl"
            // className="w-32 h-7 md:w-48 md:h-10 bg-rose-500	 hover:bg-rose-300 rounded-md"
            // className="w-32 h-7 md:w-48 md:h-10 bg-indigo-500 hover:bg-indigo-300 rounded-md"
            // className="w-32 h-7 md:w-48 md:h-10 bg-blue-400 hover:bg-blue-200 rounded-md"
            type="button"
        >
            Contact me !
        </button>
    );
}
