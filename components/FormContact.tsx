"use client";

import React from "react";

export default function FormContact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aquí pondrías la lógica para procesar los datos del formulario
    };

    return (
        <div className="md:w-96 m-auto py-8 ">
            <form
                className="flex flex-col gap-4 items-center rounded-3xl"
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
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 rounded-full w-36 h-8 md:w-48 md:h-10 lg:w-56 lg:h-12 primary-color text-lg md:text-xl lg:text-2xl font-medium"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
