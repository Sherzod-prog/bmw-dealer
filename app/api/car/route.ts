import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const car = await prisma.car.create({
      data: {
        name: data.name,
        model: data.model,
        year: data.year,
        price: data.price,
        image: data.image,
        type: data.type,
        fuel: data.fuel,
        transmission: data.transmission,
        description: data.description,
        isNew: data.isNew,
      },
    });
    return NextResponse.json([
      { message: "Car created successfully" },
      { data: car },
      { status: 201 },
    ]);
  } catch (error) {
    console.log("[CAR_POST] Server error", error);
    return NextResponse.json([
      { message: "car not created" },
      { error: "Server error" },
      { status: 500 },
    ]);
  }
}
export async function GET(req: NextRequest) {
  try {
    const cars = await prisma.car.findMany();
    return NextResponse.json(cars);
  } catch (error) {
    console.log("[CAR_GET] Server error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
