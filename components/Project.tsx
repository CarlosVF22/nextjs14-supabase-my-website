import { useEffect, useState } from "react";
import prisma from "@/app/lib/prisma";

interface ProjectType {
    id: number;
    name: string;
    start_date: Date;
    description: string;
    image: string | null;
}

export default async function Project() {
    async function getProjects() {
        "use server";
        const projects = await prisma.project.findMany();
        return projects;
    }

    const projects = await getProjects();

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}
