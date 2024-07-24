import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req:Request){
    const body = await req.json();
    const res = await prisma.user.create({data:body});
    return NextResponse.json({data:res},{status:200})
}
