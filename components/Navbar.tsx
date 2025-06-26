// import { Link, useLocation } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = () => {
  //   const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Vehicles" },
    { href: "/contact", label: "Contact" },
    { href: "/test-drive", label: "Test Drive" },
  ];

  return (
    <nav className=" border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        {/* BMW Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center">
            <span className="text-white font-bold text-lg">BMW</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Dealership
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
                // location.pathname === item.href
                // ? "text-primary"
                // : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Get Quote</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/test-drive">Schedule Test Drive</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
