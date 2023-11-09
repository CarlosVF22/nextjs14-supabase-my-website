"use client";

import React, { useEffect, useRef, useState } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import RotateText from "@/components/RotateText";
import Image from "next/image";
import UpworkIcon from "./icons/upwork-icon-512.png";
import LinkedinIcon from "./icons/linkedin-icon-512.png";
import InstagramIcon from "./icons/instagram-icon-512.png";
import GithubIcon from "./icons/github-icon.png";
import NavBar from "@/components/NavBar";
import DownloadCVButton from "@/components/DownloadCVButton";
import FormContact from "@/components/FormContact";
import Modal from "@/components/Modal";
import ProjectCard from "@/components/ProjectCard";
import JobCard from "@/components/JobCard";
import HeroImage from "../public/images/hero-img-cropped.jpeg";

interface Technology {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
}

interface ProjectTechnology {
    Technologies: Technology;
}

interface JobTechnology {
    Technologies: Technology;
}

interface ProjectType {
    id: number;
    name: string;
    start_date: Date;
    description: string;
    image_url: string | null;
    project_url: string;
    Projects_Technologies: ProjectTechnology[];
}

interface JobType {
    id: number;
    name: string;
    company_name: string;
    start_date: Date;
    finish_date: Date;
    description: string;
    image_url: string | null;
    job_url: string;
    Jobs_Technologies: JobTechnology[];
}

export default function Page() {
    const esfera1Ref = useRef(null);
    const esfera2Ref = useRef(null);
    const esfera3Ref = useRef(null);
    const esfera4Ref = useRef(null);
    // const [isModalOpen, setModalOpen] = useState(false);
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [jobs, setJobs] = useState<JobType[]>([]);

    // create move in background
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

        if (esfera1Ref.current && esfera2Ref.current && esfera3Ref.current) {
            moveRandomly(esfera1Ref.current);
            moveRandomly(esfera2Ref.current);
            moveRandomly(esfera3Ref.current);
            moveRandomly(esfera4Ref.current);
        }
    }, []);

    // fetch all projects
    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("/projects");
            const data = await response.json();
            setProjects(data.projects);
        };
        fetchProjects();
    }, []);

    // fetch all jobs and sort by finish_date
    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch("/jobs");
            const data = await response.json();

            // Clasifica los jobs en dos grupos: en curso y finalizados
            const ongoingJobs = data.jobs.filter(
                (job: JobType) => job.finish_date === null
            );
            const completedJobs = data.jobs.filter(
                (job: JobType) => job.finish_date !== null
            );

            // Ordena los trabajos completados por fecha de finalización de forma descendente
            completedJobs.sort((a: JobType, b: JobType) => {
                // Convertir las fechas a objetos Date
                const dateA = new Date(a.finish_date);
                const dateB = new Date(b.finish_date);

                // Orden descendente, el más reciente primero
                return dateB.getTime() - dateA.getTime();
            });

            // Combina los trabajos en curso con los trabajos completados ya ordenados
            const sortedJobs = [...ongoingJobs, ...completedJobs];

            // Establece el estado con los trabajos ordenados
            setJobs(sortedJobs);
        };
        fetchJobs();
    }, []);

    const handleOpenWhatsapp = () => {
        const skolmiNumber = "+573148393111";
        const message = "Hola 😀";
        const encodedMessage = encodeURIComponent(message);
        const url = `https://api.whatsapp.com/send?phone=${skolmiNumber}&text=${encodedMessage}`;

        window.open(url, "_blank");
    };

    // const handleCloseModal = () => {
    //     setModalOpen(false);
    // };

    return (
        <div className="background">
            <div id="esfera1" className="esfera" ref={esfera1Ref}></div>
            <div id="esfera2" className="esfera" ref={esfera2Ref}></div>
            <div id="esfera3" className="esfera" ref={esfera3Ref}></div>
            <div id="esfera4" className="esfera" ref={esfera4Ref}></div>
            <main className="h-full relative">
                <header className="flex mt-5 justify-center md:mr-16 md:justify-end">
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
                        href="https://github.com/CarlosVF22"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-10 m-2 transition ease-in-out hover:-translate-y-1 hover:scale-125 duration-300">
                            <Image src={GithubIcon} alt="Github icon" />
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
                        <div className="image-container-hero">
                            <Image
                                src={HeroImage}
                                width={350}
                                alt="Profile picture"
                            />
                        </div>
                        <div className="mt-5 w-full text-center">
                            <h1>
                                <span className="text-salte-700 text-lg md:text-2xl lg:text-4xl">
                                    Hi, my name is Carlos, I'am a
                                </span>
                                <div className="text-salte-700 text-3xl font-extrabold md:text-6xl lg:text-8xl">
                                    <RotateText
                                        texts={[
                                            "Fullstack developer",
                                            "Web designer",
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
                            <div className="p-2">
                                <PrimaryButton onClick={handleOpenWhatsapp} />
                            </div>
                            <div className="p-2">
                                <DownloadCVButton />
                            </div>
                        </div>
                    </div>
                    {/* {isModalOpen && (
                        <Modal onClose={handleCloseModal}>
                            <FormContact />
                        </Modal>
                    )} */}
                </section>
                <section
                    id="jobs"
                    className="relative flex justify-center flex-col items-center"
                >
                    <h2 className="mb-5 text-salte-700 text-6xl font-extrabold md:text-6xl lg:text-8xl">
                        Jobs
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        {jobs.map((job) => {
                            return (
                                <JobCard
                                    key={job.id}
                                    name={job.name}
                                    company_name={job.company_name}
                                    startDate={job.start_date}
                                    finishDate={job.finish_date}
                                    description={job.description}
                                    image_url={job.image_url}
                                    job_url={job.job_url}
                                    Jobs_Technologies={job.Jobs_Technologies}
                                />
                            );
                        })}
                    </div>
                </section>
                <section
                    id="projects"
                    className="relative flex justify-center flex-col items-center mt-24"
                >
                    <h2 className="mb-5 text-salte-700 text-6xl font-extrabold md:text-6xl lg:text-8xl">
                        Projects
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        {projects.map((project) => {
                            return (
                                <ProjectCard
                                    key={project.id}
                                    name={project.name}
                                    startDate={project.start_date}
                                    description={project.description}
                                    image_url={project.image_url}
                                    project_url={project.project_url}
                                    Projects_Technologies={
                                        project.Projects_Technologies
                                    }
                                />
                            );
                        })}
                    </div>
                </section>
            </main>
            <NavBar />
        </div>
    );
}
