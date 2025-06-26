import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
    },
  });

  // Parse items manually if they are stored as strings
  const parsedOrders = orders.map((order) => ({
    ...order,
    items:
      typeof order.items === "string" ? JSON.parse(order.items) : order.items,
  }));

  return NextResponse.json(parsedOrders);
}
