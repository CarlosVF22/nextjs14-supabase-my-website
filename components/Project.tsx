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

export default function Project({
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
        description.length > 200
            ? description.substring(0, 200) + "..."
            : description;

    return (
        <div className="flex m-5 flex-col items-center bg-transparent border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-violet-50">
            {image_url && (
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={image_url}
                    alt={name}
                />
            )}
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    {name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 ">
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
                <span>{formattedDate}</span>
                <div className="flex">{renderTechnologies()}</div>
                <a href={project_url} target="_blank">
                    <button
                        type="button"
                        className="rounded-full w-36 h-8 primary-color text-lg font-medium cursor-pointer"
                    >
                        Ir
                    </button>
                </a>
            </div>
        </div>
    );
}
