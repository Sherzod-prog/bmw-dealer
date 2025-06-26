import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TestDrive = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">
              Schedule Test Drive
            </h1>
            <p className="text-muted-foreground mb-6">
              Book your test drive experience
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              This page will allow customers to schedule test drives, select
              vehicles, choose dates/times, and provide contact information.
            </p>
            <Button variant="outline">Coming Soon</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestDrive;
