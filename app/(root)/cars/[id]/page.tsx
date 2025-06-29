"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeasingTable from "@/components/LeasingTable";
import Link from "next/link";

export default function CarDetailPage() {
  const { id } = useParams();

  const [monthLeasing, setMonthLeasing] = useState(12);

  const fetchCarDetail = async () => {
    const response = await fetch(`http://localhost:3000/api/cars/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const carsDetail = useQuery({
    queryKey: ["carId", id],
    queryFn: fetchCarDetail,
  });
  if (carsDetail.isLoading) {
    return <div>Loading...</div>;
  }
  if (carsDetail.isError) {
    return <div>Error: {carsDetail.error.message}</div>;
  }

  const car = carsDetail.data;

  return (
    <div className=" max-w-7xl mx-auto p-2 space-y-6">
      <Card className="overflow-hidden ">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative w-full md:h-full">
            <Image
              src={car.image}
              alt={`${car.name} ${car.model}`}
              fill
              className="object-cover rounded-2xl p-2"
            />
          </div>

          <CardContent className="space-y-4 p-6">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">
                {car.name} {car.model}
              </h1>
              {car.isNew && <Badge variant="default">New</Badge>}
            </div>

            <p className="text-2xl text-blue-600 font-semibold">
              ${car.price.toLocaleString()}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground capitalize">
              <div>
                <strong>Year:</strong> {car.year}
              </div>
              <div>
                <strong>Type:</strong> {car.type}
              </div>
              <div>
                <strong>Fuel:</strong> {car.fuel}
              </div>
              <div>
                <strong>Transmission:</strong> {car.transmission}
              </div>
            </div>

            <p className="text-gray-700 pt-4 text-sm">{car.description}</p>
          </CardContent>
        </div>
        <div className="p-2">Payment Options</div>
        <Tabs defaultValue="cash" className="w-full rounded-lg p-2">
          <TabsList>
            <TabsTrigger className="w-32 cursor-pointer" value="leasing">
              Leasing
            </TabsTrigger>
            <TabsTrigger className="w-32 cursor-pointer" value="cash">
              Cash
            </TabsTrigger>
          </TabsList>
          <TabsContent value="leasing">
            Please select the leasing period and price.
            <br />
            <Button
              variant={monthLeasing === 12 ? "default" : "outline"}
              className="mt-4 cursor-pointer"
              onClick={() => setMonthLeasing(12)}
            >
              12 Months
            </Button>
            <Button
              variant={monthLeasing === 6 ? "default" : "outline"}
              className="mt-4 ml-2 cursor-pointer"
              onClick={() => setMonthLeasing(6)}
            >
              6 Months
            </Button>
            <LeasingTable leasing={monthLeasing} leasingPrice={car.price} />
          </TabsContent>
          <TabsContent value="cash">
            <p className="text-gray-700 pt-4 text-sm">
              You can pay for the car in cash. Please choose your payment
              method.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              {[
                {
                  src: "https://click.uz/uz",
                  alt: "Click",
                  image: "/payment/Click-01_hjB080W.png",
                },
                {
                  src: "https://payme.uz",
                  alt: "Payme",
                  image: "/payment/payme-01_hoAS5sv.png",
                },
                {
                  src: "https://uzcard.uz",
                  alt: "Uzcard",
                  image: "/payment/Uzcard-01.png",
                },
                {
                  src: "https://uzum.uz",
                  alt: "UZUM BANK",
                  image: "/payment/UZUM_BANK-01.png",
                },
              ].map((p, index) => (
                <Link href={p.src} key={index} target="_blank">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={100}
                    height={100}
                    className="object-contain border-2 border-gray-300 rounded-lg mx-auto mb-4"
                  />
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
