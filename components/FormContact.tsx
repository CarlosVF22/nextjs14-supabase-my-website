"use client";

import React from "react";

export default function FormContact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí pondrías la lógica para procesar los datos del formulario
    };

    return (
        <div className="w-11/12 md:w-10/12 m-auto py-8">
            <form
                className="flex flex-col gap-4 items-center"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="form-input w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-salte-500 transition ease-in-out duration-300"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="form-input w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-salte-500 transition ease-in-out duration-300"
                />
                <textarea
                    placeholder="Your message"
                    className="form-textarea w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-salte-500 transition ease-in-out duration-300"
                    rows={5}
                ></textarea>
                <button
                    type="submit"
                    className="primary-color transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-full bg-salte-700 text-white px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 text-sm md:text-lg lg:text-xl"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
