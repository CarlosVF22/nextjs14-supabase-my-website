import { NextResponse } from "next/server";
import prisma from "../lib/prisma";

export async function GET() {
    const allProjects = await prisma.projects.findMany({
        include: {
            Projects_Technologies: {
                select: {
                    Technologies: true, // Selecciona solo los datos de tecnologías
                },
            },
        },
    });
    return NextResponse.json({ projects: allProjects }, { status: 200 });
}
