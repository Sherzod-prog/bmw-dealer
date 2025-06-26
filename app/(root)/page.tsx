import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  // Sample featured cars data
  const featuredCars = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Featured Vehicles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collection of BMW vehicles, each engineered
              for the ultimate driving experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/cars">View All Vehicles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From sales to service, we're here for your complete BMW
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Vehicle Sales
              </h3>
              <p className="text-muted-foreground">
                Explore our complete range of new and certified pre-owned BMW
                vehicles.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Service & Maintenance
              </h3>
              <p className="text-muted-foreground">
                Professional service from certified BMW technicians using
                genuine parts.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Financing
              </h3>
              <p className="text-muted-foreground">
                Flexible financing options and leasing programs tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
