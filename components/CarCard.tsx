import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { CarTaxiFront, FuelIcon, RefreshCwIcon } from "lucide-react";
import { ICar } from "@/lib/types";

const CarCard = ({
  id,
  name,
  model,
  year,
  price,
  image,
  type,
  fuel,
  transmission,
  isNew = false,
}: ICar) => {
  console.log("CarCard props:", model);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group p-0">
      <div className="relative overflow-hidden">
        <Image
          width={650}
          height={300}
          src={image || ""}
          alt={`${model} ${name}`}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {year} {name} {model}
          </h3>
          <span className="font-bold text-primary text-lg">${price}</span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1 capitalize">
            <CarTaxiFront className="w-4 h-4 " />
            {type}
          </span>
          <span className="flex items-center gap-1 capitalize">
            <FuelIcon className="w-4 h-4" />
            {fuel}
          </span>
          <span className="flex items-center gap-1 capitalize">
            <RefreshCwIcon className="w-4 h-4" />
            {transmission}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1" asChild>
          <Link href={`/cars/${id}`}>View Details</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/test-drive">Test Drive</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
