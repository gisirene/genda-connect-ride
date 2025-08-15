import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ServicesSection } from "@/components/sections/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Services</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Complete Transport
                <span className="block text-accent">Solutions</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Discover all the ways Genda makes transportation safer, smarter, and more convenient.
              </p>
              <Link to="/">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
};

export default Services;