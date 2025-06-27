import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id); // Convert id to number
    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid car id" }, { status: 400 });
    }
    const data = await req.json();
    const car = await prisma.car.update({
      where: { id },
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
    return NextResponse.json(
      { message: "Car updated successfully", car },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      `[CAR_PATCH] Error updating car with ID ${params.id}:`,
      error
    );
    return NextResponse.json(
      { message: "Server error", error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id)) {
      return NextResponse.json(
        { message: "Invalid car id", status: 400 },
        { status: 400 }
      );
    }
    await prisma.car.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: "Car deleted successfully", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.log("[CAR_DELETE] Server error", error);
    return NextResponse.json(
      { message: "Car not deleted", error: "Server error", status: 500 },
      { status: 500 }
    );
  }
}
