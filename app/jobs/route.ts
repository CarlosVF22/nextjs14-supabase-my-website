import { NextResponse } from "next/server";
import prisma from "../lib/prisma";

export async function GET() {
    const allJobs = await prisma.jobs.findMany({
        include: {
            Jobs_Technologies: {
                select: {
                    Technologies: true, // Selecciona solo los datos de tecnologías
                },
            },
        },
    });
    return NextResponse.json({ jobs: allJobs }, { status: 200 });
}
