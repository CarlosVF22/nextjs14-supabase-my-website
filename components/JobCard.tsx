import React, { useState } from "react";
import Image from "next/image";

interface Technology {
    id: number;
    name: string;
    image_url: string | null;
    created_at: string;
}

interface JobTechnology {
    Technologies: Technology;
}
interface JobProps {
    name: string;
    startDate: Date;
    finishDate: Date;
    company_name: string;
    description: string;
    image_url: string | null;
    job_url: string;
    Jobs_Technologies: JobTechnology[];
}

export default function JobCard({
    name,
    startDate,
    finishDate,
    company_name,
    description,
    image_url,
    job_url,
    Jobs_Technologies,
}: JobProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const dateInstanceStart = new Date(startDate);
    const dateInstanceFinish = new Date(finishDate);
    const formattedDateStart = dateInstanceStart.toLocaleDateString();
    const formattedDateFinish = dateInstanceFinish.toLocaleDateString();

    // Función para renderizar las tecnologías
    const renderTechnologies = () => {
        return Jobs_Technologies.map((pt) => (
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
            <div className="flex h-40 items-center justify-center">
                {image_url && (
                    <Image
                        width={120}
                        height={120}
                        src={image_url}
                        alt={name}
                    />
                )}
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal h-full">
                <h3 className="md:h-16 h-20 flex justify-center md:text-2xl text-lg font-bold tracking-tight text-gray-900 ">
                    {name}
                </h3>
                <h4 className="text-gray-600 mb-2 text-xl font-bold">
                    {company_name}
                </h4>
                <div>
                    <h5 className="text-gray-600 mb-1 text-lg font-semibold">
                        Description
                    </h5>
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
                </div>
                <div className="flex flex-col">
                    <h5 className="text-gray-600 mb-1 text-lg font-semibold">
                        Dates
                    </h5>
                    <span>Start date: {formattedDateStart}</span>
                    {finishDate ? (
                        <span className="mb-2">
                            Finish date: {formattedDateFinish}
                        </span>
                    ) : (
                        <span className="mb-2">in progress</span>
                    )}
                </div>
                <div className="mt-4 min-h-[3rem]">
                    <h5 className="text-gray-600 mb-1 text-lg font-semibold">
                        Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2 overflow-auto h-28 mb-1 sm:overflow-visible">
                        {renderTechnologies()}
                    </div>
                    <a href={job_url} target="_blank">
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
