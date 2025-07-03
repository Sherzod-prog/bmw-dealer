import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

interface Filters {
  price?: { gte?: number; lte?: number };
  engineType?: string;
  bodyType?: string;
  transmission?: string;
  year?: number;
  OR?: Array<{
    name?: { contains: string; mode: "insensitive" };
    model?: { contains: string; mode: "insensitive" };
  }>;
}

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
    const { searchParams } = new URL(req.url);

    const minPrice = searchParams.get("minprice");
    const maxPrice = searchParams.get("maxprice");
    const engineType = searchParams.get("fuel");
    const bodyType = searchParams.get("type");
    const transmission = searchParams.get("transmission");
    const year = searchParams.get("year");
    const search = searchParams.get("search");

    const filters: Filters = {};

    if (minPrice || maxPrice) {
      filters.price = {};
      if (minPrice) filters.price.gte = Number(minPrice);
      if (maxPrice) filters.price.lte = Number(maxPrice);
    }

    if (engineType) filters.engineType = engineType;
    if (bodyType) filters.bodyType = bodyType;
    if (transmission) filters.transmission = transmission;
    if (year) filters.year = Number(year);

    if (search) {
      filters.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { model: { contains: search, mode: "insensitive" } },
      ];
    }

    const cars = await prisma.car.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        model: true,
        year: true,
        price: true,
        image: true,
        type: true,
        fuel: true,
        transmission: true,
        description: true,
        isNew: true,
      },
    });
    return NextResponse.json(cars);
  } catch (error) {
    console.log("[CAR_GET] Server error", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
