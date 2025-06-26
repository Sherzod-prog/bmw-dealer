"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";

const CarDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">
              Car Detail Page
            </h1>
            <p className="text-muted-foreground mb-6">
              Detailed view for car ID: {id}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              This page will show comprehensive details about the selected
              vehicle, including specifications, features, gallery, and
              purchasing options.
            </p>
            <Button variant="outline">Coming Soon</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CarDetail;
