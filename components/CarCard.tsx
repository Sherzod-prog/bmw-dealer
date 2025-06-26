import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface CarCardProps {
  id: string;
  name: string;
  model: string;
  year: number;
  price: number;
  image: string;
  type: string;
  fuel: string;
  transmission: string;
  isNew?: boolean;
}

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
}: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={300}
          src={image}
          alt={`${model}`}
          className="object-contain group-hover:scale-105 transition-transform duration-300"
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
          <span className="font-bold text-primary text-lg">
            ${price.toLocaleString()}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            {type}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            {fuel}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
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
