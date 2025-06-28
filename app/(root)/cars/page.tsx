"use client";
import { useState, useMemo } from "react";
import CarCard from "@/components/CarCard";
import CarFilter, { FilterState } from "@/components/CarFilter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ICar } from "@/lib/types";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const Cars = () => {
  const [sortByPriceAsc, setSortByPriceAsc] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200000],
    bodyType: "all",
    fuelType: "all",
    transmission: "all",
    year: "all",
    searchTerm: "",
  });

  const fetchCarList = async () => {
    const params = new URLSearchParams();

    params.append("minPrice", filters.priceRange[0].toString());
    params.append("maxPrice", filters.priceRange[1].toString());

    if (filters.bodyType !== "all") params.append("bodyType", filters.bodyType);
    if (filters.fuelType !== "all")
      params.append("engineType", filters.fuelType);
    if (filters.transmission !== "all")
      params.append("transmission", filters.transmission);
    if (filters.year !== "all") params.append("year", filters.year);
    if (filters.searchTerm) params.append("search", filters.searchTerm);

    const url =
      params.toString().length > 0
        ? `http://localhost:3000/api/car?${params.toString()}`
        : "http://localhost:3000/api/car";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };
  //  /api/car?minPrice=40000&maxPrice=120000&engineType=Diesel&bodyType=SUV
  //  /api/cars?minPrice=40000&maxPrice=120000&engineType=Diesel&bodyType=SUV

  const allCars = useQuery({ queryKey: ["cars"], queryFn: fetchCarList });
  if (allCars.isLoading) {
    return <div>Loading...</div>;
  }
  if (allCars.isError) {
    return <div>Error: {allCars.error.message}</div>;
  }

  // const filteredCars = useMemo(() => {
  //   let cars = allCars.data.filter((car: ICar) => {
  //     // Price filter
  //     if (
  //       car.price < filters.priceRange[0] ||
  //       car.price > filters.priceRange[1]
  //     ) {
  //       return false;
  //     }

  //     // Search term filter
  //     if (filters.searchTerm) {
  //       const searchTerm = filters.searchTerm.toLowerCase();
  //       const carText = `${car.name} ${car.model} ${car.year}`.toLowerCase();
  //       if (!carText.includes(searchTerm)) {
  //         return false;
  //       }
  //     }

  //     // Body type filter
  //     if (filters.bodyType !== "all") {
  //       const carType = car.type.toLowerCase().includes("suv")
  //         ? "suv"
  //         : car.type.toLowerCase().includes("sedan")
  //         ? "sedan"
  //         : car.type.toLowerCase().includes("coupe")
  //         ? "coupe"
  //         : "other";
  //       if (carType !== filters.bodyType) {
  //         return false;
  //       }
  //     }

  //     // Fuel type filter
  //     if (filters.fuelType !== "all") {
  //       if (car.fuel.toLowerCase() !== filters.fuelType) {
  //         return false;
  //       }
  //     }

  //     // Transmission filter
  //     if (filters.transmission !== "all") {
  //       if (car.transmission.toLowerCase() !== filters.transmission) {
  //         return false;
  //       }
  //     }

  //     // Year filter
  //     if (filters.year !== "all") {
  //       if (car.year.toString() !== filters.year) {
  //         return false;
  //       }
  //     }

  //     return true;
  //   });
  //   cars = cars.sort((a: ICar, b: ICar) =>
  //     sortByPriceAsc ? a.price - b.price : b.price - a.price
  //   );
  //   return cars;
  // }, [filters, sortByPriceAsc]);

  return (
    <div className="min-h-screen bg-background">
      {" "}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Vehicle Inventory
          </h1>
          <p className="text-lg text-muted-foreground">
            Find your perfect BMW from our extensive collection
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <CarFilter filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Cars Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {allCars.data.length} of {allCars.data.length} vehicles
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSortByPriceAsc((prev) => !prev)}
              >
                Sort by Price
                {sortByPriceAsc ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </Button>
            </div>

            {allCars.data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {allCars.data.map((car: ICar) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="mx-auto h-12 w-12 text-muted-foreground mb-4"
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
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No vehicles found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
