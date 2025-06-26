"use client";
import { useState, useMemo } from "react";
import CarCard from "@/components/CarCard";
import CarFilter, { FilterState } from "@/components/CarFilter";
import { Button } from "@/components/ui/button";

const Cars = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 200000],
    bodyType: "all",
    fuelType: "all",
    transmission: "all",
    year: "all",
    searchTerm: "",
  });

  // Sample cars data
  const allCars = [
    {
      id: "1",
      name: "BMW",
      model: "X5",
      year: 2024,
      price: 65000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23001f3f;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car1)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EBMW X5%3C/text%3E%3C/svg%3E",
      type: "SUV",
      fuel: "Hybrid",
      transmission: "Automatic",
      isNew: true,
    },
    {
      id: "2",
      name: "BMW",
      model: "3 Series",
      year: 2024,
      price: 45000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23001a33;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23002244;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car2)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='18' font-family='Arial'%3EBMW 3 Series%3C/text%3E%3C/svg%3E",
      type: "Sedan",
      fuel: "Gasoline",
      transmission: "Automatic",
      isNew: true,
    },
    {
      id: "3",
      name: "BMW",
      model: "iX",
      year: 2024,
      price: 85000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23004080;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car3)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EBMW iX%3C/text%3E%3C/svg%3E",
      type: "Electric SUV",
      fuel: "Electric",
      transmission: "Automatic",
      isNew: true,
    },
    {
      id: "4",
      name: "BMW",
      model: "M4",
      year: 2024,
      price: 75000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23002244;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car4)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EBMW M4%3C/text%3E%3C/svg%3E",
      type: "Coupe",
      fuel: "Gasoline",
      transmission: "Manual",
      isNew: false,
    },
    {
      id: "5",
      name: "BMW",
      model: "X7",
      year: 2023,
      price: 95000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23001f3f;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car5)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EBMW X7%3C/text%3E%3C/svg%3E",
      type: "SUV",
      fuel: "Gasoline",
      transmission: "Automatic",
      isNew: false,
    },
    {
      id: "6",
      name: "BMW",
      model: "i4",
      year: 2024,
      price: 55000,
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240'%3E%3Cdefs%3E%3ClinearGradient id='car6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23001a33;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='240' fill='url(%23car6)' /%3E%3Ctext x='200' y='120' text-anchor='middle' fill='white' font-size='20' font-family='Arial'%3EBMW i4%3C/text%3E%3C/svg%3E",
      type: "Sedan",
      fuel: "Electric",
      transmission: "Automatic",
      isNew: true,
    },
  ];

  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      // Price filter
      if (
        car.price < filters.priceRange[0] ||
        car.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Search term filter
      if (filters.searchTerm) {
        const searchTerm = filters.searchTerm.toLowerCase();
        const carText = `${car.name} ${car.model} ${car.year}`.toLowerCase();
        if (!carText.includes(searchTerm)) {
          return false;
        }
      }

      // Body type filter
      if (filters.bodyType !== "all") {
        const carType = car.type.toLowerCase().includes("suv")
          ? "suv"
          : car.type.toLowerCase().includes("sedan")
          ? "sedan"
          : car.type.toLowerCase().includes("coupe")
          ? "coupe"
          : "other";
        if (carType !== filters.bodyType) {
          return false;
        }
      }

      // Fuel type filter
      if (filters.fuelType !== "all") {
        if (car.fuel.toLowerCase() !== filters.fuelType) {
          return false;
        }
      }

      // Transmission filter
      if (filters.transmission !== "all") {
        if (car.transmission.toLowerCase() !== filters.transmission) {
          return false;
        }
      }

      // Year filter
      if (filters.year !== "all") {
        if (car.year.toString() !== filters.year) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

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
                Showing {filteredCars.length} of {allCars.length} vehicles
              </p>
              <Button variant="outline" size="sm">
                Sort by Price
              </Button>
            </div>

            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
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
