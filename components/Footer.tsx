import React from "react";
export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; 2024-{new Date().getFullYear()} BMW Dealership. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
