"use client";

// import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useRef } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import RotateText from "@/components/RotateText";
import Image from "next/image";
import UpworkIcon from "./icons/upwork-icon-512.png";
import LinkedinIcon from "./icons/linkedin-icon-512.png";
import InstagramIcon from "./icons/instagram-icon-512.png";
import NavBar from "@/components/NavBar";

export default function Page() {
    // const supabase = createClient();
    const esfera1Ref = useRef(null);
    const esfera2Ref = useRef(null);

    useEffect(() => {
        function moveRandomly(element: any) {
            const minX = -320;
            const minY = -320;
            const maxX = window.innerWidth - element.clientWidth + 320;
            const maxY = window.innerHeight - element.clientHeight + 320;

            const randomX = minX + Math.random() * (maxX - minX);
            const randomY = minY + Math.random() * (maxY - minY);

            element.style.transform = `translate(${randomX}px, ${randomY}px)`;

            setTimeout(() => {
                moveRandomly(element);
            }, 6000);
        }

        if (esfera1Ref.current && esfera2Ref.current) {
            moveRandomly(esfera1Ref.current);
            moveRandomly(esfera2Ref.current);
        }
    }, []);

    return (
        <div className="background">
            <div className="esfera esfera1" ref={esfera1Ref}></div>
            <div className="esfera esfera2" ref={esfera2Ref}></div>
            <main className="h-full">
                <header className="flex justify-end mt-5">
                    <a
                        href="https://www.upwork.com/freelancers/~0123e43d1cc5ba4043"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-10 m-2 transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300">
                            <Image src={UpworkIcon} alt="Upwork icon" />
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/carlos-vasquez-36b3a4148/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-10 m-2 transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300">
                            <Image src={LinkedinIcon} alt="Linkedin icon" />
                        </button>
                    </a>
                    <a
                        href="https://www.instagram.com/carlosv_22/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-10 m-2 transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300">
                            <Image src={InstagramIcon} alt="Instagram icon" />
                        </button>
                    </a>
                </header>
                <section className="w-11/12 md:w-10/12 m-auto h-full">
                    <div className="flex flex-col items-center justify-center h-3/4">
                        <div className="mt-20 w-full text-center">
                            <h1>
                                <span className="text-salte-700 text-lg md:text-2xl lg:text-4xl">
                                    Hi, my names is Carlos, I'am a
                                </span>
                                <div className="text-salte-700 text-3xl font-extrabold md:text-6xl lg:text-8xl">
                                    <RotateText
                                        texts={[
                                            "Fullstack developer",
                                            "Web design",
                                            "Backend developer",
                                            "Frontend developer",
                                            "Dev-Ops",
                                            "Cloud developer",
                                        ]}
                                        duration={5000}
                                    />
                                </div>
                            </h1>
                        </div>
                        <div className="mt-2 flex justify-center w-full">
                            <PrimaryButton />
                        </div>
                    </div>
                </section>
            </main>
            <NavBar />
        </div>
    );
}
// const [notes, setNotes] = useState<any[] | null>(null);

// useEffect(() => {
//     const getData = async () => {
//         const { data } = await supabase.from("notes").select();
//         setNotes(data);
//     };
//     getData();
// }, []);
