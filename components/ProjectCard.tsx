import React, { useState } from "react";
import Image from "next/image";

interface Technology {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
}

interface ProjectTechnology {
    Technologies: Technology;
}
interface ProjectProps {
    name: string;
    startDate: Date;
    description: string;
    image_url: string | null;
    project_url: string;
    Projects_Technologies: ProjectTechnology[];
}

export default function ProjectCard({
    name,
    startDate,
    description,
    image_url,
    project_url,
    Projects_Technologies,
}: ProjectProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const dateInstance = new Date(startDate);
    const formattedDate = dateInstance.toLocaleDateString();

    // Función para renderizar las tecnologías
    const renderTechnologies = () => {
        return Projects_Technologies.map((pt) => (
            <div key={pt.Technologies.id} className="m-1">
                {pt.Technologies.image_url && (
                    <Image
                        width={40}
                        height={40}
                        src={pt.Technologies.image_url}
                        alt={pt.Technologies.name}
                    />
                )}
            </div>
        ));
    };

    const toggleIsExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const shortDescription =
        description.length > 100
            ? description.substring(0, 100) + "..."
            : description;

    return (
        <div className="flex m-5 flex-col items-center bg-transparent border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-violet-50 p-5">
            <div className="flex h-40 items-center justify-center mb-1">
                {image_url && (
                    <Image
                        width={120}
                        height={150}
                        src={image_url}
                        alt={name}
                    />
                )}
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h3 className="md:h-16 h-20 flex justify-center md:text-2xl text-lg font-bold tracking-tight text-gray-900 mb-1 ">
                    {name}
                </h3>
                <p className="mb-5 font-normal text-gray-700 ">
                    {isExpanded ? description : shortDescription}
                    {description.length > 200 && (
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={toggleIsExpanded}
                        >
                            {isExpanded ? " Ver menos" : " Ver más"}
                        </span>
                    )}
                </p>
                <div className="flex flex-col">
                    <h5 className="text-gray-600 mb-1 text-lg font-semibold">
                        Date
                    </h5>
                    <span>{formattedDate}</span>
                </div>
                <div className="mt-4 min-h-[3rem]">
                    <h5 className="text-gray-600 mb-1 text-lg font-semibold">
                        Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2 overflow-auto h-28 mb-1 sm:overflow-visible">
                        {renderTechnologies()}
                    </div>
                    <a href={project_url} target="_blank">
                        <button
                            type="button"
                            className="rounded-full w-full h-8 primary-color text-lg font-medium cursor-pointer"
                        >
                            Visit
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
