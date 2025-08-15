import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactSection } from "@/components/sections/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">Contact</Badge>
              <h1 className="text-5xl font-bold mb-6">
                Get in
                <span className="block text-accent">Touch</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                We're here to help with any questions about our platform and services.
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

        {/* Contact Content */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;