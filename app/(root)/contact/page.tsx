import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-12 text-center">
            <h1 className="font-heading text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-6">
              Get in touch with our BMW dealership team
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              This page will include contact forms, dealership location,
              business hours, phone numbers, and map integration.
            </p>
            <Button variant="outline">Coming Soon</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
